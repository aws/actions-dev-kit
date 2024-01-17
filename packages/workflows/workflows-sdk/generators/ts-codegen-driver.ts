import * as cp from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as pino from 'pino';
import * as pretty from 'pino-pretty';
import { writeInterface } from './ts-file-writers/write-interface';
import { walkFiles } from '../src/walk-files';

const logger = pino.default(
  {
    level: 'debug',
  },
  pretty.default({
    colorize: true,
  }),
);

void (async () => {
  const modelsEntrypoint = path.resolve(path.join(__dirname, '../models'));
  const typescriptSDK = path.resolve(path.join(__dirname, '../src/generated'));

  cp.execSync(`rm -rf ${typescriptSDK}`);
  const typescriptFiles: string[] = [];
  for (const inputSchemaFile of walkFiles(modelsEntrypoint, ['**/*.json'])) {
    const outputTypescriptFile = path.join(typescriptSDK, path.dirname(inputSchemaFile), path.basename(inputSchemaFile).replace('.json', '.ts'));
    const schema = JSON.parse(fs.readFileSync(path.join(modelsEntrypoint, inputSchemaFile)).toString());
    logger.debug(`${inputSchemaFile} => ${outputTypescriptFile}`);
    typescriptFiles.push(
      await writeInterface(logger, schema, outputTypescriptFile, {
        cwd: path.join(modelsEntrypoint, path.dirname(inputSchemaFile)),
        ignoreMinAndMaxItems: true,
        maxItems: -1,
      }),
    );
  }
})();
