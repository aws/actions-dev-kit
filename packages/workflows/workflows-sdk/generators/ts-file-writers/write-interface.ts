/* eslint-disable import/no-extraneous-dependencies */
import * as fs from 'fs';
import * as path from 'path';
import * as converter from 'json-schema-to-typescript';
import * as pino from 'pino';

/**
 * @returns outputLocation
 */
export async function writeInterface(
  log: pino.BaseLogger,
  schema: any,
  outputlocation: string,
  options?: Partial<converter.Options> | (undefined & {}),
): Promise<string> {
  try {
    const tsresult = await converter.compile(schema, schema.name, {
      ...options,
    });

    fs.mkdirSync(path.dirname(outputlocation), { recursive: true });
    fs.writeFileSync(outputlocation, tsresult);
  } catch (error) {
    log.error({ error });
    log.debug(schema);
    throw `Could not compile ${schema.name} to ${outputlocation}`;
  }
  return path.resolve(outputlocation);
}
