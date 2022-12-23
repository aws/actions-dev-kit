// @ts-ignore
import * as core from '@quokka/adk-core';
import {
    RunSummaryLevel,
    RunSummaries,
    MessageCode, RunSummaryMessage,
} from '../lib';

jest.mock('@quokka/adk-core/lib/toolkit/sdk/core/command-wrapper');
const ACTION_RUN_SUMMARY: string = 'ACTION_RUN_SUMMARY';
const MAX_RUN_SUMMARY_TEXT_LENGTH: number = 200;

describe('runSummaries', () => {
    beforeEach(() => {
        RunSummaries.clearRunSummaries();
        (core.setOutput as any) = jest.fn();
    });

    it('clearRunSummaries sets the expected output variable to an empty runSummaries array', () => {
        const expectedMessageCode: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const expectedRunSummaries: RunSummaryMessage[] = [];
        RunSummaries.setRunSummary(expectedMessageCode, RunSummaryLevel.ERROR);

        RunSummaries.clearRunSummaries();

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary sets the expected output variable to an array with 1 run summary with only status code', () => {
        const expectedMessageCode: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode.messageCode,
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary sets the expected output variable to an array with 1 run summary with error type message', () => {
        const expectedMessageCode: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const expectedRunSummaryMessage: Error = new Error('Single runSummary');
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedRunSummaryMessage.toString()),
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode, RunSummaryLevel.ERROR, expectedRunSummaryMessage);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary sets the expected output variable to an array with multiple run summaries with string type messages', () => {
        const expectedMessageCode1: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const expectedMessageCode2: MessageCode = {
            messageCode: 'INVALID_STACK',
        };
        const expectedRunSummaryMessage1: string = 'runSummary 1';
        const expectedRunSummaryMessage2: string = 'runSummary 2';

        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode1.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedRunSummaryMessage1),
            },
            {
                statusCode: expectedMessageCode2.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedRunSummaryMessage2),
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode1, RunSummaryLevel.ERROR, expectedRunSummaryMessage1);
        RunSummaries.setRunSummary(expectedMessageCode2, RunSummaryLevel.ERROR, expectedRunSummaryMessage2);
        
        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary sets the expected output variable to an array with multiple run summaries with error type messages', () => {
        const expectedMessageCode1: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const expectedMessageCode2: MessageCode = {
            messageCode: 'INVALID_STACK',
        };

        const expectedRunSummaryMessage1: Error = new Error('runSummary 1');
        const expectedRunSummaryMessage2: Error = new Error('runSummary 2');

        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode1.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedRunSummaryMessage1.toString()),
            },
            {
                statusCode: expectedMessageCode2.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedRunSummaryMessage2.toString()),
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode1, RunSummaryLevel.ERROR, expectedRunSummaryMessage1);
        RunSummaries.setRunSummary(expectedMessageCode2, RunSummaryLevel.ERROR, expectedRunSummaryMessage2);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary with a long message sets the expected output variable with a truncated string type text attribute', () => {
        const expectedMessageCode: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const longText: string = 'a'.repeat(MAX_RUN_SUMMARY_TEXT_LENGTH + 1);
        const expectedTruncatedText: string = longText.substring(0, MAX_RUN_SUMMARY_TEXT_LENGTH) + '...';
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedTruncatedText),
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode, RunSummaryLevel.ERROR, longText);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary with a long message sets the expected output variable with a truncated error type text attribute', () => {
        const expectedMessageCode: MessageCode = {
            messageCode: 'INVALID_BUCKET',
        };
        const longText: Error = new Error('a'.repeat(MAX_RUN_SUMMARY_TEXT_LENGTH + 1));
        const expectedTruncatedText: string = longText.toString().substring(0, MAX_RUN_SUMMARY_TEXT_LENGTH) + '...';

        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode.messageCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedTruncatedText),
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode, RunSummaryLevel.ERROR, longText);
        
        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('setRunSummary sets the expected output variable to an array with 1 run summary with status code and template variables', () => {
        const expectedMessageCode: MessageCode = {
            messageCode: 'INVALID_BUCKET',
            templateVariables: [
                {
                    name: 'BUCKET_NAME',
                    value: 'InvalidBucket',
                },
            ],
        };
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                statusCode: expectedMessageCode.messageCode,
                level: RunSummaryLevel.ERROR,
                templateVariables: expectedMessageCode.templateVariables,
            },
        ];

        RunSummaries.setRunSummary(expectedMessageCode, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });
});