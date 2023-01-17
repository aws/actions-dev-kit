// @ts-ignore
import * as core from '@quokka/adk-core';
import { Space } from './types/types';

export function getSpace(): Space {
    return <Space> {
        name: getSpaceName(),
        id: getSpaceId(),
    };
}

function getSpaceName() {
    return core.getEnvironmentVariable('CATALYST_WORKFLOW_SPACE_NAME');
}

function getSpaceId() {
    return core.getEnvironmentVariable('CATALYST_WORKFLOW_SPACE_ID');
}
