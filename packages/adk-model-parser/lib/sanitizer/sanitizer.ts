import { Input, Model } from '../types/types';

export function sanitizeModel(model: Model): Model {
    model['SchemaVersion'] = escapeInput(model.SchemaVersion);

    if (model.Author) {
        model['Author'] = escapeInput(model.Author);
    }
    if (model.Description) {
        model['Description'] = escapeInput(model.Description);
    }
    if (model.Id) {
        model['Id'] = escapeInput(model.Id);
    }
    if (model.Name) {
        model['Name'] = escapeInput(model.Name);
    }
    if (model.Version) {
        model['Version'] = escapeInput(model.Version);
    }

    if (model.Configuration !== undefined) {

        const sanitizedInputsMap: { [key: string]: Input } = {};

        Object.entries(model.Configuration!).map(([key, value]) => {
            const sanitizedKey = escapeInput(key);
            const sanitizedInput = escapeConfigurationInput(value);
            sanitizedInputsMap[sanitizedKey] = sanitizedInput;
        });
        model['Configuration'] = sanitizedInputsMap;
    }

    if (model.Runs) {
        if (model.Runs.Main) {
            model.Runs['Main'] = escapeInput(model.Runs.Main);
        }
        if (model.Runs.Using) {
            model.Runs['Using'] = escapeInput(model.Runs.Using);
        }
    }

    return model;
}

function isString(input: any): boolean {
    return typeof input === 'string' || input instanceof String;
}

function escapeConfigurationInput(input: Input): Input {
    if (input.Description) {
        input['Description'] = escapeInput(input.Description);
    }
    if (input.Type && isString(input.Type)) {
        input['Type'] = escapeInput(input.Type);
    }
    if (input.DisplayName) {
        input['DisplayName'] = escapeInput(input.DisplayName);
    }
    if (input.Default && isString(input.Default)) {
        input['Default'] = escapeInput(input.Default);
    }

    return input;
}

// following github approach:
// https://github.com/actions/toolkit/blob/main/packages/core/src/command.ts#L80-L94
export function escapeInput(input?: string): string {
    return input === undefined
        ? ''
        : input
            .replace(/%/g, '%25')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A')
            .replace(/:/g, '%3A')
            .replace(/,/g, '%2C');
}
