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
    const name = core.getEnvironmentVariable('CAWS_SOURCE_REPO_OWNER');
    const regex = /(.*)-(.*)/;
    return name.match(regex)![1];
}

function getOrganizationId() {
    return core.getEnvironmentVariable('CAWS_WORKFLOW_ORGANIZATION_ID');
}
