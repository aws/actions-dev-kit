"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAction = void 0;
const issue_1 = require("@quokka/issue/lib/issue");
function runAction(endpoint, cred, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const fusiClient = new issue_1.QuokkaIssueProvider(endpoint, cred);
        const issue = new issue_1.Issue(fusiClient);
        console.log(`creating issue for endpoint: ${endpoint}, title: ${title}`);
        return issue.createIssueInBacklog({ name: 'TestOrganizationFranchen', id: 'test' }, {
            id: 'test',
            name: 'TestProject',
        }, title, description);
    });
}
exports.runAction = runAction;
