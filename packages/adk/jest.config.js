const baseConfig = require('../../config/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 63,
            branches: 51,
            functions: 46,
            lines: 46
        },
    },
};
