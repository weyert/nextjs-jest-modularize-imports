const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  //
  setupFilesAfterEnv: ['<rootDir>/setupTests.tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)'].filter(Boolean),
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'coverage',
      },
    ],
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'text',
    [
      'lcov',
      {
        file: 'lcov',
      },
    ],
    [
      'cobertura',
      {
        file: 'test-cobertura-coverage.xml',
      },
    ],
  ],
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/layouts/$1',
  },
}

async function jestConfig() {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  return nextJestConfig
}

module.exports = jestConfig
