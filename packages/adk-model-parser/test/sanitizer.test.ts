'use strict';

import { Model, parseAndSanitizeYamlFile } from '../lib';

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    writeFileSync: jest.fn(),
    mkdirSync: jest.fn(),
    copyFileSync: jest.fn(),
}));

describe('Action.yaml Sanitizer Test', () => {

    it('should escape all strings in action.yml', async () => {
        const file = `${__dirname}/invalid_input_code_injection.yml`;
        let model: Model = parseAndSanitizeYamlFile(file);

        expect(model).toBeDefined();
        expect(model.SchemaVersion === '1.0%25\\n\\r%3A%2C').toBeTruthy();
        expect(model.Name === 'Action Action%25\\n\\r%3A%2C').toBeTruthy();
        expect(model.Id === 'Org/Action-action%25\\n\\r%3A%2C').toBeTruthy();
        expect(model.Version === '1.0.0%25\\n\\r%3A%2C').toBeTruthy();
        expect(model.Description === 'This Action tries to inject malicious code%25\\n\\r%3A%2C').toBeTruthy();
        expect(model.Author === 'Org/Proj%25\\n\\r%3A%2C').toBeTruthy();

        const sanitizedResponseFiltersInputKey = 'ResponseFilters%25\\n\\r%3A%2C';
        expect(model.Configuration).toBeDefined();
        expect(model.Configuration![sanitizedResponseFiltersInputKey]).toBeDefined();

        const sanitizedResponseFiltersInputValue = model.Configuration![sanitizedResponseFiltersInputKey];
        expect(sanitizedResponseFiltersInputValue).toBeDefined();

        expect(sanitizedResponseFiltersInputValue!.Description
            === "%0Aconsole.log('INJECTED_CODE')%25%0A%0D%3A%2C").toBeTruthy();

        expect(sanitizedResponseFiltersInputValue!.DisplayName
            === 'Response Filters with injection\\nnew line\\rnew windows line%25\\n\\r%3A%2C').toBeTruthy();

        expect(sanitizedResponseFiltersInputValue!.Type
            === 'string%3A%3A%25\\n\\r%3A%2C').toBeTruthy();

        expect(sanitizedResponseFiltersInputValue!.Default
            === '%25\\n\\r%3A%2C').toBeTruthy();
    });

});