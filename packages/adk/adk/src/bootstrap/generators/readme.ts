import fs from 'fs';
import { Model } from '@aws/codecatalyst-adk-model-parser';
import { writeContentToFileSync } from '@aws/codecatalyst-adk-utils/lib';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { readSpace } from '../../util/space';
import { applyTemplate } from '../../util/template';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';

export const README_GENERATOR = 'readme_generator';
export const README_GENERATOR_DESTINATION_FILES = ['README.md'];

@Injectable({ scope: Scope.DEFAULT })
export class ReadmeGenerator implements BootstrapGenerator {
  generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
    try {
      Logger.log('Generating README');

      const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/README.md`, 'utf-8');
      let action_name = model.Name?.split(' ', 1);
      let space_name = readSpace();
      if (!fs.existsSync('../')) {
        fs.mkdirSync('.codecatalyst/workflows', { recursive: true });
      }

      let action_use = '    Configuration:';
      Object.entries(model.Configuration!).map(([configKey, configValue]) => {
        action_use = action_use.concat(`\n      ${configKey} : 'test' # ${configValue.Description}`);
      });

      let templateKeys: { [key: string]: string } = {
        ACTION_USAGE: `${action_use}`,
        ACTION_NAME: `${action_name}`,
        ACTION_NAME_LOWERCASE: `${action_name}`.toLowerCase(),
        CODECATALYST_SPACE_LOWERCASE: `${space_name}`.toLowerCase(),
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
