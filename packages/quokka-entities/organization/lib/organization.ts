// @ts-ignore
import * as core from '@quokka/adk-core';
import { Organization } from './types/types';

export function getOrganization(): Organization {
    return <Organization> {
        name: getOrganizationName(),
        id: getOrganizationId(),
    };
}

function getOrganizationName() {
    return core.getEnvironmentVariable('CATALYST_WORKFLOW_SPACE_NAME');
}

function getOrganizationId() {
    return core.getEnvironmentVariable('CATALYST_WORKFLOW_SPACE_ID');
}
