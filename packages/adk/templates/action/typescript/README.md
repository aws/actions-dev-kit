# About the "ACTIONNAME" action
<!--
- Explain why your customers would use this action. 
- What does it offer? 
- What is the end goal of using this action? 
- If it is similar to another action, what makes it unique? 
- Example content follows.
--->

The **ACTIONNAME** action synthesizes and deploys your [AWS Cloud Development Kit (AWS CDK)](https://aws.amazon.com/cdk/) app into AWS. If your app already exists in AWS, the action updates it if necessary.


## Basic example
<!--
- Include a real-world example + an introduction explaining the example.    
- The example should show just the action YAML code, but...
- If the action relies on other actions, include the larger workflow YAML.  
- Example content follows. -->

The following example shows the **ACTIONNAME** action deploying an AWS CDK stack called `my-app-stack` into the `us-west-2` AWS Region. The AWS CDK source files are in a repository represented by the label, `WorkflowSource`.

> **Note**:  The example is for illustrative purposes, and will not work without additional configuration.


```
Name: codecatalyst-cdk-deploy-workflow
SchemaVersion: 1.0
...
Actions:      
  ACTIONNAME:
    Identifier: aws/cdk-deploy@v1
    Environment:
      Name: codecatalyst-cdk-deploy-environment
      Connections:
        - Name: codecatalyst-account-connection
          Role: codecatalyst-cdk-deploy-role
    Inputs:
      Sources:
        - WorkflowSource
    Configuration:
      StackName: my-app-stack
      Region: us-west-2
```
---

Configuration properties used in this example are described below.

> **Note**: For a full list of properties along with detailed descriptions, see [Additional resources](#additional-resources).

### ACTIONNAME

The friendly name for the **ACTIONNAME** action, and is used as a label in logs when the action runs.

Required: Yes

Default: CDKDeploy_nn

---

### ACTIONNAME.Identifier

Identifies the action. Do not change this property.

Required: Yes

Default: aws/cdk-deploy@v1 (do not change)

---

### ACTIONNAME.Environment.Name

The name of an existing environment that you want to associate with the action.  For information about environments, see [Working with environments](https://docs.aws.amazon.com/codecatalyst/latest/userguide/deploy-environments.html) in the *Amazon CodeCatalyst User Guide*.

Required: Yes

Default: none

---

### ACTIONNAME.Environment.Connections.Name

The name of the account connection.  For information about account connections, see [Adding an AWS account to a space](https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-connect-account-create.html) in the *Amazon CodeCatalyst User Guide*.

Required: Yes

Default: none

---

### ACTIONNAME.Environment.Connections.Role

The name of the IAM role that the **AWS CDK deploy** action uses to access AWS and deploy the AWS CDK application stack. Make sure that this role includes:

The following permissions policy:

> **Warning**: Limit the permissions to those shown in the following policy. Using a role with broader permissions might pose a security risk.
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

For more information on creating IAM roles, see [Creating a role using a custom trust policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-custom.html) in the *AWS Identity and Access Management User Guide*.

Required: Yes

Default: none

---

### ACTIONNAME.Inputs.Sources


If your AWS CDK app is stored in a source repository, specify the label of that source repository. Currently, the only supported label is `WorkflowSource`.

Required: Yes, if the AWS CDK app you want to deploy is stored in a source repository.

Default: WorkFlowSource

---

### ACTIONNAME.Configuration.StackName

The name of your AWS CDK app stack, as it appears in the entrypoint file in your AWS CDK app's bin directory.

Required: Yes

Default: none

---

### ACTIONNAME.Configuration.Region

The AWS Region into which the AWS CDK application stack will be deployed.

Required: Yes

Default: none

---

## How the "ACTIONNAME" action works
<!-- An optional section where you can describe behind-the-scenes processing, or extra details. 
Example content follows. -->

The **ACTIONNAME** action works as follows:

- At runtime, the action installs the AWS CDK Toolkit to the CodeCatalyst build image. The toolkit is necessary to run the `cdk deploy` command, next.
- The action runs the `cdk deploy` command, which synthesizes and deploys your AWS CDK app into AWS. For more information on this command, see the [AWS CDK Toolkit (cdk command)](https://docs.aws.amazon.com/cdk/v2/guide/cli.html) topic in the *AWS Cloud Development Kit (AWS CDK) Developer Guide*.

## Troubleshooting
<!-- An optional section where you can provide a link to troubleshooting information. 
Example content follows. -->
For troubleshooting information, see [Troubleshooting problems with workflows](https://docs.aws.amazon.com/codecatalyst/latest/userguide/troubleshooting-workflows.html) in the *Amazon CodeCatalyst User Guide*.

## Additional resources
<!-- Add links to other places in your docs, as required. -->

- [ACTIONNAME definition reference](https://www.mycompany.com/docs/ACTIONNAME-action-yaml) - Describes all **ACTIONNAME** action properties in detail.
- [Workflow definition reference](https://www.mycompany.com/docs/ACTIONNAME-workflow-yaml) - Describes all available workflow definition file properties in detail.
- [Tutorial](https://www.mycompany.com/docs/ACTIONNAME-action-tut) - Step-by-step instructions on getting the **ACTIONNAME** action running in an example scenario.
- [Provide feedback](www.mycompany.com/feedback) - Submit a ticket against this action.

