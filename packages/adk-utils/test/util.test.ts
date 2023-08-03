'use strict';

import fs from 'fs';
import {
    escape,
    sanitizeCommand,
    isString,
    isValidOutputVariableName,
    copyToFileSync,
    writeContentToFileSync,
    unknownToStringOrUndefined,
    unknownToBooleanOrFalse,
} from '../lib';

const UNESCAPED_INPUT = '%_&_$_\r_\n_;_:_,_|_>_<_`_\\_!';
const ESCAPED_INPUT = '%25_&_$_%0D_%0A_;_:_,_|_>_<_`_\\_!';

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    writeFileSync: jest.fn(),
    mkdirSync: jest.fn(),
    copyFileSync: jest.fn(),
    existsSync: jest.fn(),
}));
const mockFS: jest.Mocked<typeof fs> = <jest.Mocked<typeof fs>>fs;

describe('ADK-Util test', () => {
    it('should HTML escape all special characters', async () => {
        expect(escape(UNESCAPED_INPUT) === ESCAPED_INPUT).toBeTruthy();
        expect(escape(undefined) === '').toBeTruthy();
    });

    it('sanitize command should sanitize and build command and arguments properly', async () => {
        const cmdArg1 = UNESCAPED_INPUT;
        const cmd = UNESCAPED_INPUT;
        const args = [cmdArg1];

        expect(sanitizeCommand(cmd, true, args) === `${ESCAPED_INPUT} ${ESCAPED_INPUT}`).toBeTruthy();
    });

    it('sanitize command should build command and arguments properly', async () => {
        const cmd = 'printenv';
        const args = ['arg1', 'arg2', 'arg3', 'arg4'];

        expect(sanitizeCommand(cmd, true, args) === 'printenv arg1 arg2 arg3 arg4').toBeTruthy();
        expect(sanitizeCommand('printenv arg1', true, []) === 'printenv arg1').toBeTruthy();
    });

    it('sanitize command should handle undefined and empty command and arguments properly', async () => {
        const cmd = 'printenv';
        const args = ['cmd_arg_1'];

        expect(sanitizeCommand(cmd, undefined) === cmd).toBeTruthy();
        expect(sanitizeCommand(cmd, true, []) === cmd).toBeTruthy();
        expect(sanitizeCommand('', true, args) === '').toBeTruthy();
        // @ts-ignore
        expect(sanitizeCommand(undefined, args) === '').toBeTruthy();
        // @ts-ignore
        expect(sanitizeCommand('', {}) === '').toBeTruthy();
        // @ts-ignore
        expect(sanitizeCommand('', 'not_array') === '').toBeTruthy();
    });

    it('test unknownToStringOrUndefined()', async () => {
        const input = 'printenv';
        const input_unknown : unknown = '';
        const input_unknown_and_undefined : unknown = undefined;

        expect(isString(unknownToStringOrUndefined(input))).toBeTruthy();
        expect(isString(unknownToStringOrUndefined(input_unknown))).toBeTruthy();
        expect(isString(unknownToStringOrUndefined(input_unknown_and_undefined))).toBeFalsy();
    });

    it('test unknownToBooleanOrFalse()', async () => {
        const input = true;
        const input_unknown : unknown = true;
        const input_unknown_and_undefined : unknown = undefined;

        expect(unknownToBooleanOrFalse(input)).toBeTruthy();
        expect(unknownToBooleanOrFalse(input_unknown)).toBeTruthy();
        expect(unknownToBooleanOrFalse(input_unknown_and_undefined)).toBeFalsy();
    });

    it('test isString()', async () => {
        const input = 'printenv';
        const inputObj = new String(input);

        expect(isString(input)).toBeTruthy();
        expect(isString(inputObj)).toBeTruthy();
        expect(isString(undefined)).toBeFalsy();
        expect(isString(null)).toBeFalsy();
    });

    it('test copyToFileSync', async () => {
        mockFS.existsSync.mockReturnValueOnce(true);
        copyToFileSync('dummy', 'dummy', false);
        expect(fs.copyFileSync).toHaveBeenCalledTimes(0);

        mockFS.existsSync.mockReturnValueOnce(true);
        copyToFileSync('dummy', 'dummy');
        expect(fs.copyFileSync).toHaveBeenCalledTimes(0);

        mockFS.existsSync.mockReturnValueOnce(false);
        copyToFileSync('dummy', 'dummy', false);
        expect(fs.copyFileSync).toHaveBeenCalledTimes(1);

        mockFS.existsSync.mockReturnValueOnce(true);
        copyToFileSync('dummy', 'dummy', true);
        expect(fs.copyFileSync).toHaveBeenCalledTimes(1);
    });

    it('test writeContentToFileSync', async () => {
        mockFS.existsSync.mockReturnValueOnce(true);
        writeContentToFileSync('dummy', 'dummy', false);
        expect(fs.writeFileSync).toHaveBeenCalledTimes(0);

        mockFS.existsSync.mockReturnValueOnce(true);
        writeContentToFileSync('dummy', 'dummy');
        expect(fs.writeFileSync).toHaveBeenCalledTimes(0);

        mockFS.existsSync.mockReturnValueOnce(false);
        writeContentToFileSync('dummy', 'dummy', false);
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1);

        mockFS.existsSync.mockReturnValueOnce(true);
        writeContentToFileSync('dummy', 'dummy', true);
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
    });

    it('test validateOutputVariableName', async () => {
        const validInput = 'Stack_ID';
        const validInput30Chars = 'Stack_ID_12345678910111213145';
        const emptyInput = '';
        const invalidInput = 'Stack ID';
        const tooLongInput = 'longer_than_30_chars_123456789101112131415161718';
        const startsWithInvalidChar = '-Stack_ID';
        const endsWithInvalidChar = 'Stack_ID-';

        expect(isValidOutputVariableName(validInput)).toBeTruthy();
        expect(isValidOutputVariableName(validInput30Chars)).toBeTruthy();
        expect(isValidOutputVariableName(emptyInput)).toBeFalsy();
        expect(isValidOutputVariableName(invalidInput)).toBeFalsy();
        expect(isValidOutputVariableName(tooLongInput)).toBeFalsy();
        expect(isValidOutputVariableName(startsWithInvalidChar)).toBeFalsy();
        expect(isValidOutputVariableName(endsWithInvalidChar)).toBeFalsy();
    });
});
