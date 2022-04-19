import * as childProcess from 'child_process';

export async function execute(cmd: string, args: string[]): Promise<string> {
  const child = childProcess.spawn(cmd, args, {shell: true, stdio: ['ignore', 'pipe', 'inherit'] });
  let stdout = '';
  child.stdout.on('data', chunk => stdout += chunk.toString());
  return new Promise<string>((success, failure) => {
    child.once('error', err => fail(err));
    child.once('exit', status => {
      if (status === 0) {
        return success(stdout);
      } else {
        console.log(`Failed: ${failure}`);
        return failure(new Error(`${cmd} exited with status ${status}`));
      }
    });
  });
}
