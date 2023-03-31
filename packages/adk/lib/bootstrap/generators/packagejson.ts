import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@aws/codecatalyst-adk-model-parser';
import { writeContentToFileSync } from '@aws/codecatalyst-adk-utils/lib';

export const PACKAGE_JSON_GENERATOR = 'package_json_generator';
export const PACKAGE_JSON_GENERATOR_DESTINATION_FILES = ['package.json'];

@Injectable({ scope: Scope.DEFAULT })
export class PackageJsonGenerator implements BootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating package.json');
            const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/package.json`, 'utf-8');
            let templateKeys: { [key: string]: string } = {
                action_name: `${model.Name}`,
                action_description: `${model.Description}`,
                action_main_file: `${model.Runs?.Main}`,
                adk_version: 'latest',
            };
            const finalContents = applyTemplate(templateContents, templateKeys);
            writeContentToFileSync('package.json', finalContents, props.overrideFiles);
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            console.log(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
