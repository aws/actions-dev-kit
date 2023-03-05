import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@codecatalyst/adk-model-parser';
import { writeContentToFileSync } from '@codecatalyst/adk-utils/lib';

export const RUNTIME_CODE_GENERATOR = 'runtime_code_generator';
export const RUNTIME_CODE_DESTINATION_FILES = ['lib/index.ts', 'test/index.test.ts'];

@Injectable({ scope: Scope.DEFAULT })
export class RuntimeCodeGenerator implements BootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating code...');

            const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/lib/index.ts`, 'utf-8');
            const testTemplateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/test/index.test.ts`, 'utf-8');
            let action_input = '';
            Object.entries(model.Configuration!).map(([configKey, configValue]) => {
                action_input = action_input.concat(` const input_${configKey} = core.getInput('${configKey}'); // ${configValue.Description}\n`);
                action_input = action_input.concat(` console.log(input_${configKey});\n`);
            });

            let action_output = '';

            let templateKeys: { [key: string]: string } = {
                action_input_config: `${action_input}`,
                action_output_config: `${action_output}`,
                action_name: `${model.Name}`,
            };
            const codeContents = applyTemplate(templateContents, templateKeys);
            const testContents = applyTemplate(testTemplateContents, templateKeys);

            if (!fs.existsSync('lib')) {
                fs.mkdirSync('lib');
            }
            if (!fs.existsSync('test')) {
                fs.mkdirSync('test');
            }
            writeContentToFileSync('lib/index.ts', codeContents, props.overrideFiles);
            writeContentToFileSync('test/index.test.ts', testContents, props.overrideFiles);

            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
