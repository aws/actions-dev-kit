/**
 * An enum which represents the types of messages such as error, info, or warning messages. 
 * Currently, we only support error messages being surfaced.
 */
export enum RunSummaryLevel {
    ERROR = 'Error'
}

/**
 * The text attribute is used as a status code and message attribute can be used to pass custom messages.
 * In future text will be replaced by statusCode.
 */
export interface RunSummaryMessage {
    text: string,
    level: RunSummaryLevel,
    message?: string,
    templateVariables?: TemplateVariable[]
}

/**
 * The template variable
 */
export interface TemplateVariable {
    name: string,
    value: string
}

/**
 * RunSummary message
 */
export interface Message {
    statusCode: string,
    level: RunSummaryLevel,
    text?: string | Error
    templateVariables?: TemplateVariable[]
}