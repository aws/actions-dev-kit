export interface Model {
    SchemaVersion: string;
    Name?: string;
    Id?: string;
    Version?: string;
    Description?: string;
    Author?: string;
    Configuration?: Configuration;
    Environment?: boolean;
    Sources?: boolean;
    Runs?: RunConfig;
}

export interface Configuration {
    inputs: Map<string, Input>;
}

export interface Input {
    Description: string;
    Required: boolean;
    DisplayName: string;
    Type: string;
    Default: boolean;
}

export interface RunConfig {
    Using: string;
    Main: string;
}
