const baseConfig = require('../../configs/jest.config');
module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            branches: 80
        }
    }
};
