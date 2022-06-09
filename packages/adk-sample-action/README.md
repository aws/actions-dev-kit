# LambdaInvokeAction
* This action synchronously invokes a Lambda Function in the customer's AWS Account and gets the response.

## Get Started
### Inputs
#### Environment, Connection, Role
* This triplet provides the AWS account credentials. 
* The selected role should allow the action to invoke aws lambda function in the customer's account.
* For more information, see the Quokka documentation.
#### Function
* This is a required field which customer has to provide for using this action.
* It represents either the Name or the ARN of the lambda function which the customer intends to invoke.
#### AWSRegion
* This is a required field which customer has to provide for using this action.
* It represents the AWS region of the lambda function.
#### RequestPayload
* This is an optional field.
* It represents the JSON string that you want to provide to your lambda function as input.
* You cannot provide this field if RequestPayloadFile is provided.
* It would default to "".
#### RequestPayloadFile
* This is an optional field.
* It references the entire path of the file that has the JSON payload.
* You cannot provide this field if RequestPayload is provided.
* It would default to "".
#### ContinueOnError
* This is an optional flag.
* It decides if the action should succeed when the Lambda function executed returns an error.
* It would default to false.
#### LogType
* This is an optional field.
* Set it to "Tail" to return the tail logs of the executed Lambda function. Set it to None otherwise.
* It would default to "Tail".
#### ResponseFilters
* This is an optional field.
* It represents a hashmap of key-value pairs where the key is the name of the output variable that the user wants to export from this action. And value is the JQ query to be applied to the Lambda response payload to extract the corresponding value.
* The action would fail if the JQ query provided is invalid.

Consider the following as the response payload received from invoking a lambda function:
```markdown
responsePayload = {
  "name": "Jack",
  "location": "Seattle",
  "organization": {
    "company": "Amazon",
    "team": "AWS"
  }
}
```

An example for response filters:
```markdown
ResponseFilters: '{"name": ".name", "company": ".organization.company"}'
```

The action would take in the response filters and apply the jq expression on the response payload for each key in the response filters and would get the value and assign it to the key. So here,
```markdown
name = Jack
comapny = Amazon
```

These would be set as output variables by the action so that the workflow author could use these variables in subsequent actions.




### Outputs
The customer can expect following types of outputs from the action.
* The response received from invoking a lambda function would be saved in a file "lambda-response.json" and would be emitted as an output artifact by the action.
* Customer can also see the entire response (along with lambda invoke logs, if LogType set to Tail) in action logs.
* If the customer doesn't provide response filters as an input to the action, then the action would output all the top level keys of the response payload received on invoking the lambda function. For example,
```markdown
responsePayload = {
  "name": "Jack",
  "location": "Seattle",
  "organization": {
    "company": "Amazon",
    "team": "AWS"
  }
}
```

Output Variables Emitted By Action
```markdown
name = Jack
location = Seattle
organization = '{"company": "Amazon", "team": "AWS"}'
```
* If the customer has provided response filters, then the action would output variables specified as keys in the response filters. For example,
```markdown
responsePayload = {
  "name": "Jack",
  "location": "Seattle",
  "organization": {
    "company": "Amazon",
    "team": "AWS"
  }
}
```
An example for response filters:
```markdown
ResponseFilters: '{"name": ".name", "company": ".organization.company"}'
```

Output Variables Emitted By Action
```markdown
name = Jack
company = Amazon
```

## Workflow Usage

```markdown
Example Response Payload
responsePayload = {
  "name": "Jack",
  "location": "Seattle",
  "organization": {
    "company": "Amazon",
    "team": "AWS"
  }
}
```

#### Scenario: With Response Filters 

```markdown
Name: Lambda_Invoke_Action_Workflow
SchemaVersion: 1.0
Triggers:
- Type: Push
  Branches:
    - main
Actions:
  LambdaInvokeAction:
    Identifier: aws/lambda-invoke@v1
    Inputs:
      Sources:
        - WorkflowSource
    Environment:
      Name: <your-environment-name>
      Connections:
        - Name: <your-connection-name>
          Role: <your-role-name>
    Outputs:
      Artifacts:
        - Name: lambda_artifacts
          Files:
            - lambda-response.json
    Configuration:
      Parameters:
        LambdaFunction: 'displayInfo'
        AwsRegion: 'us-west-2'
        RequestPayloadFile: 'request-payload.json'
        ResponseFilters: '{"name": ".name", "company": ".organization.company"}'
  TestAction:
    Identifier: aws/github-actions-runner@v1
    Inputs:
      Artifacts:
        - lambda_artifacts
    Configuration:
      Steps:
        - name: Access Name
          run: echo ${LambdaInvokeAction.name}
        - name: Access Company
          run: echo ${LambdaInvokeAction.company}
```

#### Scenario: Without Response Filters
```markdown
Name: Lambda_Invoke_Action_Workflow
SchemaVersion: 1.0
Triggers:
- Type: Push
  Branches:
    - main
Actions:
  LambdaInvokeAction:
    Identifier: aws/lambda-invoke@v1
    Inputs:
      Sources:
        - WorkflowSource
    Environment:
      Name: <your-environment-name>
      Connections:
        - Name: <your-connection-name>
          Role: <your-role-name>
    Outputs:
      Artifacts:
        - Name: lambda_artifacts
          Files:
            - lambda-response.json
    Configuration:
      Parameters:
        LambdaFunction: 'displayInfo'
        AwsRegion: 'us-west-2'
        RequestPayload: '{"name": "John", "location": "Seattle", "company": "AWS", "team": "AEF"}'
  TestAction:
    Identifier: aws/github-actions-runner@v1
    Inputs:
      Artifacts:
        - lambda_artifacts
    Configuration:
      Steps:
        - name: Access Name
          run: echo ${LambdaInvokeAction.name}
        - name: Access Company
          run: echo ${LambdaInvokeAction.company}
        - name: Access Organization
          run: echo ${LambdaInvokeAction.organization}
```
#### Constraints
* The Lambda function to be invoked should accept the request payload in JSON format.
* The Lambda function to be invoked should return the response payload in JSON format.
