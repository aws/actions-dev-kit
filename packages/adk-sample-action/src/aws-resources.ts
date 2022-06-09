import AWS from 'aws-sdk';

function getCredentialProviderChain() {
    const ecsCredentials: AWS.ECSCredentials = new AWS.ECSCredentials({
        httpOptions: {
            timeout: 5000,
        },
        maxRetries: 3,
    });
    const credentialProviderChain: AWS.CredentialProviderChain = new AWS.CredentialProviderChain();
    credentialProviderChain.providers.push(ecsCredentials);
    return credentialProviderChain;
}

export function getLambdaClient(awsRegion: string): AWS.Lambda {
    return new AWS.Lambda({
        credentialProvider: getCredentialProviderChain(),
        region: awsRegion,
    });
}
