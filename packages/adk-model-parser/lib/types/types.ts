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

export interface Environment {
    Required: boolean;
}

export interface Sources {
    Required: boolean;
}

export interface Configuration {
    [index: string]: Input;
}

export interface Input {
    Description: string;
    Required: boolean;
    DisplayName: string;
    Type: string;
    Default: string;
}

export interface RunConfig {
    Using: string;
    Main: string;
}
