'use strict';

import * as adkCore from '../lib/toolkit/sdk/core/core.js';

describe('@quokka/adk-core', () => {
  it('run basic test', () => {
    expect(adkCore.getIt())
      .toMatch('my-input-working');
  });

  it('should access environment variables', () => {
    let inputValue = 'varVal';
    process.env.var1 = inputValue;

    expect(adkCore.getEnvironmentVariable('var1')).toMatch(inputValue);
  });

  it('should return empty when environment variable in not present', () => {
    expect(adkCore.getEnvironmentVariable('NOT_DEFINED')).toMatch('');
  });

  it('should return inputs for actions', () => {
    let inputValue = 'inputVar1';
    let varName = 'var1';
    process.env.INPUT_VAR1 = inputValue;
    expect(adkCore.getInput(varName)).toMatch(inputValue);
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
  });
});
