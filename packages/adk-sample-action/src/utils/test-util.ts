import { LambdaInvokeInput } from '../constants/types';

export function constructSampleLambdaInvokeInput(
    lambdaFunction: string,
    awsRegion: string,
    requestPayload: string,
    requestPayloadFile: string,
    continueOnError: boolean,
    logType: string,
    responseFilters: string,
): LambdaInvokeInput {
    const lambdaInvokeInput: LambdaInvokeInput = {
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
