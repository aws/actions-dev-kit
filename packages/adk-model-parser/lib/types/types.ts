export interface Model {
  schemaVersion: string;
  name?: string;
  id?: string;
  version?: string;
  description?: string;
  author?: string;
  configuration?: Configuration;
  environment?: boolean;
  sources?: boolean;
  runs?: RunConfig;
}

export interface Configuration {
  inputs: Map<string, Input>;
}

export interface Input {
  description: string;
  required: boolean;
  displayName: string;
  type: string;
  default: boolean;
}

export interface RunConfig {
  using: string;
  main: string;
}
