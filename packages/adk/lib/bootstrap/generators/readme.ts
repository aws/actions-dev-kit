import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@aws/codecatalyst-adk-model-parser';
import { writeContentToFileSync } from '@aws/codecatalyst-adk-utils/lib';

export const README_GENERATOR = 'readme_generator';
export const README_GENERATOR_DESTINATION_FILES = ['README.md'];

@Injectable({ scope: Scope.DEFAULT })
export class ReadmeGenerator implements BootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating README');

            const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/README.md`, 'utf-8');
            let action_name = model.Name?.split(' ', 1);

            let templateKeys: { [key: string]: string } = {
                ACTION_NAME: `${action_name}`,
                ACTION_NAME_LOWERCASE: `${action_name}`.toLowerCase(),
            };
            const finalContents = applyTemplate(templateContents, templateKeys);
            writeContentToFileSync('README.md', finalContents, props.overrideFiles);
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
