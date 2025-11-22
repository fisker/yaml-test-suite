import {expectType} from 'tsd'
import yamlTestSuite from './index.js'

expectType<string>(yamlTestSuite[0].name.repeat(1))
expectType<string>(yamlTestSuite[0].cases[0].yaml[0].repeat(1))
