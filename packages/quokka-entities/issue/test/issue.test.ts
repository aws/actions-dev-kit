'use strict';

import { Issue, QuokkaIssueProvider } from '../lib/issue';

describe('issue test', () => {
    it('run basic test', async () => {
        const issueProvider = new QuokkaIssueProvider('https://public.api-gamma.quokka.codes/graphql', {
            cookie: 'cookie',
            csrfToken: 'csrfToken',
        });
        const issue = new Issue(issueProvider);
        expect(issue.getIssueProvider()).toEqual(issueProvider);
    });
});