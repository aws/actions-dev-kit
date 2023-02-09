// @ts-ignore
import * as core from '@codecatalyst/adk-core';
import { Project } from './types/types';

/**
 * Returns CodeCatalyst Project.
 * @return {@link Project | `Project`}: The project object.
 */
export function getProject(): Project {
    return <Project> {
        name: getProjectName(),
        id: getProjectId(),
    };
}

function getProjectName() {
    return core.getEnvironmentVariable('CATALYST_WORKFLOW_PROJECT_NAME');
}

function getProjectId() {
    return core.getEnvironmentVariable('CATALYST_WORKFLOW_PROJECT_ID');
}
