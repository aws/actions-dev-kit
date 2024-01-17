'use strict';

import * as parser from '../src';

describe('@codecatalyst/adk-model-parser parse file', () => {
  it('parse model file contents', async () => {
    parser.parseAndSanitizeYamlFile(`${__dirname}/action.yml`);
  });
});
