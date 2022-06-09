"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase64String = exports.getJsonFromFile = exports.isParameterEmpty = exports.validateJson = exports.constructLogType = exports.constructBooleanFromString = void 0;
const validation_error_1 = require("../errors/validation-error");
const constants_1 = require("../constants/constants");
const adkcore_util_1 = require("./adkcore-util");
const types_1 = require("../constants/types");
function constructBooleanFromString(booleanString) {
    if (booleanString.toLowerCase() === 'true') {
        return true;
    }
    else if (booleanString.toLowerCase() === 'false') {
        return false;
    }
    throw new validation_error_1.ValidationError(constants_1.INCORRECT_BOOLEAN_FLAG_VALUE);
}
exports.constructBooleanFromString = constructBooleanFromString;
function constructLogType(logType) {
    if (logType.toUpperCase() === 'NONE') {
        return types_1.LogTypes.NONE;
    }
    else if (logType.toUpperCase() === 'TAIL') {
        return types_1.LogTypes.TAIL;
    }
    throw new validation_error_1.ValidationError(constants_1.INCORRECT_LOG_TYPE_VALUE);
}
exports.constructLogType = constructLogType;
function validateJson(jsonPayload) {
    try {
        JSON.parse(jsonPayload);
    }
    catch (error) {
        throw new validation_error_1.ValidationError(constants_1.INVALID_JSON_FORMAT);
    }
}
exports.validateJson = validateJson;
function isParameterEmpty(inputParameter) {
    return inputParameter === '';
}
exports.isParameterEmpty = isParameterEmpty;
function getJsonFromFile(filePath) {
    const jqCommand = `jq . ${filePath}`;
    const response = (0, adkcore_util_1.runCommand)(jqCommand);
    if (response.code !== 0) {
        throw new validation_error_1.ValidationError(constants_1.INVALID_FILE_PATH);
    }
    return response.stdout;
}
exports.getJsonFromFile = getJsonFromFile;
function decodeBase64String(base64Str) {
    if (base64Str === undefined) {
        return '';
    }
    return Buffer.from(base64Str, 'base64').toString('binary');
}
exports.decodeBase64String = decodeBase64String;
