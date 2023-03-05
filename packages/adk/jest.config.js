const baseConfig = require('../../config/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 70,
            functions: 70,
            lines: 80
        },
    },
};
