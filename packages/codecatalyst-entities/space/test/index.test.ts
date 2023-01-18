import { getSpace, Space } from '../lib';

process.env.CATALYST_WORKFLOW_SPACE_NAME = 'test1-test2-test3';
process.env.CATALYST_WORKFLOW_SPACE_ID = 'ORG-ID';

describe('Space', () => {
    it('should print the space', () => {
        const spaceName = 'test1-test2-test3';
        const spaceId = 'ORG-ID';
        const space: Space = getSpace();
        expect(space.name).toMatch(spaceName);
        expect(space.id).toMatch(spaceId);
    });
});
