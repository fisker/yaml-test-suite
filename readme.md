# yaml-test-suite

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/yaml-test-suite.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/yaml-test-suite
[license_badge]: https://img.shields.io/npm/l/yaml-test-suite.svg?style=flat-square
[license_link]: https://github.com/fisker/yaml-test-suite/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/yaml-test-suite.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/yaml-test-suite

> Test Suite for YAML.

[yaml-test-suite](https://github.com/yaml/yaml-test-suite) data in JavaScript.

## Install

```bash
yarn add yaml-test-suite
```

## Usage

```js
import * as yamlTestSuite from 'yaml-test-suite'

console.log(Object.values(yamlTestSuite))
// =>
// [
//   {
//     filename: '229Q.yaml',
//     name: 'Spec Example 2.4. Sequence of Mappings',
//     from: 'http://www.yaml.org/spec/1.2/spec.html#id2760193',
//     tags: [ 'sequence', 'mapping', 'spec' ],
//     cases: [ [Object] ]
//   },
// ...
// ]
```
