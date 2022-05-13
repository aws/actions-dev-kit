import * as core from '@quokka/adk-core';
import { Project } from './types/types';

export function getProject(): Project {
  return <Project> {
    name: getProjectName(),
    id: getProjectId(),
  };
}

function getProjectName() {
  const name = core.getEnvironmentVariable('CAWS_SOURCE_REPO_OWNER');
  const regex = /(.*)-(.*)/;
  return name.match(regex)![2];
}

function getProjectId() {
  return core.getEnvironmentVariable('CAWS_WORKFLOW_REPO_PROJECT_ID');
}
