import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { PACKAGE_JSON_GENERATOR, PackageJsonGenerator } from './packagejson';
import { RUNTIME_CODE_GENERATOR, RuntimeCodeGenerator } from './runtime';
import { Model } from '@codecatalyst/adk-model-parser';

export const CODE_GENERATOR = 'code_generator';

@Injectable({ scope: Scope.DEFAULT })
export class BootstrapCodeGenerator implements BootstrapGenerator {

    constructor(
        @Inject(PACKAGE_JSON_GENERATOR) private packageJsonGen: PackageJsonGenerator,
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
