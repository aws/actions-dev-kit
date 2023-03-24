'use strict';

import * as adkCore from '../lib/toolkit/sdk/core/core.js';

describe('@codecatalyst/adk-core', () => {

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
        console.log(`StdERR ${output.stderr}`);
        console.log(`StdERR ${output.stdout}`);
        expect(output.code === 1).toBeTruthy();
    });

    it('test command without stdin', () => {
        const output = adkCore.command('ls');
        console.log(`StdERR ${output.stderr}`);
        console.log(`StdERR ${output.stdout}`);
        expect(output.code === 0).toBeTruthy();
    });

});
