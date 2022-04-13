"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = exports.echoCommand = void 0;
const shelljs_1 = require("shelljs");
function echoCommand(cmd) {
    return (0, shelljs_1.exec)("echo \$" + cmd, { async: false }).stdout;
}
exports.echoCommand = echoCommand;
function command(cmd) {
    return (0, shelljs_1.exec)(cmd, { async: false }).stdout;
}
exports.command = command;
