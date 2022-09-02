const baseConfig = require('../../config/typedoc');
module.exports = {
    ...baseConfig,
    entryPoints: ["lib/toolkit/sdk/core/core.ts"],
};
