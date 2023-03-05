import fs from 'fs';
import { applyTemplate } from '../../util/template';
import { Injectable, Logger, Scope } from '@nestjs/common';
import { BootstrapGenerator, BootstrapGeneratorResult, BootstrapError, GeneratorProps } from '../model';
import { Model } from '@codecatalyst/adk-model-parser';
import { writeContentToFileSync } from '@codecatalyst/adk-utils/lib';


export const LICENSE_GENERATOR = 'license_generator';
export const ACTION_CONFIG_FILE = '.actionconfig';
export const LICENSE_GENERATOR_DESTINATION_FILES = ['LICENSE'];

@Injectable({ scope: Scope.DEFAULT })
export class LicenseGenerator implements BootstrapGenerator {

    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult {
        try {
            Logger.log('Generating MIT LICENSE');
            const year = new Date().getFullYear();
            let copyRightHolder = '';

            const templateContents = fs.readFileSync(`${props.templateBasePath}/templates/action/${props.language}/LICENSE.md`, 'utf-8');
            if (fs.existsSync(ACTION_CONFIG_FILE)) {
                const actionConfig = fs.readFileSync(ACTION_CONFIG_FILE, 'utf-8');
                if (actionConfig) {
                    actionConfig.split(/\r?\n/).forEach(function (line) {
                        const space = line.split('codecatalyst_space: ')[1];
                        if (space) {
                            copyRightHolder = space;
                        }
                    });
                }
            }

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
