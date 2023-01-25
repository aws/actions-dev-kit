
/**
 * action.yml model interface
 * Used by bootstrap and validate ADK CLI commands
 */
export interface Model {
    SchemaVersion: string;
    Name?: string;
    Id?: string;
    Version?: string;
    Description?: string;
    Author?: string;
    Configuration?: Configuration;
    Environment?: Environment;
    Sources?: Sources;
    Runs?: RunConfig;
}

/**
 * Action configuration. Consists of an array of inputs
 */
export interface Configuration {
    [index: string]: Input;
}

/**
 * Action configuration input
 */
export interface Input {
    Description: string;
    Required: boolean;
    DisplayName: string;
    Type: string;
    Default: string;
}

/**
 * A boolean to indicate the action requires CI/CD Environment to be configured to run successfully
 * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/deploy-environments.html to lear more about environments
 */
export interface Environment {
    Required: boolean;
}

/**
 * A boolean to indicate whether the action requires Sources. Set to true when the parameter is required.
 * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-sources.html to lear more about sources
 */
export interface Sources {
    Required: boolean;
}

/**
 * Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed.
 * See https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-working-runs.html to lear more about run configs
 */
export interface RunConfig {
    Using: string;
    Main: string;
}
