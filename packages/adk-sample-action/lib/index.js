"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const action_1 = require("./action");
const adkcore_util_1 = require("./utils/adkcore-util");
function main() {
    try {
        const endpoint = (0, adkcore_util_1.getActionInput)('ENDPOINT');
        const cookie = (0, adkcore_util_1.getActionInput)('COOKIE');
        const token = (0, adkcore_util_1.getActionInput)('CSRF_TOKEN');
        const title = (0, adkcore_util_1.getActionInput)('TITLE');
        const description = (0, adkcore_util_1.getActionInput)('DESCRIPTION');
        (0, action_1.runAction)(endpoint, { cookie: cookie, csrfToken: token }, title, description)
            .then(function (data) {
            console.log(data);
            (0, adkcore_util_1.info)(JSON.stringify(data));
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.main = main;
if (require.main === module) {
    main();
}
