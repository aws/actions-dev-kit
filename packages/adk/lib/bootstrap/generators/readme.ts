import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@codecatalyst/adk-model-parser';

export const README_GENERATOR = 'readme_generator';

@Injectable({ scope: Scope.DEFAULT })
export class ReadmeGenerator implements BoootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating README');

            const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/README.md`, 'utf-8');
            let action_use = `
            MyAction:
              Configuration:`;

            Object.entries(model.Configuration!).map(([configKey, configValue]) => {
                // Logger.log(`${configKey} : 'test' # ${configValue.Description}\r\n`);
                action_use = action_use.concat(`
                    ${configKey} : 'test' # ${configValue.Description}`);
            });

            let templateKeys: { [key: string]: string } = {
                action_usage: `${action_use}`,
            };
            const finalContents = applyTemplate(templateContents, templateKeys);
            // Logger.log(`Contents: ${finalContents}`);
            fs.writeFileSync('README.md', finalContents, 'utf8');
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
