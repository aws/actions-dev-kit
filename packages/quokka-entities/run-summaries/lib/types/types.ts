/**
 * An enum which represents the types of messages such as error, info, or warning messages. 
 * Currently, we only support error messages being surfaced.
 */
export enum RunSummaryLevel {
    ERROR = 'Error',
    WARN = 'Warn',
    INFO = 'Info',
    DEBUG = 'Debug'
}

/**
 * An interface which represents a summary message which includes the text attribute, 
 * (the actual message to be surfaced) and the level attribute, (the type of message being surfaced).
 */
export interface RunSummary {
    text: string,
    level: RunSummaryLevel,
    templateVariables?: TemplateVariable[]
}

export interface TemplateVariable {
    name: string,
    value: string
}