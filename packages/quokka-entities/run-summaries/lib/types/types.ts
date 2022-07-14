export enum RunSummaryLevel {
    ERROR = "Error"
}

export interface RunSummary {
    text: string,
    level: RunSummaryLevel,
}