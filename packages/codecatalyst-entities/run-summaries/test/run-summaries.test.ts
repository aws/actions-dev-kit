// @ts-ignore
import * as core from '@aws/codecatalyst-adk-core';
import { Message, RunSummaries, RunSummaryLevel, RunSummaryMessage, TemplateVariable } from '../lib';
import { CUSTOM_STATUS_CODE } from '../lib/constants';

jest.mock('@aws/codecatalyst-adk-core/lib/toolkit/sdk/core/command-wrapper');
const ACTION_RUN_SUMMARY: string = 'ACTION_RUN_SUMMARY';
const MAX_RUN_SUMMARY_TEXT_LENGTH: number = 200;

describe('runSummaries', () => {
    beforeEach(() => {
        RunSummaries.clearRunSummaries();
        (core.setOutput as any) = jest.fn();
    });

    it('clearRunSummaries sets the expected output variable to an empty runSummaries array', () => {
        const runSummaryText: string = 'Populate runSummaries with one run summary';
        const expectedRunSummaries: RunSummaryMessage[] = [];
        RunSummaries.addRunSummary(runSummaryText, RunSummaryLevel.ERROR);

        RunSummaries.clearRunSummaries();

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummary sets the expected output variable to an array with 1 run summary with string type text', () => {
        const runSummaryText: string = 'Single runSummary';
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText),
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.addRunSummary(runSummaryText, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummary sets the expected output variable to an array with 1 run summary with error type text', () => {
        const runSummaryText: Error = new Error('Single runSummary');
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText.toString()),
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.addRunSummary(runSummaryText, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummary sets the expected output variable to an array with multiple run summaries with string type texts', () => {
        const runSummaryText1: string = 'runSummary 1';
        const runSummaryText2: string = 'runSummary 2';
        const runSummaryText3: string = 'runSummary 3';
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText1),
                level: RunSummaryLevel.ERROR,
            },
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText2),
                level: RunSummaryLevel.ERROR,
            },
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText3),
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.addRunSummary(runSummaryText1, RunSummaryLevel.ERROR);
        RunSummaries.addRunSummary(runSummaryText2, RunSummaryLevel.ERROR);
        RunSummaries.addRunSummary(runSummaryText3, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummary sets the expected output variable to an array with multiple run summaries with error type texts', () => {
        const runSummaryText1: Error = new Error('runSummary 1');
        const runSummaryText2: Error = new Error('runSummary 2');
        const runSummaryText3: Error = new Error('runSummary 3');
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText1.toString()),
                level: RunSummaryLevel.ERROR,
            },
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText2.toString()),
                level: RunSummaryLevel.ERROR,
            },
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(runSummaryText3.toString()),
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.addRunSummary(runSummaryText1, RunSummaryLevel.ERROR);
        RunSummaries.addRunSummary(runSummaryText2, RunSummaryLevel.ERROR);
        RunSummaries.addRunSummary(runSummaryText3, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummary with a long text sets the expected output variable with a truncated string type text attribute', () => {
        const longText: string = 'a'.repeat(MAX_RUN_SUMMARY_TEXT_LENGTH + 1);
        const expectedTruncatedText: string = longText.substring(0, MAX_RUN_SUMMARY_TEXT_LENGTH) + '...';
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(expectedTruncatedText),
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.addRunSummary(longText, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummary with a long text sets the expected output variable with a truncated error type text attribute', () => {
        const longText: Error = new Error('a'.repeat(MAX_RUN_SUMMARY_TEXT_LENGTH + 1));
        const expectedTruncatedText: string = longText.toString().substring(0, MAX_RUN_SUMMARY_TEXT_LENGTH) + '...';
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: CUSTOM_STATUS_CODE,
                message: JSON.stringify(expectedTruncatedText),
                level: RunSummaryLevel.ERROR,
            },
        ];

        RunSummaries.addRunSummary(longText, RunSummaryLevel.ERROR);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummaryMessage sets the expected output variable to an array with 1 run summary with status code and template variables', () => {
        const expectedStatusCode: string = 'INVALID_INPUT_CONFIGURATION';
        const expectedTemplateVariables: TemplateVariable[] = [
            {
                name: 'parameter1',
                value: 'value1',
            },
        ];
        const message: Message = {
            statusCode: expectedStatusCode,
            level: RunSummaryLevel.ERROR,
            templateVariables: expectedTemplateVariables,
        };
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: expectedStatusCode,
                level: RunSummaryLevel.ERROR,
                templateVariables: expectedTemplateVariables,
            },
        ];

        RunSummaries.addRunSummaryMessage(message);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummaryMessage sets the expected output variable to an array with 1 run summary with status code, and message', () => {
        const expectedStatusCode: string = 'INVALID_INPUT_CONFIGURATION';
        const expectedMessage: string = 'configuration is not valid';
        const message: Message = {
            statusCode: expectedStatusCode,
            level: RunSummaryLevel.ERROR,
            text: expectedMessage,
        };
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: expectedStatusCode,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedMessage),
            },
        ];

        RunSummaries.addRunSummaryMessage(message);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });

    it('addRunSummaryMessage sets the expected output variable to an array with multiple run summaries', () => {
        // first run summary
        const expectedStatusCode1: string = 'INVALID_INPUT_CONFIGURATION';
        const expectedTemplateVariables1: TemplateVariable[] = [
            {
                name: 'parameter1',
                value: 'value1',
            },
        ];
        
        // second run summary
        const expectedStatusCode2: string = 'INVALID_INPUT_CODE';
        const expectedMessage2: string = 'configuration is not valid';
        const message1: Message = {
            statusCode: expectedStatusCode1,
            level: RunSummaryLevel.ERROR,
            templateVariables: expectedTemplateVariables1,
        };
        
        const message2: Message = {
            statusCode: expectedStatusCode2,
            level: RunSummaryLevel.ERROR,
            text: expectedMessage2,
        };
        
        const expectedRunSummaries: RunSummaryMessage[] = [
            {
                text: expectedStatusCode1,
                level: RunSummaryLevel.ERROR,
                templateVariables: expectedTemplateVariables1,
            },
            {
                text: expectedStatusCode2,
                level: RunSummaryLevel.ERROR,
                message: JSON.stringify(expectedMessage2),
            },
        ];

        RunSummaries.addRunSummaryMessage(message1);
        RunSummaries.addRunSummaryMessage(message2);

        expect(core.setOutput).toHaveBeenCalledWith(ACTION_RUN_SUMMARY, JSON.stringify(expectedRunSummaries));
    });
});