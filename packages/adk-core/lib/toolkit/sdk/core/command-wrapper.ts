import { exec } from 'shelljs';
// @ts-ignore
import os from 'os';
import { ICommandOutput } from './core';

export function runCommand(cmd: string) {
    const command_output = <ICommandOutput>{};
    const shell_command = exec(cmd, { async: false });
    command_output.code = shell_command.code;
    command_output.stdout = shell_command.stdout;
    command_output.stderr = shell_command.stderr;
    return command_output;
}

export function getInputParam(inputVar: string) {
    return runCommand('printenv ' + inputVar).stdout;
}

export function setOutputParam(varName: string, varValue: string) {
    return runCommand(`echo "::set-output name=${varName}::${varValue}"`).stdout;
}

export function allEnv() {
    return runCommand('env | xargs').stdout;
}

export function validateInput(inputVar: string) {
    return inputVar.replace(/\n/g, '');
}

export function setFailure(message: any, exitCode: number) {
    process.exitCode = exitCode;
    const errorText = message.toString();
    addRunSummary(errorText, Level.ERROR);
    process.stdout.write(errorText + os.EOL);
}

enum Level {
    ERROR = "Error"
}

const summaryMessages: any[] = []

function addRunSummary(text: string | Error, level: Level) {
    const summaryMessage = {
        text: JSON.stringify(escapeData(text)),
        label: JSON.stringify("COMPUTE_ACTION"),
        level: JSON.stringify(escapeData(level))
    }
    summaryMessages.push(summaryMessage)
    setOutputParam("CAWS_ACTION_RUN_SUMMARY", JSON.stringify(summaryMessages))
}

function escapeData(s: string | Error): string {
    return s.toString().replace(/%/g, '%25')
        .replace(/\n/g, '%0A')
        .replace(/\r/g, '%0D')
        .replace(/\"/g, '')
        .replace(/\\/g, '')
        .replace(/#/g, '')
}