import { getInputParam, setOutputParam, runCommand, allEnv, setFailure, validateInput } from './command-wrapper';

export function getInput(inputVar: string) {
  return validateInput(getInputParam(inputVar));
}

export function getMultiLineInput(inputVar: string) {
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

/*
export function setOutputArtifacts(outputArtifacts) {
}

export function setOutputReports(outputReports) {
}

 */

export function allEnvs() {
  return allEnv();
}

export function setFailed(message: any) {
  setFailure(message, 1);
}
