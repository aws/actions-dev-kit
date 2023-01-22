import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@codecatalyst/adk-model-parser';

export const WORKFLOW_GENERATOR = 'workflow_generator';

@Injectable({ scope: Scope.DEFAULT })
export class WorkflowGenerator implements BoootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating Validation Workflow..');

            let templateFile: string;
            Logger.log(`Environment: ${model.Environment?.Required}`);
            if (model.Environment?.Required) {
                templateFile = 'ActionName-CI-Validation-Env.yaml';
            } else {
                templateFile = 'ActionName-CI-Validation.yaml';
            }
            let templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/codecatalyst/workflows/${templateFile}`, 'utf-8');
            let action_input = '';
            let first = true;
            let action_name = model.Name?.split(' ', 1);
            Object.entries(model.Configuration!).map(([configKey]) => {
                if (!first) {
                    action_input = action_input.concat(' '.repeat(12));
                }
                action_input = action_input.concat(`${configKey} : 'TEST'\n`);
                first = false;
            });
            let templateKeys: { [key: string]: string } = {
                action_name: `${action_name}`,
                action_inputs: `${action_input}`,
            };
            const finalContents = applyTemplate(templateContents, templateKeys);
            fs.mkdirSync('.codecatalyst/workflows', { recursive: true });
            fs.writeFileSync(`.codecatalyst/workflows/${action_name}-CI-Validation.yaml`, finalContents, 'utf8');
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
