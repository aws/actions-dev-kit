/**
 * An enum which represents the types of messages such as error, info, or warning messages. 
 * Currently, we only support error messages being surfaced.
 */
export enum RunSummaryLevel {
    ERROR = 'Error'
}

// the text attribute is used as a status code and message attribute can be used to pass custom messages.
// in future text will be replaced by statusCode.
export interface RunSummaryMessage {
    text: string,
    level: RunSummaryLevel,
    message?: string,
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