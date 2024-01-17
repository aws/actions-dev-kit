/* eslint-disable quotes */
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { WorkflowDefinition } from './sdk/WorkflowDefinition';
import { walkFiles } from './walk-files';

const validWorkflows = path.resolve(path.join(__dirname, './sample-workflows/valid/'));
const validFiles = walkFiles(validWorkflows, ['**/*.yaml']);
validFiles.forEach(file => {
  it(`${file} is an valid workflow`, () => {
    const workflowPath = path.join(validWorkflows, file);
    testWorkflow(workflowPath, {
      expected: true,
    });
  });
});

const invalidWorkflows = path.resolve(path.join(__dirname, './sample-workflows/invalid/'));
const invalidFiles = walkFiles(invalidWorkflows, ['**/*.yaml']);
invalidFiles.forEach(file => {
  it(`${file} is an invalid workflow`, () => {
    const workflowPath = path.join(invalidWorkflows, file);
    testWorkflow(workflowPath, {
      expected: false,
    });
  });
});

function testWorkflow(
  workflowFilepath: string,
  options: {
    expected: boolean;
  },
) {
  const workflow = yaml.load(fs.readFileSync(workflowFilepath).toString());
  const result = WorkflowDefinition.validate(workflow);

  try {
    expect(result.valid).toBe(options.expected);
  } catch (error) {
    console.error({
      error,
      workflowFilepath,
      reason: result.toString(),
    });
    throw error;
  }
}
