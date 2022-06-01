import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError } from '../model';
import { Model } from '@quokka/adk-model-parser';
import { BootstrapCodeGenerator, CODE_GENERATOR } from './code';
import { FileCopyGenerator, FILE_COPY_GENERATOR } from './fscopy';
import { README_GENERATOR, ReadmeGenerator } from './readme';
import { GeneratorProps } from '../model';

export const TEMPLATE_GENERATOR = 'template_generator';

@Injectable({ scope: Scope.DEFAULT })
export class TemplateGenerator implements BoootstrapGenerator {

  constructor(@Inject(CODE_GENERATOR) private codeGenerator: BootstrapCodeGenerator,
              @Inject(FILE_COPY_GENERATOR) private fileCopyGenerator: FileCopyGenerator,
              @Inject(README_GENERATOR) private readmeGenerator: ReadmeGenerator) {

  }

  generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
      try {
          console.log('Reached here---------------------');
          this.codeGenerator.generate(model, props);
          this.fileCopyGenerator.generate(model, props);
          this.readmeGenerator.generate(model, props);
          return new BootstrapGeneratorResult();
      } catch (e) {
          Logger.error(e);
          throw new BootstrapError(`${e}`);
      }
  }
}
