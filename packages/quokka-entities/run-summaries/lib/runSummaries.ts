import { setOutputParam } from '@quokka/adk-core/lib/toolkit/sdk/core/command-wrapper';
import { RunSummaryLevel, RunSummary } from './types/types';

const ACTION_RUN_SUMMARY: string = 'ACTION_RUN_SUMMARY';
const MAX_RUN_SUMMARY_TEXT_LENGTH: number = 200;

export class RunSummaries {
    static runSummaries: RunSummary[] = [];

    public static addRunSummary(text: string | Error, type: RunSummaryLevel): void {
        const runSummary: RunSummary = {
            text: JSON.stringify(this.truncate(text.toString(), MAX_RUN_SUMMARY_TEXT_LENGTH)),
            level: type,
        };
        this.runSummaries.push(runSummary);
        setOutputParam(ACTION_RUN_SUMMARY, JSON.stringify(this.runSummaries));
    }
    
    public static clearRunSummaries() {
        this.runSummaries = [];
        setOutputParam(ACTION_RUN_SUMMARY, JSON.stringify(this.runSummaries));
    }

    private static truncate(s: string, length: number): string {
        if (s.length < length) {
            return s;
        }
        return `${s.substring(0, length)}...`;
    }
}