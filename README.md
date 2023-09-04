# Ts-Jest-Etude

Use ts-jest with jest to test typescript code.

> when use ts-jest with jest, the test file must be end with `*.test.ts` instead of `*.test.js`.

## Getting Started

### Installation

```bash
npm install --save-dev jest typescript ts-jest @types/jest
```

### Create config file

```bash
npx ts-jest config:init
```

`jest.config.js` file reference:

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // 自动清除 mock
  clearMocks: true,

  // 覆盖率报告
  collectCoverage: true,

  // 覆盖率报告目录
  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  // 预处理器
  preset: 'ts-jest',

  // 测试环境
  testEnvironment: 'node',
};
```

### Add script in `package.json`

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Sample Test

1. create `sum.ts` and `sum.test.ts` file.

```ts
// sum.ts
export function sum (number1: number, number2: number): number {
  return number1 + number2;
}
```

```ts
// sum.test.ts
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

2. run test

```bash
npm run test
```
