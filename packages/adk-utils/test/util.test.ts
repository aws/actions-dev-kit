'use strict';

const UNESCAPED_INPUT = '%_&_$_\r_\n_;_:_,_|_>_<_`_\\_!';
const ESCAPED_INPUT = '%25_%26_$_%0D_%0A_%3B_:_%2C_%7C_%3E_%3C_%60_%5C_%21';

import { escape, sanitizeCommand, isString } from '../lib';

describe('ADK-Util test', () => {
    it('should HTML escape all special characters', async () => {
        expect(escape(UNESCAPED_INPUT) === ESCAPED_INPUT).toBeTruthy();
        expect(escape(undefined) === '').toBeTruthy();
    });

    it('sanitize command should sanitize and build command and arguments properly', async () => {
        const cmdArg1 = UNESCAPED_INPUT;
        const cmd = UNESCAPED_INPUT;
        const args = [cmdArg1];

        expect(sanitizeCommand(cmd, args) === `${ESCAPED_INPUT} ${ESCAPED_INPUT}`).toBeTruthy();
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

    it('test isString()', async () => {
        const input = 'printenv';
        const inputObj = new String(input);

        expect(isString(input)).toBeTruthy();
        expect(isString(inputObj)).toBeTruthy();
        expect(isString(undefined)).toBeFalsy();
        expect(isString(null)).toBeFalsy();
    });
});
