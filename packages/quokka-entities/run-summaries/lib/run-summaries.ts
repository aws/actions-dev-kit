// @ts-ignore
import { setOutput } from '@quokka/adk-core';
import { RunSummaryLevel, RunSummary, TemplateVariable } from './types/types';

const ACTION_RUN_SUMMARY: string = 'ACTION_RUN_SUMMARY';
const MAX_RUN_SUMMARY_TEXT_LENGTH: number = 200;

export class RunSummaries {
    static runSummaries: RunSummary[] = [];

    /*
    This api as of now is suboptimal. The 'text' parameter for now accepts both status code and error message to avoid
    any breaking changes. We will be changing the api behaviour later.
    */
    public static addRunSummary(text: string | Error, type: RunSummaryLevel, templateVariables?: TemplateVariable[]): void {
        const runSummary: RunSummary = {
            text: JSON.stringify(this.truncate(text.toString(), MAX_RUN_SUMMARY_TEXT_LENGTH)),
            level: type,
            templateVariables: templateVariables,
        };
        this.runSummaries.push(runSummary);
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