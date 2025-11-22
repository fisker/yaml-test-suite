import assert from 'node:assert/strict'
import test from 'node:test'
import yamlTestSuite from './index.js'

const assertTags = (tags) => {
  assert.ok(Array.isArray(tags))
  assert.ok(tags.every((tag) => typeof tag === 'string' && tag !== ''))
}

test('Main', () => {
  for (const data of yamlTestSuite) {
    assert.ok(/^[0-9A-Z]{4}\.yaml$/.test(data.filename))
    assert.equal(typeof data.name, 'string')
    assert.equal(typeof data.from, 'string')
    assertTags(data.tags)

    assert.ok(Array.isArray(data.cases))
    assert.ok(data.cases.length !== 0)

    for (const testCase of data.cases) {
      assert.equal(typeof testCase.yaml, 'string')
      if (testCase.tags) {
        assertTags(testCase.tags)
      }
    }
  }
})
