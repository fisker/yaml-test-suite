import {expectAssignable, expectType} from 'tsd'
import yamlTestSuite from './index.js'

for (const file of yamlTestSuite) {
  expectAssignable<string>(file.id)
  expectAssignable<string>(file.name)
  expectAssignable<string[]>(file.tags)

  for (const testCase of file.cases) {
    expectAssignable<string>(testCase.yaml)
    if ('fail' in testCase) {
      expectType<true>(testCase.fail)
    }
  }
}
