"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFailure = exports.validateInput = exports.allEnv = exports.setOutputParam = exports.getInputParam = exports.runCommand = void 0;
const shelljs_1 = require("shelljs");
const os_1 = __importDefault(require("os"));
function runCommand(cmd) {
    const command_output = {};
    const shell_command = (0, shelljs_1.exec)(cmd, { async: false });
    command_output.code = shell_command.code;
    command_output.stdout = shell_command.stdout;
    command_output.stderr = shell_command.stderr;
    return command_output;
}
exports.runCommand = runCommand;
function getInputParam(inputVar) {
    return runCommand("printenv " + inputVar).stdout;
}
exports.getInputParam = getInputParam;
function setOutputParam(varName, varValue) {
    return runCommand(`echo "::set-output name=${varName}::${varValue}"`).stdout;
}
exports.setOutputParam = setOutputParam;
function allEnv() {
    return runCommand("env | xargs").stdout;
}
exports.allEnv = allEnv;
function validateInput(inputVar) {
    return inputVar.replace(/\n/g, '');
}
exports.validateInput = validateInput;
function setFailure(message, exitCode) {
    process.exitCode = exitCode;
    const errorText = message instanceof Error ? message.toString() : message;
    process.stdout.write(errorText + os_1.default.EOL);
}
exports.setFailure = setFailure;
