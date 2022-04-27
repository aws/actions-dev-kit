import { getOrganization, Organization } from '../lib';

process.env.CAWS_SOURCE_REPO_OWNER = 'test1-test2-test3';
process.env.CAWS_WORKFLOW_ORGANIZATION_ID = 'ORG-ID';

describe('organization', () => {
  it('should print the organization', () => {
    const orgName = 'test1-test2';
    const orgId = 'ORG-ID';
    const organization: Organization = getOrganization();
    expect(organization.name).toBe(orgName);
    expect(organization.id).toBe(orgId);
  });
});
