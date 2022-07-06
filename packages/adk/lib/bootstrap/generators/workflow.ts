import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError } from '../model';
import { Model } from '@quokka/adk-model-parser';
import { GeneratorProps } from '../model';

export const WORKFLOW_GENERATOR = 'workflow_generator';

@Injectable({ scope: Scope.DEFAULT })
export class WorkflowGenerator implements BoootstrapGenerator {

  generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
      try {
          Logger.log('Generating Validation Workflow..');

          let templateFile = "";
          Logger.log(`Envirtonment: ${model.Environment?.Required}`);
          if (model.Environment?.Required) {
            templateFile = "ActionName-CI-Validation-Env.yaml";
          } else {
            templateFile = "ActionName-CI-Validation.yaml";
          }
          let templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/aws/workflows/${templateFile}`, 'utf-8')
          let action_input = '';
          let first = true;
          let action_name = model.Name?.split(" ", 1);
          Object.entries(model.Configuration!).map(([configKey, configValue]) => {
              if(!first) {
                action_input = action_input.concat(" ".repeat(12));
              }
              action_input = action_input.concat(`${configKey} : TEST\n`);
              first = false;
          });
          let templateKeys: { [key: string]: string } = {
              action_name: `${action_name}`,
              action_inputs: `${action_input}`,
          };
          const finalContents = applyTemplate(templateContents, templateKeys);
          fs.mkdirSync('.aws/workflows', { recursive: true });
          fs.writeFileSync(`.aws/workflows/${action_name}-CI-Validation.yaml`, finalContents, 'utf8');
          return new BootstrapGeneratorResult();
      } catch (e) {
          Logger.error(e);
          throw new BootstrapError(`${e}`);
      }
  }
}
