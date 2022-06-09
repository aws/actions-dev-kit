import { ValidationError } from '../errors/validation-error';
import { INCORRECT_BOOLEAN_FLAG_VALUE, INCORRECT_LOG_TYPE_VALUE, INVALID_JSON_FORMAT, INVALID_FILE_PATH } from '../constants/constants';
import { runCommand } from './adkcore-util';
import { LogTypes } from '../constants/types';

export function constructBooleanFromString(booleanString: string): boolean {
    if (booleanString.toLowerCase() === 'true') {
        return true;
    } else if (booleanString.toLowerCase() === 'false') {
        return false;
    }
    throw new ValidationError(INCORRECT_BOOLEAN_FLAG_VALUE);
}

export function constructLogType(logType: string): string {
    if (logType.toUpperCase() === 'NONE') {
        return LogTypes.NONE;
    } else if (logType.toUpperCase() === 'TAIL') {
        return LogTypes.TAIL;
    }
    throw new ValidationError(INCORRECT_LOG_TYPE_VALUE);
}

export function validateJson(jsonPayload: string): void {
    try {
        JSON.parse(jsonPayload);
    } catch (error) {
        throw new ValidationError(INVALID_JSON_FORMAT);
    }
}

export function isParameterEmpty(inputParameter: string): boolean {
    return inputParameter === '';
}

export function getJsonFromFile(filePath: string): string {
    const jqCommand = `jq . ${filePath}`;
    const response = runCommand(jqCommand);
    if (response.code !== 0) {
        throw new ValidationError(INVALID_FILE_PATH);
    }
    return response.stdout;
}

export function decodeBase64String(base64Str: string | undefined): string {
    if (base64Str === undefined) {
        return '';
    }
    return Buffer.from(base64Str, 'base64').toString('binary');
}
