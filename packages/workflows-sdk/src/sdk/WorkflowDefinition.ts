import * as fs from 'fs';
import * as path from 'path';
import { Validator, ValidatorResult, Options } from 'jsonschema';
import * as types from '../index';
import workflowEntry from '../models/workflow/Workflow.json';

/**
 * Generates a typesafe codecatalyst workflow definition.
 * Use getDefinition() to generate a typesafe defintion
 */
export class WorkflowDefintion {
  /**
   * Validates an object against the underlying json schema
   * @param workflowLikeObject
   * @param _options
   * @returns
   */
  static validate(
    workflowLikeObject: any,
    _options?: Options,
  ): ValidatorResult {
    const v = new Validator();
    v.addSchema(workflowEntry);
    while (v.unresolvedRefs.length) {
      const nextSchema = v.unresolvedRefs.shift();
      if (nextSchema && !v.schemas[nextSchema]) {
        v.addSchema(
          {
            ...fetchSchema(nextSchema),
            $id: nextSchema,
            id: nextSchema,
          },
          nextSchema,
        );
      }
    }
    const result = v.validate(workflowLikeObject, workflowEntry);
    return result;
  }

  definition: types.Workflow;
  constructor(
    name: string,
    options?: {
      /**
       * This will create a workflow definition from an exisiting workflow definition
       */
      workflow?: Partial<types.Workflow>;
    },
  ) {
    this.definition = {
      Name: name,
      RunMode: 'PARALLEL',
      Actions: {},
      ...options?.workflow,
    };
  }

  addTrigger<T extends types.Trigger>(trigger: T, _options?: {}) {
    if (!this.definition.Triggers) {
      this.definition.Triggers = [];
    }
    this.definition.Triggers.push(trigger);
  }

  addAction<T extends types.Action | types.ActionGroup>(
    name: string,
    action: T,
    _options?: {},
  ) {
    this.definition[name] = action;
  }
}

export function fetchSchema(pathloc: string) {
  const schemapath = path.resolve(path.join(__dirname, '../models/', pathloc));
  // const result -fs.readFileSync().toString();
  return JSON.parse(fs.readFileSync(schemapath).toString());
}
