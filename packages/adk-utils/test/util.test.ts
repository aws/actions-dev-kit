'use strict';

import { escape } from '../lib';

describe('ADK-Util test', () => {
    it('should HTML escape all special characters', async () => {
        const input = '%&$\r\n;:,';
        expect(escape(input) === '%25%26%24%0D%0A%3B%3A%2C').toBeTruthy();
        expect(escape(undefined) === '').toBeTruthy();
    });
});