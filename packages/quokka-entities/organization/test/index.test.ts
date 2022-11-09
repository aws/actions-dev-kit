import { getOrganization, Organization } from '../lib';

process.env.CATALYST_WORKFLOW_SPACE_NAME = 'test1-test2-test3';
process.env.CATALYST_WORKFLOW_SPACE_ID = 'ORG-ID';

describe('organization', () => {
    it('should print the organization', () => {
        const orgName = 'test1-test2-test3';
        const orgId = 'ORG-ID';
        const organization: Organization = getOrganization();
        expect(organization.name).toMatch(orgName);
        expect(organization.id).toMatch(orgId);
    });
});
