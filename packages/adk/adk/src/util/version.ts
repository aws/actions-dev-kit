// eslint-disable-next-line @typescript-eslint/no-require-imports
const pj = require('../../package.json');

export function version() {
  return pj.version;
}
