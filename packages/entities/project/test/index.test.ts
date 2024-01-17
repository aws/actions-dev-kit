import { getProject, Project } from '../src';

process.env.CATALYST_WORKFLOW_PROJECT_NAME = 'test1-test2-test3';
process.env.CATALYST_WORKFLOW_PROJECT_ID = 'PROJ-ID';

describe('project', () => {
  it('should print the project information', () => {
    const projName = 'test1-test2-test3';
    const projId = 'PROJ-ID';
    const project: Project = getProject();
    expect(project.name).toMatch(projName);
    expect(project.id).toMatch(projId);
  });
});
