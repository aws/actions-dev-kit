"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveLambdaResponseInFile = exports.setActionOutputs = void 0;
const util_1 = require("./util");
const constants_1 = require("../constants/constants");
const adkcore_util_1 = require("./adkcore-util");
const validation_error_1 = require("../errors/validation-error");
const fs_1 = __importDefault(require("fs"));
function setActionOutputs(lambdaResponsePayload, responseFilters) {
    if (lambdaResponsePayload === undefined) {
        return;
    }
    if ((0, util_1.isParameterEmpty)(responseFilters)) {
        setAllOutputsFromPayload(lambdaResponsePayload);
    }
    else {
        setOutputsFromResponseFilters(lambdaResponsePayload, responseFilters);
    }
}
exports.setActionOutputs = setActionOutputs;
function saveLambdaResponseInFile(lambdaResponse) {
    const shellCommand = `rm -rf ${constants_1.LAMBDA_RESPONSE_FILE} && echo '' > ${constants_1.LAMBDA_RESPONSE_FILE}`;
    (0, adkcore_util_1.runCommand)(shellCommand);
    fs_1.default.writeFile(constants_1.LAMBDA_RESPONSE_FILE, JSON.stringify(lambdaResponse), 'utf8', function (error) {
        if (error) {
            throw new Error(constants_1.INVALID_JSON_OBJECT_TO_FILE);
        }
        (0, adkcore_util_1.info)(constants_1.LAMBDA_RESPONSE_FILE_SAVED);
    });
}
exports.saveLambdaResponseInFile = saveLambdaResponseInFile;
function setAllOutputsFromPayload(lambdaResponsePayload) {
    const lambdaResponsePayloadJson = JSON.parse(lambdaResponsePayload);
    const outputVariables = Object.keys(lambdaResponsePayloadJson);
    outputVariables.forEach(outputVariable => {
        (0, adkcore_util_1.setActionOutput)(outputVariable, JSON.stringify(lambdaResponsePayloadJson[outputVariable]));
    });
}
function setOutputsFromResponseFilters(lambdaResponsePayload, responseFilters) {
    const responseFiltersJson = JSON.parse(responseFilters);
    const outputVariables = Object.keys(responseFiltersJson);
    outputVariables.forEach(outputVariable => {
        (0, adkcore_util_1.setActionOutput)(outputVariable, filterResponsePayload(outputVariable, responseFiltersJson[outputVariable], lambdaResponsePayload));
    });
}
function filterResponsePayload(outputVariable, jqExpression, responsePayload) {
    const cmd = `echo '${responsePayload}' | jq ${jqExpression}`;
    const commandOutput = (0, adkcore_util_1.runCommand)(cmd);
    if (commandOutput.code !== 0 || commandOutput.stdout == 'null\n') {
        throw new validation_error_1.ValidationError(`${constants_1.INVALID_JQ_EXPRESSION} for output variable ${outputVariable}`);
    }
    return commandOutput.stdout;
}
