import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import yaml from 'js-yaml';
import fs from 'fs';
import { Model } from '@quokka/adk-model-parser';
import { TEMPLATE_GENERATOR, TemplateGenerator } from './generators/template';
import { GeneratorProps } from './model';

@Injectable({ scope: Scope.DEFAULT })
export class ActionBootstrapGenerators {

  constructor(@Inject(TEMPLATE_GENERATOR) private templateGenerator: TemplateGenerator) {

  }

  bootstrap(actionModel: Model, props: GeneratorProps) {
    const templateGenResult = this.templateGenerator.generate(actionModel, props);

    if (!templateGenResult.pass()) {
        Logger.error(`Unable to generate bootstrap code: ${templateGenResult.errors()}`);
        return false;
    } else {
        return true;
    }
  }
}
