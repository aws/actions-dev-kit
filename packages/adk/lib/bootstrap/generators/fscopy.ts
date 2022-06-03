import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError } from '../model';
import { Model } from '@quokka/adk-model-parser';
import { GeneratorProps } from '../model';

export const FILE_COPY_GENERATOR = 'file_copy_generator';

@Injectable({ scope: Scope.DEFAULT })
export class FileCopyGenerator implements BoootstrapGenerator {

  generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
      try {
          Logger.log('Copying files from template..');
          const files = ['tsconfig.json', '.gitignore', '.eslintrc.js', '.prettierrc.json', 'jest.config.js'];
          files.forEach ( (fl) => {
            // fs.copyFileSync(`${__dirname}/../../../templates/action/typescript/${fl}`, `${fl}`, fs.constants.COPYFILE_EXCL);
            fs.copyFileSync(`${props.templateBasePath}/templates/action/typescript/${fl}`, `${fl}`, fs.constants.COPYFILE_EXCL);
          });
          return new BootstrapGeneratorResult();
      } catch (e) {
          Logger.error(e);
          throw new BootstrapError(`${e}`);
      }
  }
}