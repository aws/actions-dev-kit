import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError } from '../model';
import { Model } from '@quokka/adk-model-parser';
import { GeneratorProps } from '../model';

export const PACKAGE_JSON_GENERATOR = 'package_json_generator';

@Injectable({ scope: Scope.DEFAULT })
export class PackageJsonGenerator implements BoootstrapGenerator {

  generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
      try {
          Logger.log('Generating package.json');
          Logger.log(`${Object.keys(model)}`);
          Logger.log(`${Object.values(model)}`);
          const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/package.json`, 'utf-8');
          let templateKeys: { [key: string]: string } = {
              action_name: `${model.Name}`,
              action_description: `${model.Description}`,
              action_main_file: `${model.Runs?.Main}`,
              adk_version: 'latest'
          };
          const finalContents = applyTemplate(templateContents, templateKeys);
          // Logger.log(`Contents: ${finalContents}`);
          fs.writeFileSync("package.json", finalContents, 'utf8');
          return new BootstrapGeneratorResult();
      } catch (e) {
          Logger.error(e);
          throw new BootstrapError(`${e}`);
      }
  }
}
