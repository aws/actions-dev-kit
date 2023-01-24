import { Input, Model } from '../types/types';
import { escape } from '@codecatalyst/adk-utils/lib';
import { isString } from '@codecatalyst/adk-utils/lib/util/util';

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

    if (model.Author) {
        model['Author'] = escape(model.Author);
    }
    if (model.Description) {
        model['Description'] = escape(model.Description);
    }
    if (model.Id) {
        model['Id'] = escape(model.Id);
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

    if (model.Runs) {
        if (model.Runs.Main) {
            model.Runs['Main'] = escape(model.Runs.Main);
        }
        if (model.Runs.Using) {
            model.Runs['Using'] = escape(model.Runs.Using);
        }
    }

    return model;
}

function escapeConfigurationInput(input: Input): Input {
    if (input.Description) {
        input['Description'] = escape(input.Description);
    }
    if (input.Type && isString(input.Type)) {
        input['Type'] = escape(input.Type);
    }
    if (input.DisplayName) {
        input['DisplayName'] = escape(input.DisplayName);
    }
    if (input.Default && isString(input.Default)) {
        input['Default'] = escape(input.Default);
    }

    return input;
}

