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
    text?: string,
    templateVariables?: TemplateVariable[]
}

export interface TemplateVariable {
    name: string,
    value: string
}

export interface Message {
    statusCode: string,
    level: RunSummaryLevel,
    text?: string | Error
    templateVariables?: TemplateVariable[]
}