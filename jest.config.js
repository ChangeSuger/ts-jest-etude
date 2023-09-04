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
