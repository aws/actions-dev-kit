# `@codecatalyst/adk`
## Purpose
"ADK" offers action developers command-line interface to kick off action development

## Usage
It offers 3 commands:

### adk init 
Generates action definition file in the current directory (action.yml by default)

Example:
```
adk init --lang typescript --space MySpace --proj <CODECATALYST-PROJECT-NAME> --repo <CODECATALYST-REPO-NAME> --action <ACTION-NAME>
```

### adk bootstrap 
Bootstraps action project in the current folder from action.yml file. Bootstrap command generates source code, CI/CD workflow configuration, config files, and basic readme file.

Example:
```
adk bootstrap -f action.yml
```

### adk validate 
Validates action project

Example:
```
adk validate
```
