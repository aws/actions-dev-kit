// @ts-ignore
import { setOutput } from '@aws/codecatalyst-adk-core';
import { CUSTOM_STATUS_CODE } from './constants';
import { RunSummaryLevel, RunSummaryMessage, Message } from './types/types';

const ACTION_RUN_SUMMARY: string = 'ACTION_RUN_SUMMARY';
const MAX_RUN_SUMMARY_TEXT_LENGTH: number = 200;

/**
 * Use the RunSummaries construct to set custom summary messages during the execution of actions that will be surfaced on the workflows UI.
 */
export class RunSummaries {
  static runSummaries: RunSummaryMessage[] = [];

  public static addRunSummary(text: string | Error, summaryLevel: RunSummaryLevel): void {
    const runSummaryMessage: RunSummaryMessage = {
      text: CUSTOM_STATUS_CODE,
      message: JSON.stringify(this.truncate(text.toString(), MAX_RUN_SUMMARY_TEXT_LENGTH)),
      level: summaryLevel,
    };
    this.runSummaries.push(runSummaryMessage);
    setOutput(ACTION_RUN_SUMMARY, JSON.stringify(this.runSummaries));
  }

  public static addRunSummaryMessage(message: Message): void {
    const runSummaryMessage: RunSummaryMessage = {
      text: message.statusCode,
      level: message.level,
      message: message.text !== undefined ? JSON.stringify(this.truncate(message.text.toString(), MAX_RUN_SUMMARY_TEXT_LENGTH)) : message.text,
      templateVariables: message.templateVariables,
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
