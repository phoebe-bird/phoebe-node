import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@stainless-api/github-internal$': '<rootDir>/src/index.ts',
    '^@stainless-api/github-internal/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@stainless-api/github-internal/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
