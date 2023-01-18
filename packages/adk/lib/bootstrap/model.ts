import { SchemaType } from '../validation/model';
import { Model } from '@codecatalyst/adk-model-parser';

export interface GeneratorProps {
    readonly file?: string;
    readonly schemaType?: SchemaType;
    readonly templateBasePath?: string;
    readonly language?: string;
}

export interface BoootstrapGenerator {
    generate(model: Model, props: GeneratorProps): BootstrapGeneratorResult
}

export class BootstrapGeneratorResult {
    static empty() {
        return new BootstrapGeneratorResult();
    };

    private readonly _errors: string[];

    constructor(errors?: string[]) {
        this._errors = errors ?? [];
    }

    pass = () => {
        const errors = this._errors;
        return errors === undefined || errors.length == 0;
    };
    errors = () => {
        return this._errors;
    };

    add(...errors: string[]) {
        this._errors.push(...errors);
    }
}

export class BootstrapError extends Error {
    constructor(message: string) {
        super(message);
        // Set the prototype explicitly
        Object.setPrototypeOf(this, BootstrapError.prototype);
    }
}

export class SerialGenerator implements BoootstrapGenerator {
    private generators: BoootstrapGenerator[];

    constructor(...generators: BoootstrapGenerator[]) {
        this.generators = generators;

    }

    generate(model: Model, props: GeneratorProps) {
        return this.generators.map(gen => gen.generate(model, props)).filter(i => !i.pass()).reduce((acc, i) => {
            acc.add(...i.errors());
            return acc;
        }, BootstrapGeneratorResult.empty());
    }
}
