import assert from 'node:assert'
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
    .replaceAll('∎\n', '')
    .replaceAll('←', '\r')
    .replaceAll('⇔', '\u{FEFF}')

const FIXTURE_FILENAME_PREFIX = 'yaml-test-suite-main/src/'

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
      filename,
      name: firstDocument.name,
      from: firstDocument.from,
      tags: firstDocument.tags.split(' '),
      cases: documents.map((rawTestCase) => {
        const testCase = {...rawTestCase}

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

const data = Array.from(getData(), (file) => {
  const filenameBase = file.filename.replace('.yaml', '')
  return {
    filenameBase,
    data: file,
  }
})

// TODO: Use `'${name}'` when we drop support for Node.js v14
const toSpecifier = (name) => `$${name}`

await Promise.all([
  ...data.map(({filenameBase, data}) => {
    const stringifiedData = JSON.stringify(data, undefined, 2)
    assert.equal(
      unescape(stringifiedData),
      stringifiedData,
      `Unexpected escaped characters in ${data.filename}`,
    )

    return [
      writeTextFile(
        new URL(`${filenameBase}.js`, DATA_DIRECTORY),
        `export default ${stringifiedData}`,
      ),
      writeTextFile(
        new URL(`${filenameBase}.d.ts`, DATA_DIRECTORY),
        outdent`
          declare const Test_${filenameBase}: ${stringifiedData}

          export default Test_${filenameBase}
        `,
      ),
    ]
  }),

  writeTextFile(
    new URL('./index.d.ts', DATA_DIRECTORY),
    data
      .map(
        ({filenameBase}) =>
          `export type {default as ${toSpecifier(filenameBase)}} from './${filenameBase}.js'`,
      )
      .join('\n'),
  ),

  writeTextFile(
    new URL('./index.js', DATA_DIRECTORY),
    data
      .map(
        ({filenameBase}) =>
          `export {default as ${toSpecifier(filenameBase)}} from './${filenameBase}.js'`,
      )
      .join('\n'),
  ),

  writeTextFile(
    new URL('../index.d.ts', import.meta.url),
    outdent`
      import {
      ${data.map(({filenameBase}) => `  ${toSpecifier(filenameBase)} as Test_${filenameBase},`).join('\n')}
      } from './data/index.js'

      declare const Suite: readonly [
      ${data.map(({filenameBase}) => `  typeof Test_${filenameBase},`).join('\n')}
      ]

      export default Suite
    `,
  ),
])
