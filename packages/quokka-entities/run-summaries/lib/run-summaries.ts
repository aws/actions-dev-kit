// @ts-ignore
import { setOutput } from '@quokka/adk-core';
import { RunSummaryLevel, RunSummaryMessage, MessageCode } from './types/types';

const ACTION_RUN_SUMMARY: string = 'ACTION_RUN_SUMMARY';
const MAX_RUN_SUMMARY_TEXT_LENGTH: number = 200;

export class RunSummaries {
    static runSummaries: RunSummaryMessage[] = [];

    public static setRunSummary(statusCode: MessageCode, summaryLevel: RunSummaryLevel, message?: string | Error): void {
        const runSummaryMessage: RunSummaryMessage = {
            statusCode: statusCode.messageCode,
            level: summaryLevel,
            message: message !== undefined ?
                JSON.stringify(this.truncate(message.toString(), MAX_RUN_SUMMARY_TEXT_LENGTH)) :
                message,
            templateVariables: statusCode.templateVariables,
        };
        this.runSummaries.push(runSummaryMessage);
        setOutput(ACTION_RUN_SUMMARY, JSON.stringify(this.runSummaries));
    }
    
    public static clearRunSummaries() {
        this.runSummaries = [];
        setOutput(ACTION_RUN_SUMMARY, JSON.stringify(this.runSummaries));
    }

    private static truncate(s: string, length: number): string {
        if (s.length < length) {
            return s;
        }
        return `${s.substring(0, length)}...`;
    }
}