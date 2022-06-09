"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const action_1 = require("./action");
const adkcore_util_1 = require("./utils/adkcore-util");
const validation_error_1 = require("./errors/validation-error");
function main() {
    try {
        const endpoint = (0, adkcore_util_1.getActionInput)('ENDPOINT');
        const cookie = (0, adkcore_util_1.getActionInput)('COOKIE');
        const token = (0, adkcore_util_1.getActionInput)('CSRF_TOKEN');
        const title = (0, adkcore_util_1.getActionInput)('TITLE');
        const description = (0, adkcore_util_1.getActionInput)('DESCRIPTION');
        (0, action_1.runAction)(endpoint, { cookie: cookie, csrfToken: token }, title, description)
            .then(function (data) {
            (0, adkcore_util_1.info)(JSON.stringify(data));
        })
            .catch(function (error) {
            (0, adkcore_util_1.setFailed)(new validation_error_1.ValidationError('error occurs when running the action'));
        });
    }
    catch (error) {
        (0, adkcore_util_1.setFailed)(error);
    }
}
exports.main = main;
if (require.main === module) {
    main();
}
