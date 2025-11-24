import assert from 'node:assert'
import fs from 'node:fs/promises'
import path from 'node:path'
import {inspect} from 'node:util'
import {outdent} from 'outdent'
import {parse} from 'yaml'
import {downloadFile, readZipFile, writeTextFile} from './utilities.js'

const ZIP_URL =
  'https://github.com/yaml/yaml-test-suite/archive/refs/heads/main.zip'
const CACHE_FILE = new URL('../.cache/yaml-test-suite.zip', import.meta.url)
const DATA_DIRECTORY = new URL('../data/', import.meta.url)

await Promise.any(
  [ZIP_URL, `https://ghfast.top/${ZIP_URL}`].map((url) =>
    downloadFile({url, cacheFile: CACHE_FILE}),
  ),
)

const FIRST_DOCUMENT_ALLOWED_KEYS = new Map([
  ['name', {required: true}],
  ['from', {required: true}],
  ['tags', {required: true}],
  ['yaml', {required: true}],
  ['fail', {required: false}],

  ['tree', {required: true}],
  ['json', {required: false}],
  ['dump', {required: false}],
  ['emit', {required: false}],
  ['toke', {required: false}],
  ['also', {required: false}],
])
const REST_DOCUMENT_ALLOWED_KEYS = new Map([
  ['yaml', {required: true}],
  ['fail', {required: false}],

  ['dump', {required: false}],
  ['tree', {required: false}],
  ['json', {required: false}],
  ['emit', {required: false}],
  ['note', {required: false}],
  ['tags', {required: false}],
])

function assertKeys(document, allowedKeys) {
  const keys = Object.keys(document)
  for (const key of keys) {
    assert.ok(
      allowedKeys.has(key),
      `Unexpected key '${key}' in ${inspect(document)}`,
    )
  }

  for (const [key, settings] of allowedKeys) {
    if (settings.required) {
      assert.ok(
        keys.includes(key),
        `Required key '${key}' missing in ${inspect(document)}`,
      )
    }
  }
}

// https://github.com/yaml/yaml-test-suite/tree/main?tab=readme-ov-file#special-characters
const unescape = (text) =>
  text
    .replaceAll('␣', ' ')
    // eslint-disable-next-line sonarjs/slow-regex
    .replaceAll(/—*»/g, '\t')
    .replaceAll('↵', '')
    .replace(/∎\n$/, '')
    .replaceAll('←', '\r')
    .replaceAll('⇔', '\u{FEFF}')

const FIXTURE_FILENAME_PREFIX = 'yaml-test-suite-main/src/'
const FIXTURE_EXTENSION = '.yaml'

function* getData() {
  for (const file of readZipFile(
    CACHE_FILE,
    (file) =>
      !file.isDirectory && file.entryName.startsWith(FIXTURE_FILENAME_PREFIX),
  )) {
    const filename = file.name.slice(FIXTURE_FILENAME_PREFIX.length)
    assert.ok(
      /^[0-9A-Z]{4}\.yaml$/.test(filename),
      `Unexpected test file: ${file.name}`,
    )

    const extension = path.extname(filename)
    assert.equal(extension, FIXTURE_EXTENSION)
    const id = path.basename(filename, extension)

    const text = file.data.toString()
    const documents = parse(text)
    assert.ok(
      Array.isArray(documents) && documents.length !== 0,
      `Unexpected fixture content: ${file.name}`,
    )

    const [firstDocument] = documents
    if (firstDocument.skip) {
      continue
    }

    for (const [index, document] of documents.entries()) {
      assertKeys(
        document,
        index === 0 ? FIRST_DOCUMENT_ALLOWED_KEYS : REST_DOCUMENT_ALLOWED_KEYS,
      )
    }

    yield {
      id,
      filename,
      name: firstDocument.name,
      from: firstDocument.from,
      tags: firstDocument.tags.split(' '),
      cases: documents.map((rawTestCase) => {
        const testCase = {...rawTestCase}

        // https://github.com/yaml/yaml-test-suite/pull/87/commits/b7189c364c2098600accbd04ea81674674d4f5d7#diff-e609193a8d03dfd908baa8658db77a8333f66475581364c6f4be6539133880f7R20
        for (const property of ['yaml', 'emit', 'tree', 'dump']) {
          if (testCase[property]) {
            testCase[property] = unescape(testCase[property])
          }
        }

        if (testCase.tags) {
          testCase.tags = testCase.tags.split(' ')
        }

        return testCase
      }),
    }
  }
}

await fs.rm(DATA_DIRECTORY, {force: true, recursive: true})
await fs.mkdir(DATA_DIRECTORY, {recursive: true})

const data = [...getData()]

// TODO: Use `'${name}'` when we drop support for Node.js v14
const toSpecifier = (name) => `$${name}`

await Promise.all([
  ...data.map((file) => {
    const stringifiedData = JSON.stringify(file, undefined, 2)
    assert.equal(
      unescape(stringifiedData),
      stringifiedData,
      `Unexpected escaped characters in ${file.filename}`,
    )

    return [
      writeTextFile(
        new URL(`${file.id}.js`, DATA_DIRECTORY),
        `export default ${stringifiedData}`,
      ),
      writeTextFile(
        new URL(`${file.id}.d.ts`, DATA_DIRECTORY),
        outdent`
          declare const Test_${file.id}: ${stringifiedData}

          export default Test_${file.id}
        `,
      ),
    ]
  }),

  writeTextFile(
    new URL('./index.d.ts', DATA_DIRECTORY),
    data
      .map(
        (file) =>
          `export type {default as ${toSpecifier(file.id)}} from './${file.id}.js'`,
      )
      .join('\n'),
  ),

  writeTextFile(
    new URL('./index.js', DATA_DIRECTORY),
    data
      .map(
        (file) =>
          `export {default as ${toSpecifier(file.id)}} from './${file.id}.js'`,
      )
      .join('\n'),
  ),

  writeTextFile(
    new URL('../index.d.ts', import.meta.url),
    outdent`
      import {
      ${data.map((file) => `  ${toSpecifier(file.id)},`).join('\n')}
      } from './data/index.js'

      declare const Suite: readonly [
      ${data.map((file) => `  typeof ${toSpecifier(file.id)},`).join('\n')}
      ]

      export default Suite
    `,
  ),
])
