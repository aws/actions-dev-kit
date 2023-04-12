# `@aws/codecatalyst-adk`
## Purpose
ADK offers action developers a command-line interface (CLI) to kick off action development.

## Usage
The following three commands are offered:

### adk init 
Generates action definition file in the current directory (.codecatalyst/actions/action.yml by default).

Example:
```
adk init --lang typescript --space MySpace --proj <CODECATALYST-PROJECT-NAME> --repo <CODECATALYST-REPO-NAME> --action <ACTION-NAME>
```

### adk bootstrap 
Bootstraps action project in the current folder from action.yml file. Bootstrap command generates source code, CI/CD workflow configuration, config files, and a basic readme file.

Example:
```
adk bootstrap
```

### adk validate 
Validates action project.

Example:
```
adk validate
```
