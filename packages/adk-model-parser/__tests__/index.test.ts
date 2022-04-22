'use strict';

import * as parser from '../lib';
import { Model } from '../lib/types/types';

describe('@quokka/adk-model-parser parse file', () => {
    it('parse model file contents', async () => {
       parser.parseModelFile("README.md");
    });
});

describe('@quokka/adk-model-parser generate file', () => {
    it('parse model file contents', async () => {
       const model: Model = {
         schemaVersion: '1.0'
       };
       parser.generateModelFile(model, "modelfile");
    });
});
