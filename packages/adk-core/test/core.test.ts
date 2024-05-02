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

    it('test command with pipe', () => {
        const output = adkCore.command('echo "Hello" | grep "lo"');
        expect(output.code === 0).toBeTruthy();
    });

    it('test command with and', () => {
        const output = adkCore.command('echo "Hello" && echo "World"');
        expect(output.code === 0).toBeTruthy();
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
        const validInput40Chars = 'Stack_ID-1234567891011121314512345678911';

        const validInput = 'Stack_ID';
        const emptyInput = '';
        const invalidInput = 'Stack ID';
        const maxInput = 'max_input_255_chars_1234567891011121314151617184876123578457689295628925764582347652874956284956824123456789101112131415161718487612357845768929562892576458234765287495628495682412345678910111213141516171848761235784576892956289257645823476528749562849591';
        const tooLongInput = 'longer_than_255_chars_123456789101112131415161718487612357845768929562892576458234765287495628495682412345678910111213141516171848761235784576892956289257645823476528749562849568241234567891011121314151617184876123578457689295628925764582347652874956284959';
        const validInputSpecialChar = '-StackA_a-@_ID';
        const invalidInputWithInvalidSpecialChar = 'Stack$#:ID';

        expect(adkCore.setOutput(validInput40Chars, outputParamValue).code === undefined).toBeTruthy();
        expect(adkCore.setOutput(validInput, outputParamValue).code === undefined).toBeTruthy();
        expect(adkCore.setOutput(validInputSpecialChar, outputParamValue).code === undefined).toBeTruthy();
        expect(adkCore.setOutput(maxInput, outputParamValue).code === undefined).toBeTruthy();

        expect(adkCore.setOutput(emptyInput, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(emptyInput, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(invalidInput, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(invalidInput, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(tooLongInput, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(tooLongInput, outputParamValue).stdout === errorMessage).toBeTruthy();

        expect(adkCore.setOutput(invalidInputWithInvalidSpecialChar, outputParamValue).code === 1).toBeTruthy();
        expect(adkCore.setOutput(invalidInputWithInvalidSpecialChar, outputParamValue).stdout === errorMessage).toBeTruthy();
    });

});
