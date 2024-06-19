'use strict';

import * as adkCore from '../lib/toolkit/sdk/core/core.js';
import { outputVariableNamePattern } from '@aws/codecatalyst-adk-utils/lib';

describe('@aws/codecatalyst-adk-core', () => {

    it('should access environment variables', () => {
        let inputValue = 'varVal';
        process.env.var1 = inputValue;

        expect(adkCore.getEnvironmentVariable('var1')).toMatch(inputValue);
        expect(adkCore.Utils.getEnvironmentVariable('var1')).toMatch(inputValue);
    });

    it('should return empty when environment variable in not present', () => {
        expect(adkCore.getEnvironmentVariable('NOT_DEFINED')).toMatch('');
        expect(adkCore.Utils.getEnvironmentVariable('NOT_DEFINED')).toMatch('');
    });

    it('should return inputs for actions', () => {
        let inputValue = 'inputVar1';
        let varName = 'var1';
        process.env.INPUT_VAR1 = inputValue;
        expect(adkCore.getInput(varName)).toMatch(inputValue);
        expect(adkCore.Utils.getInput(varName)).toMatch(inputValue);
    });

    it('should accept multi-line inputs for actions', () => {
        let multiLineInputValue = `
      test1
      test2
      test2
    `;

        let varName = 'multi_line_var1';
        process.env.INPUT_MULTI_LINE_VAR1 = multiLineInputValue;
        expect(adkCore.getMultiLineInput(varName)).toMatch(multiLineInputValue);
        expect(adkCore.Utils.getMultiLineInput(varName)).toMatch(multiLineInputValue);
    });

    it('should not fail with undefined input', () => {
        let inputValue = undefined;
        let varName = 'var1';
        process.env.INPUT_VAR1 = inputValue;
        expect(adkCore.getInput(varName)).toMatch('');
        expect(adkCore.Utils.getInput(varName)).toMatch('');
    });

    it('test setOutputParam', () => {
        let outputParamName = 'outputParam';
        let outputParamValue = 'outputParamValue';
        const commandResult = adkCore.setOutput(outputParamName, outputParamValue);
        expect(commandResult).toMatch('::set-output name=outputParam::outputParamValue');
    });

    it('test setFailed', () => {
        adkCore.setFailed('error message');
        expect(process.exitCode === 1).toBeTruthy();
    });

    it('test command with stdin', () => {
        const output = adkCore.command('read test');
        expect(output.code === 1).toBeTruthy();
    });

    it('test command without stdin', () => {
        const output = adkCore.command('ls', true, false);
        expect(output.code === 0).toBeTruthy();
    });

    it('test command without stdin', () => {
        const output = adkCore.command('ls');
        expect(output.code === 0).toBeTruthy();
    });

    it('test setOutput validation', () => {
        const errorMessage = `Invalid output parameter name, it must match the following pattern ${outputVariableNamePattern}`;
        const outputParamValue = 'outputParamValue';
        const validInput30Chars = 'Stack_ID_12345678910111213145';

        const emptyInput = '';
        const invalidInput = 'Stack ID';
        const tooLongInput = 'longer_than_30_chars_123456789101112131415161718';
        const startsWithInvalidChar = '-Stack_ID';
        const endsWithInvalidChar = 'Stack_ID-';

        expect(adkCore.setOutput(validInput30Chars, outputParamValue).code === undefined).toBeTruthy();

        expect(adkCore.setOutput(emptyInput, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(emptyInput, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(invalidInput, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(invalidInput, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(tooLongInput, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(tooLongInput, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(startsWithInvalidChar, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(startsWithInvalidChar, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(endsWithInvalidChar, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(endsWithInvalidChar, outputParamValue).stdout === errorMessage).toBeTruthy();
    });

});
