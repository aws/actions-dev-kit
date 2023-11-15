/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

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
export interface TestActionCaching {
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
