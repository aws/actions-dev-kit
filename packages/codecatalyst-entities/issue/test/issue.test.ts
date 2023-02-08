'use strict';

import { Issue, CodeCatalystIssueProvider } from '../lib/issue';

describe('issue test', () => {
    it('run basic test', async () => {
        const issueProvider = new CodeCatalystIssueProvider('https://public.api-gamma.quokka.codes/graphql', {
            cookie: 'cookie',
            csrfToken: 'csrfToken',
        });
        const issue = new Issue(issueProvider);
        expect(issue.getIssueProvider()).toEqual(issueProvider);
    });
});