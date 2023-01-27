'use strict';

import { escape, sanitizeCommand } from '../lib';

describe('ADK-Util test', () => {
    it('should HTML escape all special characters', async () => {
        const input = '%&$\r\n;:,';
        expect(escape(input) === '%25%26$%0D%0A%3B:%2C').toBeTruthy();
        expect(escape(undefined) === '').toBeTruthy();
    });

    it('sanitize command should sanitize and build command and arguments properly', async () => {
        const cmdArg1 = '%&$\r\n;:,';
        const cmd = '%&$\r\n;:,';
        const args = [cmdArg1];

        expect(sanitizeCommand(cmd, args) === '%25%26$%0D%0A%3B:%2C %25%26$%0D%0A%3B:%2C').toBeTruthy();
    });

    it('sanitize command should build command and arguments properly', async () => {
        const cmd = 'printenv';
        const args = ['arg1', 'arg2', 'arg3', 'arg4'];

        expect(sanitizeCommand(cmd, args) === 'printenv arg1 arg2 arg3 arg4').toBeTruthy();
        expect(sanitizeCommand('printenv arg1', []) === 'printenv arg1').toBeTruthy();
    });

    it('sanitize command should handle undefined and empty command and arguments properly', async () => {
        const cmd = 'printenv';
        const args = ['cmd_arg_1'];

        expect(sanitizeCommand(cmd, undefined) === cmd).toBeTruthy();
        expect(sanitizeCommand(cmd, []) === cmd).toBeTruthy();
        expect(sanitizeCommand('', args) === '').toBeTruthy();
        // @ts-ignore
        expect(sanitizeCommand(undefined, args) === '').toBeTruthy();
        // @ts-ignore
        expect(sanitizeCommand('', {}) === '').toBeTruthy();
        // @ts-ignore
        expect(sanitizeCommand('', 'not_array') === '').toBeTruthy();
    });
});
