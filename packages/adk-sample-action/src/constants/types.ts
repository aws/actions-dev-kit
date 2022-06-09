export type LambdaInvokeInput = {
    lambdaFunction: string
    awsRegion: string
    requestPayload: string
    requestPayloadFile: string
    continueOnError: boolean
    logType: string
    responseFilters: string
}

export enum LogTypes {
    NONE = 'None',
    TAIL = 'Tail'
}

export type LambdaInvokeParams = {
    FunctionName: string
    LogType: string
    Payload?: string
}

export type LambdaInvokeResponse = {
    statusCode?: number
    functionError?: string
    logResult?: string
    payload?: string
    executedVersion?: string
}
