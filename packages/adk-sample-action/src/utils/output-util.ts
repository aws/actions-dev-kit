import { isParameterEmpty } from './util';
import { INVALID_JQ_EXPRESSION, INVALID_JSON_OBJECT_TO_FILE, LAMBDA_RESPONSE_FILE, LAMBDA_RESPONSE_FILE_SAVED } from '../constants/constants';
import { info, runCommand, setActionOutput } from './adkcore-util';
import { ValidationError } from '../errors/validation-error';
import { LambdaInvokeResponse } from '../constants/types';
import fs from 'fs';

export function setActionOutputs(lambdaResponsePayload: string | undefined, responseFilters: string): void {
    if (lambdaResponsePayload === undefined) {
        return;
    }
    if (isParameterEmpty(responseFilters)) {
        setAllOutputsFromPayload(lambdaResponsePayload);
    } else {
        setOutputsFromResponseFilters(lambdaResponsePayload, responseFilters);
    }
}

export function saveLambdaResponseInFile(lambdaResponse: LambdaInvokeResponse): void {
    const shellCommand = `rm -rf ${LAMBDA_RESPONSE_FILE} && echo '' > ${LAMBDA_RESPONSE_FILE}`;
    runCommand(shellCommand);
    fs.writeFile(LAMBDA_RESPONSE_FILE, JSON.stringify(lambdaResponse), 'utf8', function (error) {
        if (error) {
            throw new Error(INVALID_JSON_OBJECT_TO_FILE);
        }
        info(LAMBDA_RESPONSE_FILE_SAVED);
    });
}

function setAllOutputsFromPayload(lambdaResponsePayload: string) {
    const lambdaResponsePayloadJson = JSON.parse(lambdaResponsePayload);
    const outputVariables = Object.keys(lambdaResponsePayloadJson);
    outputVariables.forEach(outputVariable => {
        setActionOutput(outputVariable, JSON.stringify(lambdaResponsePayloadJson[outputVariable]));
    });
}

function setOutputsFromResponseFilters(lambdaResponsePayload: string, responseFilters: string): void {
    const responseFiltersJson = JSON.parse(responseFilters);
    const outputVariables = Object.keys(responseFiltersJson);
    outputVariables.forEach(outputVariable => {
        setActionOutput(outputVariable, filterResponsePayload(outputVariable, responseFiltersJson[outputVariable], lambdaResponsePayload));
    });
}

function filterResponsePayload(outputVariable: string, jqExpression: string, responsePayload: string): any {
    const cmd = `echo '${responsePayload}' | jq ${jqExpression}`;
    const commandOutput = runCommand(cmd);
    if (commandOutput.code !== 0 || commandOutput.stdout == 'null\n') {
        throw new ValidationError(`${INVALID_JQ_EXPRESSION} for output variable ${outputVariable}`);
    }
    return commandOutput.stdout;
}
