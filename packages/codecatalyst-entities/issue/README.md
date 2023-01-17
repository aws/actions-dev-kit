# `Issue`

> Use the issue construct to query and mutate the issue resource in the organization

## Usage

```
        const issueProvider = new QuokkaIssueProvider('https://public.api-gamma.quokka.codes/graphql', {
            cookie: '<<cookie>>',
            csrfToken: '<<csrfToken>>',
        });
        const issue = new Issue(issueProvider);
```
