/**
 * An enum which represents the types of messages such as error, info, or warning messages. 
 * Currently, we only support error messages being surfaced.
 */
export enum RunSummaryLevel {
    ERROR = 'Error'
}

export interface RunSummaryMessage {
    statusCode: string,
    level: RunSummaryLevel,
    message?: string,
    templateVariables?: TemplateVariable[]
}

export interface TemplateVariable {
    name: string,
    value: string
}

export interface MessageCode {
    messageCode: string,
    templateVariables?: TemplateVariable[]
}