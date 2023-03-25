import fs from 'fs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@aws/codecatalyst-adk-model-parser';
import { copyToFileSync } from '@aws/codecatalyst-adk-utils/lib';

export const FILE_COPY_GENERATOR = 'file_copy_generator';
export const FILE_GENERATOR_DESTINATION_FILES = ['tsconfig.json', '.prettierrc.json', '.gitignore', '.eslintrc.js', 'jest.config.js'];

@Injectable({ scope: Scope.DEFAULT })
export class FileCopyGenerator implements BootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Copying files from template..');
            const files = ['tsconfig.json', '.prettierrc.json'];
            files.forEach((fl) => {
                copyToFileSync(`${props.templateBasePath}/templates/action/typescript/${fl}`, fl, props.overrideFiles);
            });

            copyToFileSync(`${props.templateBasePath}/templates/action/typescript/gitignore`, '.gitignore', props.overrideFiles);
            copyToFileSync(`${props.templateBasePath}/templates/action/typescript/eslintrc`, '.eslintrc.js', props.overrideFiles);
            copyToFileSync(`${props.templateBasePath}/templates/action/typescript/jest.conf`, 'jest.config.js', props.overrideFiles);

            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }

}
