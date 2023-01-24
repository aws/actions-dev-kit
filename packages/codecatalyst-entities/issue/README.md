# `Issue`
## Purpose
Use the issue construct to query and mutate the issue resource in a CodeCatalyst space

## Usage

```
        const issueProvider = new CodeCatalystIssueProvider('https://public.api-gamma.quokka.codes/graphql', {
            cookie: '<<cookie>>',
            csrfToken: '<<csrfToken>>',
        });
        const issue = new Issue(issueProvider);
```
