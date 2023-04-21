import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@aws/codecatalyst-adk-model-parser';
import { writeContentToFileSync } from '@aws/codecatalyst-adk-utils/lib';
import { readSpace } from '../../util/space';


export const LICENSE_GENERATOR = 'license_generator';

export const LICENSE_GENERATOR_DESTINATION_FILES = ['LICENSE'];

@Injectable({ scope: Scope.DEFAULT })
export class LicenseGenerator implements BootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating MIT LICENSE');
            const year = new Date().getFullYear();
            const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/LICENSE.md`, 'utf-8');
            const copyRightHolder = readSpace();

            let templateKeys: { [key: string]: string } = {
                YEAR: `${year}`,
                COPYRIGH_HOLDER: `${copyRightHolder}`,
            };
            const finalContents = applyTemplate(templateContents, templateKeys);
            writeContentToFileSync('LICENSE', finalContents, props.overrideFiles);
            return new BootstrapGeneratorResult();
        } catch (e) {
            Logger.error(e);
            throw new BootstrapError(`${e}`);
        }
    }
}
