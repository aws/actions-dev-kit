import { Controller, Logger } from '@nestjs/common';
import { ActionPreValidationRules } from './rule';
import { GeneratorProps } from './model';
import { parseAndSanitizeYamlFile } from '@aws/codecatalyst-adk-model-parser';
import { ActionBootstrapGenerators } from './generators';

@Controller()
export class BootstrapController {
    constructor(
        private preValidationRules: ActionPreValidationRules,
        private bootstrapGenerator: ActionBootstrapGenerators) {
    }

    bootstrapAction(props: GeneratorProps) {
        if (!this.preValidationRules.apply(props)) {
            Logger.error('Bootstrap pre-validation failed');
            return 1;
        }

        // validation complete, now apply generators
        Logger.log('Validation succeeded for bootstrap');
        console.log(`Properties file: ${props.file}`);
        if (this.bootstrapGenerator.bootstrap(parseAndSanitizeYamlFile(props.file), props)) {
            return 0;
        } else {
            Logger.error('Bootstrapping failed');
            return 1;
        }
    }
}
