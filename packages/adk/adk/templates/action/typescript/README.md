# About the "%%ACTION_NAME%%" action

<!--
- Explain why your customers would use this action.
- What does it offer?
- What is the end goal of using this action?
- If it is similar to another action, what makes it unique?
- Example content follows.
--->

The **%%ACTION_NAME%%** action greets a person by name with a hello message.

## Basic example

<!--
- Include a real-world example + an introduction explaining the example.
- The example should show just the action YAML code, but...
- If the action relies on other actions, include the larger workflow YAML.
- Example content follows. -->

The following example shows how to configure **%%ACTION_NAME%%-CI-workflow**.

> **Note**: The example is for illustrative purposes, and will not work without additional configuration.

```
Name: %%ACTION_NAME%%-CI-workflow
SchemaVersion: 1.0
...
Actions:
  %%ACTION_NAME%%:
    Identifier: %%CODECATALYST_SPACE_LOWERCASE%%/%%ACTION_NAME_LOWERCASE%%@v1
    Environment:
      Name: codecatalyst-environment
      Connections:
        - Name: codecatalyst-account-connection
          Role: codecatalyst-role
    Inputs:
      Sources:
        - WorkflowSource
%%ACTION_USAGE%%
```

---

Configuration properties used in this example are described below.

### %%ACTION_NAME%%

The friendly name for the **%%ACTION_NAME%%** action, and is used as a label in logs when the action runs.

Required: Yes

Default: %%ACTION_NAME%%

---

### Identifier

Identifies the action.

Required: Yes

Default: %%CODECATALYST_SPACE_LOWERCASE%%/%%ACTION_NAME_LOWERCASE%%@v1

---

### Environment.Name

The name of an existing environment that you want to associate with the action. For information about environments, see [Working with environments](https://docs.aws.amazon.com/codecatalyst/latest/userguide/deploy-environments.html) in the _Amazon CodeCatalyst User Guide_.

Required: No

Default: none

---

### Environment.Connections.Name

The name of the account connection. For information about account connections, see [Adding an AWS account to a space](https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-connect-account-create.html) in the _Amazon CodeCatalyst User Guide_.

Required: Yes

Default: none

---

### Environment.Connections.Role

The name of the IAM role that the **%%ACTION_NAME%%** action uses to access AWS resources. Make sure that the role includes:

The following permissions policy:

> **Warning**: Limit the permissions to the minimum required for the action to run successfully. Using a role with broader permissions might pose a security risk.

> **Note**: The example is for illustrative purposes, and will not work without additional configuration.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "cloudformation:DescribeStackEvents",
                "cloudformation:DescribeChangeSet",
                "cloudformation:DescribeStacks",
                "cloudformation:ListStackResources"
            ],
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": "arn:aws:iam::aws-account:role/cdk-*"
        }
    ]
}
```

The following custom trust policy:

```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "",
                "Effect": "Allow",
                "Principal": {
                    "Service":  [
                       "codecatalyst-runner.amazonaws.com",
                       "codecatalyst.amazonaws.com"
                     ]
                },
                "Action": "sts:AssumeRole"
            }
        ]
    }
```

Make sure that this role is added to your account connection.

For more information on creating IAM roles, see [Creating a role using a custom trust policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-custom.html) in the _AWS Identity and Access Management User Guide_.

---

### Inputs.Sources

If the action needs access to files stored in a source repository, specify the label of that source repository. Currently, the only supported label is `WorkflowSource`.

Required: Yes, if the action needs access to files stored in a source repository.

Default: WorkFlowSource

---

### Configuration.WhoToGreet

Name of the person, who we are greeting here.

Required: Yes

Default: none

---

### Configuration.HowToGreet

How to greet the person.

Required: No

Default: "Hello there,"

---

## How the "%%ACTION_NAME%%" action works

<!-- An optional section where you can describe behind-the-scenes processing, or extra details.
Example content follows. -->

The **%%ACTION_NAME%%** action works as follows:

-   At runtime, the action logs a greeting line composed of a configured name and message.

## Troubleshooting

<!-- An optional section where you can provide a link to troubleshooting information.
Example content follows. -->

For troubleshooting information, see [Troubleshooting problems with workflows](https://docs.aws.amazon.com/codecatalyst/latest/userguide/troubleshooting-workflows.html) in the _Amazon CodeCatalyst User Guide_.

## Additional resources

<!-- Add links to other places in your docs, as required. -->

-   [%%ACTION_NAME%% definition reference](https://www.mycompany.com/docs/ACTIONNAME-action-yaml) - Describes all **%%ACTION_NAME%%** action properties in detail.
-   [Workflow definition reference](https://www.mycompany.com/docs/ACTIONNAME-workflow-yaml) - Describes all available workflow definition file properties in detail.
-   [Tutorial](https://www.mycompany.com/docs/ACTIONNAME-action-tut) - Step-by-step instructions on getting the **%%ACTION_NAME%%** action running in an example scenario.
-   [Provide feedback](www.mycompany.com/feedback) - Submit a ticket against this action.
