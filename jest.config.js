/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/src/RestClient/endpoints'],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src/'],
};
