module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.d.ts", "!src/index.js"],

  clearMocks: true,

  testEnvironment: "jsdom",

  testEnvironmentOptions: {
    url: "http://localhost",
  },

  testMatch: ["<rootDir>/src/**/__tests__/**/*.{spec,test}.{js,jsx}"],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],

  moduleFileExtensions: ["web.js", "js", "json", "web.jsx", "jsx", "node"],
};
