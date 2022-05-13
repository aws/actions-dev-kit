export interface ValidationProps {
    readonly file?: string;
    readonly schemaType?: SchemaType
}

export enum SchemaType {
    Caws = 'CAWS',
    GitHub = 'GitHub',
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const CAWS_MODEL_SCHEMA = require('../../templates/caws_model_schema.json');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const GITHUB_MODEL_SCHEMA = require('../../templates/github_model_schema.json');
export const ActionSchemas = new Map<string, any>([
    [SchemaType.Caws, CAWS_MODEL_SCHEMA],
    [SchemaType.GitHub, GITHUB_MODEL_SCHEMA],
]);

export class ValidationContext {
    constructor(public props: ValidationProps, public instance: any) {
    }
}

export class ValidationResult {
    static empty() {
        return new ValidationResult();
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

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        // Set the prototype explicitly
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

export interface Validator {
    validate(context: ValidationContext): ValidationResult
}

export class AndValidator implements Validator {
    private validators: Validator[];

    constructor(...validators: Validator[]) {
        this.validators = validators;

    }

    validate(context: ValidationContext) {
        return this.validators.map(v => v.validate(context)).filter(i => !i.pass()).reduce((acc, i) => {
            acc.add(...i.errors());
            return acc;
        }, ValidationResult.empty());
    }
}
