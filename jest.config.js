process.env.TZ = 'Asia/Ho_Chi_Minh';
module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/$1',
    },
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
    testRegex: '(/src/_tests/.*|(\\.|/)(test|spec))\\.(js|ts)$',
    moduleFileExtensions: ['vue', 'js', 'ts'],
    // transformIgnorePatterns: [
    //   "<rootDir>/node_modules/(?!primevue/.*)"
    // ],

    // collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.vue', '<rootDir>/src/**/*.ts'],
    coveragePathIgnorePatterns: [
        'node_modules',
        '<rootDir>/src/pages',
        '<rootDir>/src/plugins',
        '<rootDir>/src/utils',
        '<rootDir>/src/server',
        '<rootDir>/src/middleware',
        '<rootDir>/src/test-utils',
        '.mock.ts',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
    coverageThreshold: {
        global: {
            statements: 88,
            branches: 73,
            functions: 88,
            lines: 88,
        },
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.spec.json',
            babelConfig: true,
        },
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
}