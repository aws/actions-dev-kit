import { exec } from 'shelljs';
import os from "os";

export interface CommandOutput {
  code: number;
  stdout: any;
  stderr: any;
}

export function runCommand(cmd: string) {
  const command_output = <CommandOutput>{};
  const shell_command = exec(cmd, {async: false});
  command_output.code = shell_command.code;
  command_output.stdout = shell_command.stdout;
  command_output.stderr = shell_command.stderr;
  return command_output;
}

export function getInputParam(inputVar: string) {
  return runCommand("printenv " + inputVar).stdout;
}

export function setOutputParam(varName: string, varValue: string) {
  return runCommand(`echo "::set-output name=${varName}::${varValue}"`).stdout;
}

export function allEnv() {
  return runCommand("env | xargs").stdout;
}

export function validateInput(inputVar: string) {
  return inputVar.replace(/\n/g, '');
}

export function setFailure(message: any, exitCode: number) {
  process.exitCode = exitCode;
  const errorText = message instanceof Error ? message.toString() : message
  process.stdout.write(errorText + os.EOL);
}