import { exec } from 'shelljs';
// @ts-ignore
import os from 'os';
import { ICommandOutput } from './core';
import { isValidOutputVariableName, outputVariableNamePattern, sanitizeCommand } from '@aws/codecatalyst-adk-utils/lib';

export function runCommand(cmd: string,
    sanitizeInput: boolean = true,
    disableStdInput: boolean = true,
    args?: string[]) {

    const command_output = <ICommandOutput>{};
    const sanitizedCommand = disableStdInput
        ? redirectStdInputToDevNull(sanitizeCommand(cmd, sanitizeInput, args))
        : sanitizeCommand(cmd, sanitizeInput, args);

    const shell_command = exec(sanitizedCommand, { async: false });
    command_output.code = shell_command.code;
    command_output.stdout = shell_command.stdout;
    command_output.stderr = shell_command.stderr;
    return command_output;
}

export function getInputParam(inputVar: string) {
    return process.env[inputVar] === undefined ? '' : process.env[inputVar];
}

export function setOutputParam(varName: string, varValue: string) {
    if (!isValidOutputVariableName(varName)) {
        const errorMessage = `Invalid output parameter name, it must match the following pattern ${outputVariableNamePattern}`;
        const command_output = <ICommandOutput>{};
        command_output.code = 1;
        command_output.stdout = errorMessage;
        command_output.stderr = errorMessage;
        setFailure(errorMessage, 1);
        return command_output;
    }
    return runCommand(`echo "::set-output name=${varName}::${varValue}"`, false).stdout;
}

export function validateInput(inputVar?: string) {
    return inputVar?.replace(/\n/g, '');
}

export function setFailure(message: any, exitCode: number) {
    process.exitCode = exitCode;
    const errorText = message.toString();
    process.stdout.write(errorText + os.EOL);
}

function redirectStdInputToDevNull(cmd: string) {
    return cmd + ' < /dev/null';
}