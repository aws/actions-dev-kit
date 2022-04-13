"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFailed = exports.allEnvs = exports.command = exports.setOutput = exports.getIt = exports.getMultiLineInput = exports.getInput = void 0;
const command_wrapper_1 = require("./command-wrapper");
function getInput(inputVar) {
    return (0, command_wrapper_1.validateInput)((0, command_wrapper_1.getInputParam)(inputVar));
}
exports.getInput = getInput;
function getMultiLineInput(inputVar) {
    return (0, command_wrapper_1.getInputParam)(inputVar);
}
exports.getMultiLineInput = getMultiLineInput;
function getIt() {
    return 'my-input-working';
}
exports.getIt = getIt;
function setOutput(varName, varValue) {
    return (0, command_wrapper_1.setOutputParam)(varName, varValue);
}
exports.setOutput = setOutput;
function command(cmd) {
    return (0, command_wrapper_1.runCommand)(cmd);
}
exports.command = command;
/*
export function setOutputArtifacts(outputArtifacts) {
}

export function setOutputReports(outputReports) {
}

 */
function allEnvs() {
    return (0, command_wrapper_1.allEnv)();
}
exports.allEnvs = allEnvs;
function setFailed(message) {
    (0, command_wrapper_1.setFailure)(message, 1);
}
exports.setFailed = setFailed;
