'use strict';

import { Model, parseAndSanitizeYamlFile } from '../lib';

const ESCAPED_INPUT = '%25_%26_$_%5Cr_%5Cn_%3B_:_%2C_%7C_%3E_%3C_%60_%5C_%21';
const ESCAPED_INPUT_WITH_YAML_JS_ESCAPING = '%25_%26_$_%0D_%0A_%3B_:_%2C_%7C_%3E_%3C_%60_ %21';

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    writeFileSync: jest.fn(),
    mkdirSync: jest.fn(),
    copyFileSync: jest.fn(),
}));

describe('Action.yaml Sanitizer Test', () => {

    it('should escape all strings in action.yml', async () => {
        const file = `${__dirname}/invalid_input_code_injection.yml`;
        const model: Model = parseAndSanitizeYamlFile(file);

        expect(model).toBeDefined();
        expect(model.SchemaVersion === `1.0_${ESCAPED_INPUT}`).toBeTruthy();
        expect(model.Name === `Action_${ESCAPED_INPUT}`).toBeTruthy();
        expect(model.Version === `1.0.0_${ESCAPED_INPUT}`).toBeTruthy();
        expect(model.Description === `This Action tries to inject malicious code_${ESCAPED_INPUT}`).toBeTruthy();

        const sanitizedResponseFiltersInputKey = `ResponseFilters_${ESCAPED_INPUT}`;
        expect(model.Configuration).toBeDefined();
        expect(model.Configuration![sanitizedResponseFiltersInputKey]).toBeDefined();

        const sanitizedResponseFiltersInputValue = model.Configuration![sanitizedResponseFiltersInputKey];
        expect(sanitizedResponseFiltersInputValue).toBeDefined();

        expect(sanitizedResponseFiltersInputValue!.Description
            === `%0Aconsole.log('INJECTED_CODE')_${ESCAPED_INPUT_WITH_YAML_JS_ESCAPING}`).toBeTruthy();

        expect(sanitizedResponseFiltersInputValue!.DisplayName
            === `Response Filters with injection_${ESCAPED_INPUT}`).toBeTruthy();

        expect(sanitizedResponseFiltersInputValue!.Type
            === `string_${ESCAPED_INPUT}`).toBeTruthy();

        expect(sanitizedResponseFiltersInputValue!.Default
            === `${ESCAPED_INPUT}`).toBeTruthy();
    });

    it('sanitization should not fail for undefined fields', async () => {
        const file = `${__dirname}/minimal_input_action.yml`;
        const model: Model = parseAndSanitizeYamlFile(file);

        expect(model).toBeDefined();
        expect(model.SchemaVersion === '1.0').toBeTruthy();
        expect(model.Name === undefined).toBeTruthy();
        expect(model.Version === undefined).toBeTruthy();
        expect(model.Description === undefined).toBeTruthy();

        const responseFiltersConfiguration = 'ResponseFilters';
        expect(model.Configuration).toBeDefined();

        expect(model.Configuration![responseFiltersConfiguration].Description).toBeDefined();
        expect(model.Configuration![responseFiltersConfiguration].Description === 'Description').toBeTruthy();

        expect(model.Configuration![responseFiltersConfiguration].Required).toBeDefined();
        expect(model.Configuration![responseFiltersConfiguration].Required).toBeFalsy();

        expect(model.Configuration![responseFiltersConfiguration].Default).toBeUndefined();
        expect(model.Configuration![responseFiltersConfiguration].Type).toBeUndefined();
        expect(model.Configuration![responseFiltersConfiguration].DisplayName).toBeUndefined();
    });

});