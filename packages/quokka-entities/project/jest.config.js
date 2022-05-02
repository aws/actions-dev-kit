const baseConfig = require('../../../config/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 50,
            branches: 40,
            functions: 54,
            lines: 58
        },
    },
};
