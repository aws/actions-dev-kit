'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lib_1 = require("../lib");
const UNESCAPED_INPUT = '%_&_$_\r_\n_;_:_,_|_>_<_`_\\_!';
const ESCAPED_INPUT = '%25_&_$_%0D_%0A_;_:_,_|_>_<_`_\\_!';
jest.mock('fs', () => (Object.assign(Object.assign({}, jest.requireActual('fs')), { writeFileSync: jest.fn(), mkdirSync: jest.fn(), copyFileSync: jest.fn(), existsSync: jest.fn() })));
const mockFS = fs_1.default;
describe('ADK-Util test', () => {
    it('should HTML escape all special characters', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, lib_1.escape)(UNESCAPED_INPUT) === ESCAPED_INPUT).toBeTruthy();
        expect((0, lib_1.escape)(undefined) === '').toBeTruthy();
    }));
    it('sanitize command should sanitize and build command and arguments properly', () => __awaiter(void 0, void 0, void 0, function* () {
        const cmdArg1 = UNESCAPED_INPUT;
        const cmd = UNESCAPED_INPUT;
        const args = [cmdArg1];
        expect((0, lib_1.sanitizeCommand)(cmd, true, args) === `${ESCAPED_INPUT} ${ESCAPED_INPUT}`).toBeTruthy();
    }));
    it('sanitize command should build command and arguments properly', () => __awaiter(void 0, void 0, void 0, function* () {
        const cmd = 'printenv';
        const args = ['arg1', 'arg2', 'arg3', 'arg4'];
        expect((0, lib_1.sanitizeCommand)(cmd, true, args) === 'printenv arg1 arg2 arg3 arg4').toBeTruthy();
        expect((0, lib_1.sanitizeCommand)('printenv arg1', true, []) === 'printenv arg1').toBeTruthy();
    }));
    it('sanitize command should handle undefined and empty command and arguments properly', () => __awaiter(void 0, void 0, void 0, function* () {
        const cmd = 'printenv';
        const args = ['cmd_arg_1'];
        expect((0, lib_1.sanitizeCommand)(cmd, undefined) === cmd).toBeTruthy();
        expect((0, lib_1.sanitizeCommand)(cmd, true, []) === cmd).toBeTruthy();
        expect((0, lib_1.sanitizeCommand)('', true, args) === '').toBeTruthy();
        // @ts-ignore
        expect((0, lib_1.sanitizeCommand)(undefined, args) === '').toBeTruthy();
        // @ts-ignore
        expect((0, lib_1.sanitizeCommand)('', {}) === '').toBeTruthy();
        // @ts-ignore
        expect((0, lib_1.sanitizeCommand)('', 'not_array') === '').toBeTruthy();
    }));
    it('test unknownToStringOrUndefined()', () => __awaiter(void 0, void 0, void 0, function* () {
        const input = 'printenv';
        const input_unknown = '';
        const input_unknown_and_undefined = undefined;
        expect((0, lib_1.isString)((0, lib_1.unknownToStringOrUndefined)(input))).toBeTruthy();
        expect((0, lib_1.isString)((0, lib_1.unknownToStringOrUndefined)(input_unknown))).toBeTruthy();
        expect((0, lib_1.isString)((0, lib_1.unknownToStringOrUndefined)(input_unknown_and_undefined))).toBeFalsy();
    }));
    it('test unknownToBooleanOrFalse()', () => __awaiter(void 0, void 0, void 0, function* () {
        const input = true;
        const input_unknown = true;
        const input_unknown_and_undefined = undefined;
        expect((0, lib_1.unknownToBooleanOrFalse)(input)).toBeTruthy();
        expect((0, lib_1.unknownToBooleanOrFalse)(input_unknown)).toBeTruthy();
        expect((0, lib_1.unknownToBooleanOrFalse)(input_unknown_and_undefined)).toBeFalsy();
    }));
    it('test isString()', () => __awaiter(void 0, void 0, void 0, function* () {
        const input = 'printenv';
        const inputObj = new String(input);
        expect((0, lib_1.isString)(input)).toBeTruthy();
        expect((0, lib_1.isString)(inputObj)).toBeTruthy();
        expect((0, lib_1.isString)(undefined)).toBeFalsy();
        expect((0, lib_1.isString)(null)).toBeFalsy();
    }));
    it('test copyToFileSync', () => __awaiter(void 0, void 0, void 0, function* () {
        mockFS.existsSync.mockReturnValueOnce(true);
        (0, lib_1.copyToFileSync)('dummy', 'dummy', false);
        expect(fs_1.default.copyFileSync).toHaveBeenCalledTimes(0);
        mockFS.existsSync.mockReturnValueOnce(true);
        (0, lib_1.copyToFileSync)('dummy', 'dummy');
        expect(fs_1.default.copyFileSync).toHaveBeenCalledTimes(0);
        mockFS.existsSync.mockReturnValueOnce(false);
        (0, lib_1.copyToFileSync)('dummy', 'dummy', false);
        expect(fs_1.default.copyFileSync).toHaveBeenCalledTimes(1);
        mockFS.existsSync.mockReturnValueOnce(true);
        (0, lib_1.copyToFileSync)('dummy', 'dummy', true);
        expect(fs_1.default.copyFileSync).toHaveBeenCalledTimes(1);
    }));
    it('test writeContentToFileSync', () => __awaiter(void 0, void 0, void 0, function* () {
        mockFS.existsSync.mockReturnValueOnce(true);
        (0, lib_1.writeContentToFileSync)('dummy', 'dummy', false);
        expect(fs_1.default.writeFileSync).toHaveBeenCalledTimes(0);
        mockFS.existsSync.mockReturnValueOnce(true);
        (0, lib_1.writeContentToFileSync)('dummy', 'dummy');
        expect(fs_1.default.writeFileSync).toHaveBeenCalledTimes(0);
        mockFS.existsSync.mockReturnValueOnce(false);
        (0, lib_1.writeContentToFileSync)('dummy', 'dummy', false);
        expect(fs_1.default.writeFileSync).toHaveBeenCalledTimes(1);
        mockFS.existsSync.mockReturnValueOnce(true);
        (0, lib_1.writeContentToFileSync)('dummy', 'dummy', true);
        expect(fs_1.default.writeFileSync).toHaveBeenCalledTimes(1);
    }));
    it('test validateOutputVariableName', () => __awaiter(void 0, void 0, void 0, function* () {
        const validInput = 'Stack_ID';
        const validInput30Chars = 'Stack_ID_12345678910111213145';
        const emptyInput = '';
        const invalidInput = 'Stack ID';
        const tooLongInput = 'longer_than_30_chars_123456789101112131415161718';
        const startsWithInvalidChar = '-Stack_ID';
        const endsWithInvalidChar = 'Stack_ID-';
        expect((0, lib_1.isValidOutputVariableName)(validInput)).toBeTruthy();
        expect((0, lib_1.isValidOutputVariableName)(validInput30Chars)).toBeTruthy();
        expect((0, lib_1.isValidOutputVariableName)(emptyInput)).toBeFalsy();
        expect((0, lib_1.isValidOutputVariableName)(invalidInput)).toBeFalsy();
        expect((0, lib_1.isValidOutputVariableName)(tooLongInput)).toBeFalsy();
        expect((0, lib_1.isValidOutputVariableName)(startsWithInvalidChar)).toBeFalsy();
        expect((0, lib_1.isValidOutputVariableName)(endsWithInvalidChar)).toBeFalsy();
    }));
});
//# sourceMappingURL=util.test.js.map