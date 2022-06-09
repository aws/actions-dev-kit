import core from '@quokka/adk-core';

export function getActionInput(name: string): string {
    return core.getInput(name);
}

export function runCommand(shellCommand: string): CommandOutput {
    const output = core.command(shellCommand);
    return {
        code: output.code,
        stdout: output.stdout,
        stderr: output.stderr,
    };
}

// this function will eventually use adk-core logging api for printing action logs.
export function info(message: string): void {
    console.log(message);
}

export function setFailed(message: any): void {
    core.setFailed(message);
}

export function setActionOutput(name: string, value: string): void {
    core.setOutput(name, value);
}

export type CommandOutput = {
    code: number
    stdout: any
    stderr: any
}
