'use strict';

import * as adkCore from '../lib/toolkit/sdk/core/core.js';

describe('@quokka/adk-core', () => {
  it('run basic test', () => {
    expect(adkCore.getIt())
      .toMatch('my-input-working');
  });
});
