import { getInputParam, setOutputParam, runCommand, setFailure, validateInput } from './command-wrapper';

/**
* Provides the value of the action parameter as setup on the workflow definition.
* Limits the value to a single line.
*
* @param inputVar The name of the environment variable. The value is sanitized by escaping special characters.
*
* @returns The value of the resolved input variable as setup in the workflow definition.
*/
export function getInput(inputVar: string) {
    return validateInput(getEnvironmentVariable('INPUT_' + inputVar.toUpperCase()));
}

/**
* Provides the multi-line value of the action parameter as setup on the workflow definition.
*
* @param inputVar The name of the environment variable. The value is sanitized by escaping special characters.
*
* @returns The multi-line value of the resolved input variable as setup in the workflow definition.
*/
export function getMultiLineInput(inputVar: string) {
    return getEnvironmentVariable('INPUT_' + inputVar.toUpperCase());
}

/**
* Provides the value of the environment variable as setup on the workflow definition and runtime environment.
* Limits the value to a single line.
*
* @param inputVar The name of the environment variable. The value is sanitized by escaping special characters.
*
* @return The value of the environment variable. Limits to a single line.
*/
export function getEnvironmentVariable(inputVar: string) {
    return getInputParam(inputVar);
}

/**
* Sets the output value for the action output parameter.
*
* @param varName The name of the environment variable.
* @param varValue The fully resolved value of the output variable.
*
* @return The result of running `echo ${varName}`.
*/
export function setOutput(varName: string, varValue: string) {
    return setOutputParam(varName, varValue);
}

/**
* Executes the command on the runtime.
* Both command and its argument are sanitized (escaped) before execution.
*
* @param cmd The command to execute.
* @param args The command arguments.
* @return {@link ICommandOutput | `Command Output`} complex object with runtime execution parameters.
*/
export function command(cmd: string, args?: string[]) {
    return runCommand(cmd, args);
}

/**
* Sets the action as failed with associated message.
*
* @param message The message to fail the action.
*/
export function setFailed(message: any) {
    setFailure(message, 1);
}

/**
* Command output interface providing modeled command output parameters.
*/
export interface ICommandOutput {
    /** The command output exit code. */
    code: number;
    /** standard output captured buffer. */
    stdout: any;
    /** standard error captured output. */
    stderr: any;
}

/**
* Utility class wrapping core methods.
*/
export class Utils {
    /** View documentation at {@link getInput | `getInput`} */
    static getInput(inputVar: string) {
        return validateInput(getEnvironmentVariable('INPUT_' + inputVar.toUpperCase()));
    }

    /** View documentation at {@link getMultiLineInput | `getMultiLineInput`} */
    static getMultiLineInput(inputVar: string) {
        return getEnvironmentVariable('INPUT_' + inputVar.toUpperCase());
    }

    /** View documentation at {@link getEnvironmentVariable | `getEnvironmentVariable`} */
    static getEnvironmentVariable(inputVar: string) {
        return getInputParam(inputVar);
    }

    /** View documentation at {@link setOutput | `setOutput`} */
    static setOutput(varName: string, varValue: string) {
        return setOutputParam(varName, varValue);
    }

    /** View documentation at {@link command | `command`} */
    static command(cmd: string, args?: string[]) {
        return runCommand(cmd, args);
    }

}
