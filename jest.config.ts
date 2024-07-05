import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { sourceMaps: 'inline' }],
  },
  moduleNameMapper: {
    '^phoebe-bird$': '<rootDir>/src/index.ts',
    '^phoebe-bird/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^phoebe-bird/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
  testPathIgnorePatterns: ['scripts'],
};

export default config;
