
/**
 * The action.yml model interface used by bootstrap and validation of ADK CLI commands.
 */
export interface Model {
    SchemaVersion: string;
    Name?: string;
    Version?: string;
    Description?: string;
    Configuration?: Configuration;
    Environment?: Environment;
    Sources?: Sources;
    Runs?: RunConfig;
}

/**
 * Action configuration. Consists of an array of inputs.
 */
export interface Configuration {
    [index: string]: Input;
}

/**
 * Action configuration input.
 */
export interface Input {
    Description: string;
    Required: boolean;
    DisplayName?: string;
    Type?: string | boolean | number;
    Default?: string | boolean | number;
}

/**
 * A boolean to indicate the action requires CI/CD Environment to be configured to run successfully.
 * To learn more about environments, see https://docs.aws.amazon.com/codecatalyst/latest/userguide/deploy-environments.html.
 */
export interface Environment {
    Required: boolean;
    Connection?: Connection;
}

/**
 * A boolean to indicate the action requires an AWS Account Connection and a default role to be associated to the CI/CD Environment to be configured to run successfully.
 * To learn more about environments, see https://docs.aws.amazon.com/codecatalyst/latest/userguide/deploy-environments.html.
 */
export interface Connection {
    Required: boolean;
}

/**
 * A boolean to indicate whether the action requires sources. Set to true when the parameter is required.
 * To learn more about sources, see https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-sources.html.
 */
export interface Sources {
    Required: boolean;
}

/**
 * Specifies whether the action is a JavaScript action, a composite action, or a Docker container action and how the action is executed.
 * To learn more about run configurations, see https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-working-runs.html.
 */
export interface RunConfig {
    Using: string;
    Main: string;
}
