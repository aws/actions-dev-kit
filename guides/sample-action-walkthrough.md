# ADK Create Issue Action

The sample action https://quokka.codes/organizations/AEF-Team/projects/ADK-Create-Issue-Action/view showcases the usage of ADK core library to get input and set output, it also leverages the generated Fusi typescript sdk `createIssue` mutation to create the issue in the backlog.

To work around the machine token before sdk release, please provide the cookie and csrf token input in the secrets.
The cookie and csrf token are the CAWS sign in credentials to establish a session (similar used by the quokka UI) for the generated Fusi typescript sdk to make service call.

### Input Parameters
```
stage:
  description: 'integ or prod, default to integ'
  required: false
  default: 'integ'
cookie:
  description: 'Caws cookie'
  required: true
csrf_token:
    description: 'Caws csrf token'
    required: true
title:
  description: 'Issue title'
  required: true
description:
  description: 'Issue description'
  required: false
  default: ''
```

The organization and the project are the optional, if not provided by default it should be current org and project.

### Output Parameters
`NewIssueUrl`: the output url of the created issue

## Sample Workflow

```
Actions:
  SampleCreateIssueAction:
    Identifier: aws/github-actions-runner@v1
    Inputs:
      Sources:
        - WorkflowSource
    Configuration:
      Steps:
        - name: Create Issue Action
          id: step1
          uses: ./
          with:
            organization: 'AEF-Team'
            project: 'ADK-Create-Issue-Action'
            stage: 'prod'
            title: 'Test create issue action'
            description: 'Test description'
            cookie: ${Secrets.COOKIE}
            csrf_token: ${Secrets.CSRF_TOKEN}

```
## FAQ
### How to get Cookie and Csrf Token?
1. Login to the quokka UI
2. Open the Network tab in the browser Console
3. Add the filter `public.api.quokka.codes`
4. Select one of the post requests, and look for the `Cookie` and `anti-csrftoken-a2z` value in the Headers 
