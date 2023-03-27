import { Input, Model } from '../types/types';
import { escape, isString } from '@aws/codecatalyst-adk-utils/lib';

/**
 *
 * Sanitizes {@link Model | `Action model`} model by HTML escaping special characters
 *
 * @param model The model object
 *
 * @returns {@link Model | `Action model`} The sanitized model
 */
export function sanitizeModel(model: Model): Model {
    model['SchemaVersion'] = escape(model.SchemaVersion);

    if (model.Description) {
        model['Description'] = escape(model.Description);
    }
    if (model.Name) {
        model['Name'] = escape(model.Name);
    }
    if (model.Version) {
        model['Version'] = escape(model.Version);
    }

    if (model.Configuration !== undefined) {
        const sanitizedInputsMap: { [key: string]: Input } = {};
        Object.entries(model.Configuration!).map(([key, value]) => {
            const sanitizedKey = escape(key);
            const sanitizedInput = escapeConfigurationInput(value);
            sanitizedInputsMap[sanitizedKey] = sanitizedInput;
        });
        model['Configuration'] = sanitizedInputsMap;
    }

    model.Runs!['Main'] = escape(model.Runs!.Main);
    model.Runs!['Using'] = escape(model.Runs!.Using);

    return model;
}

function escapeConfigurationInput(input: Input): Input {
    input['Description'] = escape(input.Description);

    if (input['DisplayName']) {
        input['DisplayName'] = escape(input.DisplayName);
    }
    if (input['Default'] && isString(input.Default)) {
        input['Default'] = escape(input.Default as string);
    }
    if (input['Type'] && isString(input.Type)) {
        input['Type'] = escape(input.Type as string);
    }

    return input;
}

