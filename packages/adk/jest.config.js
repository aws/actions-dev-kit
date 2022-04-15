const baseConfig = require('../../configs/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 53,
            branches: 58,
            functions: 51,
            lines: 58
        },
    },
};
