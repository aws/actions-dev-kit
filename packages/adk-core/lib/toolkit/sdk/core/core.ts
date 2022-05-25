import { getInputParam, setOutputParam, runCommand, allEnv, setFailure, validateInput } from './command-wrapper';

export function getInput(inputVar: string) {
    return validateInput(getEnvironmentVariable('INPUT_' + inputVar.toUpperCase()));
}

export function getMultiLineInput(inputVar: string) {
    return getEnvironmentVariable('INPUT_' + inputVar.toUpperCase());
}

export function getEnvironmentVariable(inputVar: string) {
    return getInputParam(inputVar);
}

export function getIt() {
    return 'my-input-working';
}

export function setOutput(varName: string, varValue: string) {
    return setOutputParam(varName, varValue);
}

export function command(cmd: string) {
    return runCommand(cmd);
}

export function allEnvs() {
    return allEnv();
}

export function setFailed(message: any) {
    setFailure(message, 1);
}

export interface ICommandOutput {
    code: number;
    stdout: any;
    stderr: any;
}

export class Utils {

    static getInput(inputVar: string) {
        return validateInput(getEnvironmentVariable('INPUT_' + inputVar.toUpperCase()));
    }

    static getMultiLineInput(inputVar: string) {
        return getEnvironmentVariable('INPUT_' + inputVar.toUpperCase());
    }

    static getEnvironmentVariable(inputVar: string) {
        return getInputParam(inputVar);
    }

    static setOutput(varName: string, varValue: string) {
        return setOutputParam(varName, varValue);
    }

    static command(cmd: string) {
        return runCommand(cmd);
    }

    static allEnvs() {
        return allEnv();
    }
}