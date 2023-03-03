import fs from 'fs';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BoootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@codecatalyst/adk-model-parser';

export const FILE_COPY_GENERATOR = 'file_copy_generator';

@Injectable({ scope: Scope.DEFAULT })
export class FileCopyGenerator implements BoootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Copying files from template..');
            const files = ['tsconfig.json', '.prettierrc.json'];
            files.forEach((fl) => {
                this.copyOrSkipExistingFile(`${props.templateBasePath}/templates/action/typescript/${fl}`, fl);
            });

            this.copyOrSkipExistingFile(`${props.templateBasePath}/templates/action/typescript/gitignore`, '.gitignore');
            this.copyOrSkipExistingFile(`${props.templateBasePath}/templates/action/typescript/eslintrc`, '.eslintrc.js');
            this.copyOrSkipExistingFile(`${props.templateBasePath}/templates/action/typescript/jest.conf`, 'jest.config.js');

            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }

    copyOrSkipExistingFile(source: string, dest: string) {
        if (!fs.existsSync(dest)) {
            fs.copyFileSync(source, dest, fs.constants.COPYFILE_EXCL);
        }
    }
}
