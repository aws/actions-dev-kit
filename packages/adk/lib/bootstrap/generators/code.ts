import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError } from '../model';
import { PACKAGE_JSON_GENERATOR, PackageJsonGenerator } from './packagejson';
import { RUNTIME_CODE_GENERATOR, RuntimeCodeGenerator } from './runtime';
import { Model } from '@quokka/adk-model-parser';
import { GeneratorProps } from '../model';

export const CODE_GENERATOR = 'code_generator';

@Injectable({ scope: Scope.DEFAULT })
export class BootstrapCodeGenerator implements BoootstrapGenerator {

  constructor(@Inject(PACKAGE_JSON_GENERATOR) private packageJsonGen: PackageJsonGenerator,
              @Inject(RUNTIME_CODE_GENERATOR) private runtimeCodeGen: RuntimeCodeGenerator) {

  }

  generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
      try {
          this.packageJsonGen.generate(model, props);
          this.runtimeCodeGen.generate(model, props);
          return new BootstrapGeneratorResult();
      } catch (e) {
          Logger.error(e);
          throw new BootstrapError(`${e}`);
      }
  }
}
