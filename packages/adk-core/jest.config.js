const baseConfig = require('../../configs/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 54,
            branches: 66,
            functions: 14,
            lines: 54
        },
    },
};
