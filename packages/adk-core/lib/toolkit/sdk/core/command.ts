import { exec } from 'shelljs';

export function echoCommand(cmd: string) {
  return exec('echo \$' + cmd, { async: false }).stdout;
}

export function command(cmd: string) {
  return exec(cmd, { async: false }).stdout;
}