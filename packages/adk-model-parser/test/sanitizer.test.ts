'use strict';

import { sanitizeFile } from '../lib/sanitizer/sanitizer';
import fs from 'fs';

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    writeFileSync: jest.fn(),
    mkdirSync: jest.fn(),
    copyFileSync: jest.fn(),
}));

describe('Action.yaml Sanitizer Test', () => {
    const fileName = `${__dirname}/action.yml`;
    it('ensure line with \"- run\" is not sanitized', async () => {
        let sanitizedFile = sanitizeFile(fs.readFileSync(fileName, 'utf8'));
        expect(sanitizedFile.includes('- run: ls; pwd;')).toBeTruthy();
    });
});