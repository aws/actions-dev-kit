"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructSampleLambdaInvokeInput = void 0;
function constructSampleLambdaInvokeInput(lambdaFunction, awsRegion, requestPayload, requestPayloadFile, continueOnError, logType, responseFilters) {
    const lambdaInvokeInput = {
        lambdaFunction,
        awsRegion,
        requestPayload,
        requestPayloadFile,
        continueOnError,
        logType,
        responseFilters,
    };
    return lambdaInvokeInput;
}
exports.constructSampleLambdaInvokeInput = constructSampleLambdaInvokeInput;
