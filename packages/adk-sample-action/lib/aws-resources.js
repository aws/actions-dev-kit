"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLambdaClient = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
function getCredentialProviderChain() {
    const ecsCredentials = new aws_sdk_1.default.ECSCredentials({
        httpOptions: {
            timeout: 5000,
        },
        maxRetries: 3,
    });
    const credentialProviderChain = new aws_sdk_1.default.CredentialProviderChain();
    credentialProviderChain.providers.push(ecsCredentials);
    return credentialProviderChain;
}
function getLambdaClient(awsRegion) {
    return new aws_sdk_1.default.Lambda({
        credentialProvider: getCredentialProviderChain(),
        region: awsRegion,
    });
}
exports.getLambdaClient = getLambdaClient;
