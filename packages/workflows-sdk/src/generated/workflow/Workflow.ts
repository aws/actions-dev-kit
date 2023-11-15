/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Trigger = PushTrigger | PullRequestTrigger | ScheduleTrigger;
export type PullRequestEventType = "DRAFT" | "OPEN" | "CLOSED" | "MERGED" | "REVISION";
/**
 * An action in a workflow
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[A-Za-z0-9_-]+$".
 */
export type Action = BuildAction | GitHubActionRunner | ManagedTestAction;
/**
 * Image to run in the container
 */
export type BuildImage = string;
/**
 * Source of the Image
 */
export type BuildRegistry = string;
/**
 * Commands for the build action
 *
 * @minItems 0
 * @maxItems 256
 */
export type BuildSteps = BuildStep[];
/**
 * @minItems 0
 * @maxItems 50
 */
export type DependsOn = string[];
export type Compute =
  | {
      Type: "EC2";
      Fleet?:
        | string
        | (
            | "Linux.x86-64.Large"
            | "Linux.x86-64.XLarge"
            | "Linux.x86-64.2XLarge"
            | "Linux.Arm64.Large"
            | "Linux.Arm64.XLarge"
            | "Linux.Arm64.2XLarge"
            | "Windows.x86-64.XLarge"
            | "Windows.x86-64.2XLarge"
          );
      [k: string]: unknown;
    }
  | {
      Type: "LAMBDA";
      /**
       * On-demand fleet
       */
      Fleet?: "Linux.x86-64.Large" | "Linux.x86-64.XLarge" | "Linux.Arm64.Large" | "Linux.Arm64.XLarge";
      [k: string]: unknown;
    };
export type Timeout = number;
/**
 * @minItems 1
 * @maxItems 15
 */
export type Scopes = string[];
/**
 * @minItems 0
 * @maxItems 256
 */
export type OutputVariables = string[];
/**
 * Format of the report
 */
export type ReportFormat =
  | "ESLINTJSON"
  | "PYLINTJSON"
  | "CUCUMBERJSON"
  | "JUNITXML"
  | "NUNIT3XML"
  | "NUNITXML"
  | "TESTNGXML"
  | "VISUALSTUDIOTRX"
  | "COBERTURAXML"
  | "CLOVERXML"
  | "SIMPLECOV"
  | "JACOCOXML"
  | "LCOV"
  | "SARIFSCA"
  | "SARIFSA"
  | "CucumberJson"
  | "JunitXml"
  | "NunitXml"
  | "Nunit3Xml"
  | "TestngXml"
  | "VisualStudioTRX"
  | "CoberturaXml"
  | "CloverXml"
  | "SimpleCov"
  | "JacocoXml";
export type OutputArtifacts =
  | {
      Name?: string;
      /**
       * @minItems 1
       * @maxItems 256
       */
      Files?: string[];
    }[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[A-Za-z0-9_]+$".
       */
      [k: string]: {
        /**
         * @minItems 1
         * @maxItems 256
         */
        Files?: string[];
      };
    };
/**
 * @minItems 0
 * @maxItems 5
 */
export type InputArtifacts = string[];
/**
 * @minItems 0
 * @maxItems 1
 */
export type InputSources = string[];
export type InputVariables =
  | {
      Name?: string;
      Value?: string;
    }[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[A-Za-z0-9-_]+$".
       */
      [k: string]: string;
    };
/**
 * List of Github action steps to run
 *
 * @minItems 0
 * @maxItems 256
 */
export type GitHubActionRunnerSteps = GitHubActionRunnerStep[];
/**
 * Commands for the build action
 *
 * @minItems 0
 * @maxItems 256
 */
export type ManagedTestSteps = {
  /**
   * Command string
   */
  Run?: string;
}[];

export interface Workflow {
  /**
   * The name of the workflow
   */
  Name: string;
  SchemaVersion: "1.0" | 1;
  /**
   * The run mode the workflow uses
   */
  RunMode?: "PARALLEL" | "QUEUED" | "SUPERSEDED";
  /**
   * The triggers the workflow uses
   */
  Triggers?: Trigger[];
  /**
   * The actions for the workflow
   */
  Actions: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[A-Za-z0-9_-]+$".
     */
    [k: string]: Action | ActionGroup;
  };
  [k: string]: unknown;
}
export interface PushTrigger {
  Type: "PUSH";
  Branches?: string[];
  FilesChanged?: string[];
}
export interface PullRequestTrigger {
  Type: "PULLREQUEST";
  Events: [PullRequestEventType];
  Branches?: string[];
  FilesChanged?: string[];
}
export interface ScheduleTrigger {
  Type: "SCHEDULE";
  /**
   * A CRON expression representing the schedule the workflow runs on
   */
  Expression: {
    [k: string]: unknown;
  };
  Branches?: string[];
}
export interface BuildAction {
  Identifier: "aws/build@v1";
  Configuration: BuildConfiguration;
  DependsOn?: DependsOn;
  Environment?: Environment;
  Compute?: Compute;
  Timeout?: Timeout;
  Caching?: BuildActionCaching;
  Packages?: Packages;
  Outputs?: {
    OutputVariables?: OutputVariables;
    AutoDiscoverReports?: AutoDiscoveryReports;
    Reports?: Reports;
    OutputArtifacts?: OutputArtifacts;
  };
  Inputs?: {
    InputArtifacts?: InputArtifacts;
    InputSources?: InputSources;
    InputVariables?: InputVariables;
  };
}
export interface BuildConfiguration {
  Container?: BuildContainer;
  Steps: BuildSteps;
}
/**
 * The container to run the build
 */
export interface BuildContainer {
  Image?: BuildImage;
  Registry?: BuildRegistry;
}
/**
 * Command for the build action
 */
export interface BuildStep {
  /**
   * Command string
   */
  Run?: string;
}
export interface Environment {
  /**
   * Name of the environment
   */
  Name: string;
  /**
   * @minItems 1
   * @maxItems 1
   */
  Connections: {
    Name: string;
    Role: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
export interface BuildActionCaching {
  FileCaching?: FileCaching;
}
export interface FileCaching {
  /**
   * This interface was referenced by `FileCaching`'s JSON-Schema definition
   * via the `patternProperty` "^[A-Za-z0-9\-_.]+$".
   */
  [k: string]: {
    Path: string;
    /**
     * @minItems 1
     * @maxItems 5
     */
    RestoreKeys?: string[];
  };
}
export interface Packages {
  NpmConfiguration?: {
    /**
     * @minItems 1
     * @maxItems 50
     */
    PackageRegistries?: PackagesRegistry[];
  };
}
export interface PackagesRegistry {
  PackagesRepository: string;
  Scopes?: Scopes;
}
export interface AutoDiscoveryReports {
  /**
   * Flag to determine if Auto Discovery for reports is enabled
   */
  Enabled?: boolean;
  /**
   * Array of paths to exclude while exploring to auto discover reports
   *
   * @minItems 0
   * @maxItems 1000
   */
  ExcludePaths?: string[];
  /**
   * Array of paths to explore to auto discover reports
   *
   * @minItems 0
   * @maxItems 1000
   */
  IncludePaths?: string[];
  /**
   * Prefix for auto discovered report names
   */
  ReportNamePrefix?: string;
  /**
   * SuccessCriteria for auto discovered reports
   */
  SuccessCriteria?: {
    BranchCoverage?: number;
    LineCoverage?: number;
    PassRate?: number;
    Vulnerabilities?: AutoDiscoveryReportSeverityCounter;
    StaticAnalysisBug?: AutoDiscoveryReportSeverityCounter;
    StaticAnalysisSecurity?: AutoDiscoveryReportSeverityCounter;
    StaticAnalysisQuality?: AutoDiscoveryReportSeverityCounter;
    StaticAnalysisCodeSmell?: AutoDiscoveryReportSeverityCounter;
    StaticAnalysisOther?: AutoDiscoveryReportSeverityCounter;
    StaticAnalysisFinding?: AutoDiscoveryReportSeverityCounter;
  };
}
/**
 * Composite threshold consisting of a severity level and a counter.
 */
export interface AutoDiscoveryReportSeverityCounter {
  /**
   * Severity level
   */
  Severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFORMATIONAL";
  Number?: number;
}
/**
 * Map of reports
 */
export interface Reports {
  /**
   * Report details
   */
  [k: string]: {
    Format: ReportFormat;
    /**
     * SuccessCriteria for Report
     */
    SuccessCriteria?: {
      PassRate?: number;
      LineCoverage?: number;
      BranchCoverage?: number;
      Vulnerabilities?: ReportSeverityCounter;
      StaticAnalysisBug?: ReportSeverityCounter;
      StaticAnalysisSecurity?: ReportSeverityCounter;
      StaticAnalysisQuality?: ReportSeverityCounter;
      StaticAnalysisCodeSmell?: ReportSeverityCounter;
      StaticAnalysisOther?: ReportSeverityCounter;
      StaticAnalysisFinding?: ReportSeverityCounter;
    };
    /**
     * List of paths of report
     */
    IncludePaths: string[];
    /**
     * List of paths of report
     */
    ExcludePaths?: string[];
  };
}
/**
 * Composite threshold consisting of a severity level and a counter.
 */
export interface ReportSeverityCounter {
  /**
   * Severity level
   */
  Severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFORMATIONAL";
  Number?: number;
}
export interface GitHubActionRunner {
  Identifier: "aws/github-actions-runner@v1";
  Configuration: GitHubActionRunnerConfiguration;
  DependsOn?: DependsOn;
  Environment?: EnvironmentWithoutConnection;
  Compute?: Compute;
  Timeout?: Timeout;
  Caching?: Caching;
  Outputs?: {
    OutputVariables?: OutputVariables;
    AutoDiscoverReports?: AutoDiscoveryReports;
    Reports?: Reports;
    OutputArtifacts?: OutputArtifacts;
  };
  Inputs?: {
    InputArtifacts?: InputArtifacts;
    InputSources?: InputSources;
    InputVariables?: InputVariables;
  };
}
export interface GitHubActionRunnerConfiguration {
  Steps: GitHubActionRunnerSteps;
}
/**
 * Definition of a Github action step
 */
export interface GitHubActionRunnerStep {
  id?: string;
  if?: string;
  name?: string;
  uses?: string;
  with?: {
    [k: string]: unknown;
  };
  run?: string;
  env?: {
    [k: string]: string | boolean | number;
  };
  "continue-on-error"?: boolean;
  "timeout-minutes"?: number;
  "working-directory"?: string;
  shell?: string;
}
export interface EnvironmentWithoutConnection {
  /**
   * Name of the environment
   */
  Name: string;
  /**
   * @minItems 1
   * @maxItems 1
   */
  Connections?: {
    Name: string;
    Role: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
export interface Caching {
  FileCaching?: FileCaching;
}
export interface ManagedTestAction {
  Identifier: "aws/managed-test@v1";
  Configuration: {
    Container?: ManagedTestContainer;
    Steps: ManagedTestSteps;
  };
  DependsOn?: DependsOn;
  Environment?: EnvironmentWithoutConnection;
  Compute?: Compute;
  Timeout?: Timeout;
  Caching?: TestActionCaching;
  Packages?: Packages;
  Outputs?: {
    OutputVariables?: OutputVariables;
    AutoDiscoverReports?: AutoDiscoveryReports;
    Reports?: Reports;
    OutputArtifacts?: OutputArtifacts;
  };
  Inputs?: {
    InputArtifacts?: InputArtifacts;
    InputSources?: InputSources;
    InputVariables?: InputVariables;
  };
}
/**
 * The container to run the build
 */
export interface ManagedTestContainer {
  /**
   * Image to run in the container
   */
  Image?: string;
  /**
   * Source of the Image
   */
  Registry?: string;
}
export interface TestActionCaching {
  FileCaching?: FileCaching;
}
/**
 * A group of actions
 */
export interface ActionGroup {
  DependsOn?: DependsOn;
  /**
   * The actions in the group
   */
  Actions?: {
    [k: string]: Action;
  };
  [k: string]: unknown;
}
