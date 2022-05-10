import { getProject, Project } from '../lib';

process.env.CAWS_SOURCE_REPO_OWNER = 'test1-test2-test3';
process.env.CAWS_WORKFLOW_REPO_PROJECT_ID = 'PROJ-ID';

describe('project', () => {
  it('should print the project information', () => {
    const projName = 'test3';
    const projId = 'PROJ-ID';
    const project: Project = getProject();
    expect(project.name).toMatch(projName);
    expect(project.id).toMatch(projId);
  });
});
