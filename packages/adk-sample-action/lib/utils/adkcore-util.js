"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setActionOutput = exports.setFailed = exports.info = exports.runCommand = exports.getActionInput = void 0;
const adk_core_1 = __importDefault(require("@quokka/adk-core"));
function getActionInput(name) {
    return adk_core_1.default.getInput(name);
}
exports.getActionInput = getActionInput;
function runCommand(shellCommand) {
    const output = adk_core_1.default.command(shellCommand);
    return {
        code: output.code,
        stdout: output.stdout,
        stderr: output.stderr,
    };
}
exports.runCommand = runCommand;
// this function will eventually use adk-core logging api for printing action logs.
function info(message) {
    console.log(message);
}
exports.info = info;
function setFailed(message) {
    adk_core_1.default.setFailed(message);
}
exports.setFailed = setFailed;
function setActionOutput(name, value) {
    adk_core_1.default.setOutput(name, value);
}
exports.setActionOutput = setActionOutput;
