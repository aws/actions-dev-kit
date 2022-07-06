const baseConfig = require('../../config/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 75,
            functions: 70,
            lines: 80
        },
    },
};
