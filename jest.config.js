module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/helpers/test-setup/test-setup.js'],

    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Automatically clear mock calls and instances between every test
    // clearMocks: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        '**/src/**',
        '!**/src/assets/**',
        '!**/index.js',
        '!**/node_modules/**',
        '!**/helpers/**',
    ],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/file-mock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
