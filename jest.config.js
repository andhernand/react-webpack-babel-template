module.exports = {
  collectCoverage: true,

  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.d.ts', '!src/index.js'],

  clearMocks: true,

  testURL: 'http://localhost',

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}'
  ],

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },

  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],

  modulePaths: [],

  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },

  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node']
};
