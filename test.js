import assert from 'node:assert/strict'
import test from 'node:test'
import yamlTestSuite from './index.js'

const assertTags = (tags, name) => {
  assert.ok(Array.isArray(tags))
  assert.ok(tags.length !== 0, `${name} should not have empty tags`)
  assert.ok(tags.every((tag) => typeof tag === 'string' && tag !== ''))
}

test('Main', () => {
  const seen = new Set()
  for (const data of yamlTestSuite) {
    assert.ok(/^[0-9A-Z]{4}$/.test(data.id))
    assert.ok(!seen.has(data.id))
    seen.add(data.id)

    assert.equal(data.filename, `${data.id}.yaml`)
    assert.equal(typeof data.name, 'string')
    assert.equal(typeof data.from, 'string')
    assertTags(data.tags, `test[${data.id}]`)

    assert.ok(Array.isArray(data.cases))
    assert.ok(data.cases.length !== 0)

    for (const [index, testCase] of data.cases.entries()) {
      assert.equal(typeof testCase.yaml, 'string')
      if (testCase.tags) {
        assertTags(testCase.tags, `test[${data.id}] case[${index + 1}]`)
      }
      if ('fail' in testCase) {
        assert.equal(testCase.fail, true)
      }
    }
  }
})
