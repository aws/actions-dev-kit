import { EMPTY_AWS_REGION, EMPTY_LAMBDA_FUNCTION, LAMBDA_FUNCTION_ERROR, REQUEST_PAYLOAD_CONFIGURATION_ERROR } from '../constants/constants';
import { ValidationError } from '../errors/validation-error';
import { isParameterEmpty } from '../utils/util';
import { info, setFailed } from '../utils/adkcore-util';
import { Lambda } from 'aws-sdk';
import { getLambdaClient } from '../aws-resources';
import { LambdaInvokeInput } from '../constants/types';

export function validateActionInputs(actionInput: LambdaInvokeInput): void {
    validateRequestPayloadAndFile(actionInput.requestPayload, actionInput.requestPayloadFile);
    validateAwsRegion(actionInput.awsRegion);
    validateLambdaFunction(actionInput.lambdaFunction, actionInput.awsRegion);
}

function validateAwsRegion(awsRegion: string): void {
    if (isParameterEmpty(awsRegion)) {
        throw new ValidationError(EMPTY_AWS_REGION);
    }
}

function validateLambdaFunction(lambdaFunction: string, awsRegion: string): void {
    if (isParameterEmpty(lambdaFunction)) {
        throw new ValidationError(EMPTY_LAMBDA_FUNCTION);
    }
    doesLambdaFunctionExist(lambdaFunction, awsRegion);
}

function doesLambdaFunctionExist(lambdaFunction: string, awsRegion: string): void {
    const lambdaClient: Lambda = getLambdaClient(awsRegion);
    const params = {
        FunctionName: lambdaFunction,
    };
    const lambdaPromise = lambdaClient.getFunction(params).promise();
    lambdaPromise
        .then(function (data) {
            info(JSON.stringify(data));
        })
        .catch(function (error) {
            setFailed(new ValidationError(LAMBDA_FUNCTION_ERROR));
        });
}

function validateRequestPayloadAndFile(requestPayload: string, requestPayloadFile: string): void {
    if (!isParameterEmpty(requestPayload) && !isParameterEmpty(requestPayloadFile)) {
        throw new ValidationError(REQUEST_PAYLOAD_CONFIGURATION_ERROR);
    }
}
