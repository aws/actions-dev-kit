import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@codecatalyst/adk-model-parser';
import { BootstrapCodeGenerator, CODE_GENERATOR } from './code';
import { FileCopyGenerator, FILE_COPY_GENERATOR } from './fscopy';
import { README_GENERATOR, ReadmeGenerator } from './readme';
import { WORKFLOW_GENERATOR, WorkflowGenerator } from './workflow';
import { LICENSE_GENERATOR, LicenseGenerator } from './license';

export const TEMPLATE_GENERATOR = 'template_generator';

@Injectable({ scope: Scope.DEFAULT })
export class TemplateGenerator implements BootstrapGenerator {

    constructor(@Inject(CODE_GENERATOR) private codeGenerator: BootstrapCodeGenerator,
        @Inject(FILE_COPY_GENERATOR) private fileCopyGenerator: FileCopyGenerator,
        @Inject(README_GENERATOR) private readmeGenerator: ReadmeGenerator,
        @Inject(LICENSE_GENERATOR) private licenseGenerator: LicenseGenerator,
        @Inject(WORKFLOW_GENERATOR) private workflowGenerator: WorkflowGenerator) {

    }

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            this.codeGenerator.generate(model, props);
            this.fileCopyGenerator.generate(model, props);
            this.readmeGenerator.generate(model, props);
            this.licenseGenerator.generate(model, props);
            this.workflowGenerator.generate(model, props);
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
