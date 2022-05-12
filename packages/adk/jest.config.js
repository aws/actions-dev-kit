const baseConfig = require('../../config/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 74,
            branches: 74,
            functions: 70,
            lines: 79
        },
    },
};
