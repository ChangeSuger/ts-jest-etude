# Jest 实践指南

基于 [ts-jest](https://github.com/kulshekhar/ts-jest) 的 TypeScript 测试实践指南

> 参考：[《Jest 实践指南》](https://changesuger.github.io/jest-tutorial/)

🏷 使用 ts-jest 时，测试文件应以 **.test.ts** 结尾而不是 **.test.js**

> 目前只写了些基础的部分，剩下的比较复杂的等实际有使用后再来完善吧

## 起步

### 安装依赖

```bash
npm install --save-dev jest typescript ts-jest @types/jest
```

### 创建配置文件

```bash
npx ts-jest config:init
```

**jest.config.js** 文件参考：

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

### 在 package.json 中添加脚本

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

🏷 也可以使用 `npm pkg set scripts.test="jest"` 来完成该步骤（**推荐**）

### 第一个测试用例

1. 创建文件 **sum.ts** 与 **sum.test.ts**

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

2. 进行测试

```bash
npm run test
```

## Jest 基础

一个基本的测试单例由三部分构成：

```
expect(<result>) + [<modifier>] + <matcher>
```

示例：

```ts
test("example", () => {
  expect(1 + 2).toBe(3);

  expect(1 + 2).not.toBe(4);
});
```
### 修饰符（modifier）

#### `.not`

测试结果取反

```ts
test(".not", () => {
  expect(1).not.toBe(2);
});
```

#### `.resolves`

解包已兑现的期约（fulfilled promise）的值，使得匹配器能直接使用该值

```ts
test(".resolves", async() => {
  await expect(Promise.resolve(1)).resolves.toBe(1);
  await expect(Promise.resolve(1)).resolves.not.toBe(2);
});
```

#### `.rejects`

解包被拒绝的期约（rejected promise）被拒绝的理由，使得匹配器能直接使用该值

```ts
test(".rejects", async() => {
  await expect(Promise.reject(new Error("This is a error")))
    .rejects.toThrow("This is a error");
});
```

### 匹配器（matcher）

#### 相等判断

`.toBe(value)` / `.toEqual(value)` 用于判断测试结果是否与预期值一致

- `.toBe(value)` 使用 `Object.is` 进行比较，适用于基本类型
- `.toEqual(value)` 会递归检查对象或数组的每个字段，适用于复杂类型

```ts
// .toBe
test(".toBe", () => {
  expect(1).toBe(1);
  expect("Hello World").toBe("Hello World");
});

// .toEqual
test(".toEqual", () => {
  expect({ foo: "bar" }).toEqual({ foo: "bar" });
  expect([1, 2, 3, 4]).toEqual([1, 2, 3, 4]);
});
```

#### 真值

与真值判断相关的匹配器主要有以下几个：

- `.toBeNull()`：只匹配 `null`
- `.toBeUndefined()`：只匹配 `undefined`
- `.toBeDefined()`：与 `.toBeUndefined()` 相反
- `.toBeTruthy()`：匹配任何 `Boolean()` 判断为真的值
- `.toBeFalsy()`：匹配任何 `Boolean()` 判断为假的值

```ts
test(".toBeNull", () => {
  expect(null).toBeNull();
});

test(".toBeUndefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test(".toBeDefined", () => {
  let a = 1;
  expect(a).toBeDefined();
});

test(".toBeTruthy", () => {
  expect(true).toBeTruthy();
});

test(".toBeFalsy", () => {
  expect("").toBeFalsy();
  expect(0).toBeFalsy();
  expect(undefined).toBeFalsy();
});
```

#### 数值比较

以下几个匹配器用于数值比较：

- `.toBeGreaterThan(number)`：大于期望值
- `.toBeGreaterThanOrEqual(number)`：大于等于期望值
- `.toBeLessThan(number)`：小于期望值
- `.toBeLessThanOrEqual(number)`：小于等于期望值
- `.toBeCloseTo(number)`：比较浮点数相等

```ts
test(".toBeGreaterThan", () => {
  expect(10).toBeGreaterThan(9);
});

test(".toBeGreaterThanOrEqual", () => {
  expect(10).toBeGreaterThanOrEqual(10);
});

test(".toBeLessThan", () => {
  expect(10).toBeLessThan(11);
});

test(".toBeLessThanOrEqual", () => {
  expect(10).toBeLessThanOrEqual(10);
});

test(".toBeCloseTo", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
```

#### 字符串

`.toMatch(regexp | string)` 用于匹配字符串，根据入参类型的不同，有两种匹配方式：

- 正则表达式：正则表达式匹配断言值的结果不为空时通过
- 字符串：匹配值为断言值的子字符串时通过

```ts
test("toMatch", () => {
  // use regexp
  expect("Hello World").toMatch(/Hello/);

  // use string
  expect("Hello World").toMatch("Hello");
})
```

#### 数组 & 可迭代对象

使用 `.toContain(string | number)` 匹配器可以检查一个数组或可迭代对象是否包含某个特定项：

```ts
test("toContain", () => {
  // Array
  expect([1, 2, 3, 4]).toContain(4);

  // String
  expect("Hello World").toContain("Hello");

  // Set
  expect(new Set([1, 2, 3, 4, 3, 2, 4])).toContain(4);
})
```

> 对 Map 好像不太适用

#### 错误

若想测试某函数在特定的情况下是否会抛出错误，可以使用 `.toThrow(error?)` 匹配器

```ts
test("", () => {
  expect(() => {
    throw new Error("error");
  }).toThrow();
});
```

- 未提供参数时，只要测试代码抛出错误就算测试通过
- 提供参数时，只有测试代码抛出特定的错误才算测试通过，参数可以为以下四种类型：
    - 正则表达式：正则表达式匹配抛出错误的 message 属性的结果不为空时通过
    - 字符串：字符串为抛出错误的 message 属性的子字符串时通过
    - 对象：抛出错误的 message 属性与对象的 message 属性相等（equal to）时通过
    - 类：抛出错误进行 `instanceof` 判断返回 `true` 时通过

```ts
test("toThrow", () => {
  // not argument
  expect(() => {
    throw new Error("This is a error");
  }).toThrow();

  // use regex
  expect(() => {
    throw new Error("This is a error");
  }).toThrow(/error/);

  // use string
  expect(() => {
    throw new Error("This is a error");
  }).toThrow("error");

  // use object
  expect(() => {
    throw new Error("This is a error");
  }).toThrow(new Error("This is a error"));

  // use class
  expect(() => {
    throw new Error("This is a error");
  }).toThrow(Error);
});
```

## 测试环境

指定测试环境能使测试代码在引用运行环境的 API 时运作正常

通过在配置文件 **jest.config.js** 中指定 `testEnvironment` 的值即可，通常只会用到以下两种测试环境：

- `"node"`：NodeJS 环境
- `"jsdom"`：浏览器环境

> 使用 jsdom 需要安装 `jest-environment-jsdom`

Jest 也支持在单个文件中使用文档块（docblock）来指定该文件的测试环境：

```ts
/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
```
