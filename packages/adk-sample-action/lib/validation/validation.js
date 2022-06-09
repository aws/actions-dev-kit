"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateActionInputs = void 0;
const constants_1 = require("../constants/constants");
const validation_error_1 = require("../errors/validation-error");
const util_1 = require("../utils/util");
const adkcore_util_1 = require("../utils/adkcore-util");
const aws_resources_1 = require("../aws-resources");
function validateActionInputs(actionInput) {
    validateRequestPayloadAndFile(actionInput.requestPayload, actionInput.requestPayloadFile);
    validateAwsRegion(actionInput.awsRegion);
    validateLambdaFunction(actionInput.lambdaFunction, actionInput.awsRegion);
}
exports.validateActionInputs = validateActionInputs;
function validateAwsRegion(awsRegion) {
    if ((0, util_1.isParameterEmpty)(awsRegion)) {
        throw new validation_error_1.ValidationError(constants_1.EMPTY_AWS_REGION);
    }
}
function validateLambdaFunction(lambdaFunction, awsRegion) {
    if ((0, util_1.isParameterEmpty)(lambdaFunction)) {
        throw new validation_error_1.ValidationError(constants_1.EMPTY_LAMBDA_FUNCTION);
    }
    doesLambdaFunctionExist(lambdaFunction, awsRegion);
}
function doesLambdaFunctionExist(lambdaFunction, awsRegion) {
    const lambdaClient = (0, aws_resources_1.getLambdaClient)(awsRegion);
    const params = {
        FunctionName: lambdaFunction,
    };
    const lambdaPromise = lambdaClient.getFunction(params).promise();
    lambdaPromise
        .then(function (data) {
        (0, adkcore_util_1.info)(JSON.stringify(data));
    })
        .catch(function (error) {
        (0, adkcore_util_1.setFailed)(new validation_error_1.ValidationError(constants_1.LAMBDA_FUNCTION_ERROR));
    });
}
function validateRequestPayloadAndFile(requestPayload, requestPayloadFile) {
    if (!(0, util_1.isParameterEmpty)(requestPayload) && !(0, util_1.isParameterEmpty)(requestPayloadFile)) {
        throw new validation_error_1.ValidationError(constants_1.REQUEST_PAYLOAD_CONFIGURATION_ERROR);
    }
}
