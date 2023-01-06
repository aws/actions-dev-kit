import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@quokka/adk-model-parser';

export const RUNTIME_CODE_GENERATOR = 'runtime_code_generator';

@Injectable({ scope: Scope.DEFAULT })
export class RuntimeCodeGenerator implements BoootstrapGenerator {

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

            fs.mkdirSync('lib');
            fs.mkdirSync('test');
            fs.writeFileSync('lib/index.ts', codeContents, 'utf8');
            fs.writeFileSync('test/index.test.ts', testContents, 'utf8');
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
