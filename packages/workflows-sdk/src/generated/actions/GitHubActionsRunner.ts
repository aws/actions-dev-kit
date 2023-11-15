/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * List of Github action steps to run
 *
 * @minItems 0
 * @maxItems 256
 */
export type GitHubActionRunnerSteps = GitHubActionRunnerStep[];
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
