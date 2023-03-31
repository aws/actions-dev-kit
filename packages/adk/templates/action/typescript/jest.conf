module.exports = {
    verbose: true,
    clearMocks: true,
    moduleFileExtensions: [
        "js",
        "ts"
    ],
    testMatch: [
        "<rootDir>/test/**/?(*.)+(test).js",
    ],
    testEnvironment: "node",
    coverageThreshold: {
        global: {
            branches: 90,
            statements: 90,
            functions: 90,
            lines: 90
        },
    },
    collectCoverage: true,
    coverageReporters: [
        "clover",
        "lcov",
        "html",
        "text-summary"
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/lib/.*\\.generated\\.[jt]s",
        "<rootDir>/test/.*\\.[jt]s",
        "<rootDir>/.warnings.jsii.js",
    ],
	reporters: [
        "default",
          [ "jest-junit", { suiteName: "jest tests", outputDirectory: "coverage" } ]
    ]
};
