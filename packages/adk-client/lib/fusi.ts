/* DO NOT EDIT FILE MANUALLY. USE generate:types:gql COMMAN TO UPDATE TYPES*/
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
    Long: any;
};


export type AcceptOrganizationInvitationOutput = {
    __typename?: 'AcceptOrganizationInvitationOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    timestamp: Scalars['String'];
    inviterUserName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeEmailAddress: Scalars['String'];
    inviteeDisplayName?: Maybe<Scalars['String']>;
    signupEmailAddress?: Maybe<Scalars['String']>;
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InvitationStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `OrganizationRoles`
   * * **Constraints**
   *   * Required
   */
    inviteeRole: Scalars['String'];
};

export type AcceptOrganizationInvitationRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    organizationInvitationId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    signupEmailAddress: Scalars['String'];
};

export type AcceptProjectInvitationOutput = {
    __typename?: 'AcceptProjectInvitationOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    projectInvitation: ProjectInvitation;
};

export type AcceptProjectInvitationRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    projectInvitationId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    signupEmailAddress: Scalars['String'];
};

export type AccessTokenSummary = {
    __typename?: 'AccessTokenSummary';
    /**
   * * **Simple Shape:** `AccessTokenId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 36
   */
    accessTokenId: Scalars['String'];
    /**
   * * **Simple Shape:** `AccessTokenName`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    expires: Scalars['String'];
};

export type AccountConnectionInfo = {
    __typename?: 'AccountConnectionInfo';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    roleName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    roleId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    accountConnectionName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    accountConnectionId?: Maybe<Scalars['String']>;
};

export type ActionRunAccountConnection = {
    __typename?: 'ActionRunAccountConnection';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    roleName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    accountConnectionName: Scalars['String'];
};

export type ActionRunCommand = {
    __typename?: 'ActionRunCommand';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `ActionRunCommandStatus` */
    status?: Maybe<Scalars['String']>;
};

export type ActionRunComputeDetails = {
    __typename?: 'ActionRunComputeDetails';
    /**
   * * **Simple Shape:** `ActionRunEnvironmentType`
   * * **Constraints**
   *   * Required
   */
    environmentType: Scalars['String'];
    /**
   * * **Simple Shape:** `ActionRunComputeType`
   * * **Constraints**
   *   * Required
   */
    computeType: Scalars['String'];
    computeFleetName?: Maybe<Scalars['String']>;
};

export type ActionRunConnectionDetails = {
    __typename?: 'ActionRunConnectionDetails';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    environmentName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 10
   */
    connections?: Maybe<Array<Maybe<ActionRunAccountConnection>>>;
};

export type ActionRunEnvironment = {
    __typename?: 'ActionRunEnvironment';
    timeoutInSeconds?: Maybe<Scalars['Int']>;
    variables?: Maybe<Array<Maybe<ActionRunEnvironmentVariable>>>;
    containerImage?: Maybe<Scalars['String']>;
};

export type ActionRunEnvironmentVariable = {
    __typename?: 'ActionRunEnvironmentVariable';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type ActionRunPhaseContext = {
    __typename?: 'ActionRunPhaseContext';
    message?: Maybe<Scalars['String']>;
    statusCode?: Maybe<Scalars['String']>;
};

export type ActionRunPhaseMetadata = {
    __typename?: 'ActionRunPhaseMetadata';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    durationInSeconds?: Maybe<Scalars['Int']>;
    /** * **Simple Shape:** `ActionRunPhaseStatus` */
    status?: Maybe<Scalars['String']>;
    contexts?: Maybe<Array<Maybe<ActionRunPhaseContext>>>;
    commands?: Maybe<Array<Maybe<ActionRunCommand>>>;
};

export type ActionRunReport = {
    __typename?: 'ActionRunReport';
    format?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
    successThresholds?: Maybe<ActionRunSuccessThresholds>;
};

export type ActionRunSuccessThresholds = {
    __typename?: 'ActionRunSuccessThresholds';
    lineCoverage?: Maybe<Scalars['Float']>;
    branchCoverage?: Maybe<Scalars['Float']>;
    passRate?: Maybe<Scalars['Float']>;
};

export type ActionRunSummaryData = {
    __typename?: 'ActionRunSummaryData';
    /**
   * * **Simple Shape:** `ActionRunSummaryDataType`
   * * **Constraints**
   *   * Required
   */
    summaryType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    summaryMessage: ActionRunSummaryDataMessage;
};

export type ActionRunSummaryDataMessage = {
    __typename?: 'ActionRunSummaryDataMessage';
    /**
   * * **Constraints**
   *   * Required
   */
    text: Scalars['String'];
    /**
   * * **Simple Shape:** `ActionRunSummaryDataMessageLevel`
   * * **Constraints**
   *   * Required
   */
    level: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    label: Scalars['String'];
};

export type ActionState = {
    __typename?: 'ActionState';
    name?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    actionRunId?: Maybe<Scalars['String']>;
    actionRunSummary?: Maybe<Scalars['String']>;
    actionRunSummaryData?: Maybe<ActionRunSummaryData>;
    startTime?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    inputArtifacts?: Maybe<Array<Maybe<WorkflowRunActionArtifact>>>;
    outputArtifacts?: Maybe<Array<Maybe<WorkflowRunActionArtifact>>>;
    outputVariables?: Maybe<Array<Maybe<WorkflowRunActionOutputVariable>>>;
};

export type AddUserToRoleInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type AddUserToRoleMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type AddUserToRoleMigrationOutput = {
    __typename?: 'AddUserToRoleMigrationOutput';
    friendlyArn?: Maybe<Scalars['String']>;
};

export type AddUserToRoleOutput = {
    __typename?: 'AddUserToRoleOutput';
    friendlyArn?: Maybe<Scalars['String']>;
};

export type AdditionalProperty = {
    __typename?: 'AdditionalProperty';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    value: Scalars['String'];
};

export type AdditionalPropertyMigration = {
    __typename?: 'AdditionalPropertyMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    value: Scalars['String'];
};

export type AnalysisCounter = {
    __typename?: 'AnalysisCounter';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    count: Scalars['Int'];
};

export type AnalysisCounterMigration = {
    __typename?: 'AnalysisCounterMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    count: Scalars['Int'];
};

export type AnalysisFindingEstimate = {
    __typename?: 'AnalysisFindingEstimate';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    effortUnit?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    effortValue?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    debtUnit?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    debtValue?: Maybe<Scalars['String']>;
};

export type AnalysisFindingLocation = {
    __typename?: 'AnalysisFindingLocation';
    physicalLocation?: Maybe<AnalysisFindingPhysicalLocation>;
    logicalLocation?: Maybe<AnalysisFindingLogicalLocation>;
};

export type AnalysisFindingLocationMigration = {
    __typename?: 'AnalysisFindingLocationMigration';
    physicalLocation?: Maybe<AnalysisFindingPhysicalLocationMigration>;
    logicalLocation?: Maybe<AnalysisFindingLogicalLocationMigration>;
};

export type AnalysisFindingLogicalLocation = {
    __typename?: 'AnalysisFindingLogicalLocation';
    /**
   * * **Constraints**
   *   * Required
   */
    fullyQualifiedName: Scalars['String'];
};

export type AnalysisFindingLogicalLocationMigration = {
    __typename?: 'AnalysisFindingLogicalLocationMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    fullyQualifiedName: Scalars['String'];
};

export type AnalysisFindingMessage = {
    __typename?: 'AnalysisFindingMessage';
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 3000
   */
    content: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
};

export type AnalysisFindingMessageMigration = {
    __typename?: 'AnalysisFindingMessageMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    content: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
};

export type AnalysisFindingPhysicalLocation = {
    __typename?: 'AnalysisFindingPhysicalLocation';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    startCoordinate?: Maybe<AnalysisFindingSourceCoordinate>;
    endCoordinate?: Maybe<AnalysisFindingSourceCoordinate>;
};

export type AnalysisFindingPhysicalLocationMigration = {
    __typename?: 'AnalysisFindingPhysicalLocationMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    startCoordinate?: Maybe<AnalysisFindingSourceCoordinateMigration>;
    endCoordinate?: Maybe<AnalysisFindingSourceCoordinateMigration>;
};

export type AnalysisFindingRange = {
    __typename?: 'AnalysisFindingRange';
    /**
   * * **Constraints**
   *   * Required
   */
    to: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    from: Scalars['Int'];
};

export type AnalysisFindingRecommendation = {
    __typename?: 'AnalysisFindingRecommendation';
    fix?: Maybe<AnalysisFindingRange>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 1024
   */
    fixType?: Maybe<Scalars['String']>;
    message?: Maybe<AnalysisFindingMessage>;
};

export type AnalysisFindingRule = {
    __typename?: 'AnalysisFindingRule';
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 1024
   */
    ruleId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 1024
   */
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<AnalysisFindingMessage>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 3000
   */
    helpUrl?: Maybe<Scalars['String']>;
};

export type AnalysisFindingRuleMigration = {
    __typename?: 'AnalysisFindingRuleMigration';
    ruleId?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<AnalysisFindingMessageMigration>;
    helpUrl?: Maybe<Scalars['String']>;
};

export type AnalysisFindingSeverity = {
    __typename?: 'AnalysisFindingSeverity';
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    originalSeverity: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    mappedSeverity: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityValue: Scalars['Int'];
};

export type AnalysisFindingSeverityMigration = {
    __typename?: 'AnalysisFindingSeverityMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    originalSeverity: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverity: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityValue: Scalars['Int'];
};

export type AnalysisFindingSourceCoordinate = {
    __typename?: 'AnalysisFindingSourceCoordinate';
    /**
   * * **Constraints**
   *   * Required
   */
    lineNumber: Scalars['Int'];
    columnNumber?: Maybe<Scalars['Int']>;
};

export type AnalysisFindingSourceCoordinateMigration = {
    __typename?: 'AnalysisFindingSourceCoordinateMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    lineNumber: Scalars['Int'];
    columnNumber?: Maybe<Scalars['Int']>;
};

export type AnswerInformation = {
    __typename?: 'AnswerInformation';
    answerId?: Maybe<Scalars['String']>;
    userInput?: Maybe<Scalars['String']>;
};

export type AnswerInformationInput = {
    answerId?: Maybe<Scalars['String']>;
    userInput?: Maybe<Scalars['String']>;
};

export type ArtifactPackageOriginConfiguration = {
    __typename?: 'ArtifactPackageOriginConfiguration';
    restrictions?: Maybe<ArtifactPackageOriginRestrictions>;
};

export type ArtifactPackageOriginRestrictions = {
    __typename?: 'ArtifactPackageOriginRestrictions';
    /** * **Simple Shape:** `ArtifactPackageAllowPublish` */
    publish?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `ArtifactPackageAllowUpstream` */
    upstream?: Maybe<Scalars['String']>;
};

export type ArtifactPackageOriginRestrictionsInput = {
    /** * **Simple Shape:** `ArtifactPackageAllowPublish` */
    publish?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `ArtifactPackageAllowUpstream` */
    upstream?: Maybe<Scalars['String']>;
};

export type ArtifactPackageSummary = {
    __typename?: 'ArtifactPackageSummary';
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionAsset = {
    __typename?: 'ArtifactPackageVersionAsset';
    name?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Long']>;
    hashes?: Maybe<Array<Maybe<ArtifactPackageVersionAssetHashes>>>;
};

export type ArtifactPackageVersionAssetHashes = {
    __typename?: 'ArtifactPackageVersionAssetHashes';
    key: Scalars['String'];
    value: Scalars['String'];
};

export type ArtifactPackageVersionBatchActionSummary = {
    __typename?: 'ArtifactPackageVersionBatchActionSummary';
    /**
   * * **Simple Shape:** `ArtifactPackageVersionRevisionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    revision?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    status?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionDependency = {
    __typename?: 'ArtifactPackageVersionDependency';
    /**
   * * **Simple Shape:** `ArtifactPackageVersionDependencyType`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    type?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionRequirement`
   * * **Constraints**
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    versionRequirement?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionEntryPoint = {
    __typename?: 'ArtifactPackageVersionEntryPoint';
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `ExternalConnectionNameString` */
    externalConnectionName?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionLicense = {
    __typename?: 'ArtifactPackageVersionLicense';
    name?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionOrigin = {
    __typename?: 'ArtifactPackageVersionOrigin';
    entryPoint?: Maybe<ArtifactPackageVersionEntryPoint>;
    /** * **Simple Shape:** `ArtifactPackageVersionOriginType` */
    originType?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionRevisionMapInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};

export type ArtifactPackageVersionSummary = {
    __typename?: 'ArtifactPackageVersionSummary';
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    version?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionRevisionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    revision?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    status?: Maybe<Scalars['String']>;
    origin?: Maybe<ArtifactPackageVersionOrigin>;
};

export type ArtifactPackageVersionsBatchActionError = {
    __typename?: 'ArtifactPackageVersionsBatchActionError';
    errorCode?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
};

export type ArtifactPackageVersionsBatchActionOutput = {
    __typename?: 'ArtifactPackageVersionsBatchActionOutput';
    successfulVersions?: Maybe<Array<Maybe<ArtifactPackageVersionsSuccessfulBatchActionMap>>>;
    failedVersions?: Maybe<Array<Maybe<ArtifactPackageVersionsFailedBatchActionMap>>>;
};

export type ArtifactPackageVersionsFailedBatchActionMap = {
    __typename?: 'ArtifactPackageVersionsFailedBatchActionMap';
    key: Scalars['String'];
    value: ArtifactPackageVersionsBatchActionError;
};

export type ArtifactPackageVersionsSuccessfulBatchActionMap = {
    __typename?: 'ArtifactPackageVersionsSuccessfulBatchActionMap';
    key: Scalars['String'];
    value: ArtifactPackageVersionBatchActionSummary;
};

export type ArtifactRepositorySummary = {
    __typename?: 'ArtifactRepositorySummary';
    id?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 1000
   */
    description?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    upstreams?: Maybe<Array<Maybe<UpstreamArtifactRepository>>>;
    /** * **Simple Shape:** `ExternalConnectionNameString` */
    externalConnection?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `RepositoryTypeNameString` */
    repositoryType?: Maybe<Scalars['String']>;
};

export type Author = {
    __typename?: 'Author';
    datetime?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type AwsAccount = {
    __typename?: 'AwsAccount';
    /**
   * * **Constraints**
   *   * Required
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountName: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountId: Scalars['String'];
    /**
   * * **Simple Shape:** `AwsAccountStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    requesterId: GetPersonOutput;
    accountConnectionToken?: Maybe<Scalars['String']>;
    connectionRequestedFeatures?: Maybe<Array<Maybe<ConnectionFeature>>>;
    connectionId?: Maybe<Scalars['String']>;
};

export type AwsAccountRole = {
    __typename?: 'AwsAccountRole';
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    roleName: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    roleArn: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountName: Scalars['String'];
    roleDescription?: Maybe<Scalars['String']>;
    awsAccountId?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
};

export type BatchGetIssueErrorMigration = {
    __typename?: 'BatchGetIssueErrorMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    code: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    message: Scalars['String'];
};

export type BatchGetIssueInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    identifiers: Array<Maybe<Scalars['String']>>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
};

export type BatchGetIssueOutput = {
    __typename?: 'BatchGetIssueOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    items: Array<Maybe<IssueObject>>;
};

export type BatchGetIssueRequestMigrationInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    ids: Array<Maybe<Scalars['String']>>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
};

export type BatchGetIssueResponseMigration = {
    __typename?: 'BatchGetIssueResponseMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    errors: Array<Maybe<BatchGetIssueErrorMigration>>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    items: Array<Maybe<IssueObjectMigration>>;
};

export type BatchUpdateIssueStoreLabelsError = {
    __typename?: 'BatchUpdateIssueStoreLabelsError';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    code: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    message: Scalars['String'];
};

export type BatchUpdateIssueStoreLabelsOutput = {
    __typename?: 'BatchUpdateIssueStoreLabelsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    errors: Array<Maybe<BatchUpdateIssueStoreLabelsError>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 200
   */
    items?: Maybe<Array<Maybe<IssueStoreLabelObject>>>;
};

export type BatchUpdateIssueStoreLabelsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    items: Array<Maybe<IssueStoreLabelObjectInput>>;
};

export type BatchUpdateIssueStoreSavedViewsError = {
    __typename?: 'BatchUpdateIssueStoreSavedViewsError';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    code: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    message: Scalars['String'];
};

export type BatchUpdateIssueStoreSavedViewsOutput = {
    __typename?: 'BatchUpdateIssueStoreSavedViewsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    errors: Array<Maybe<BatchUpdateIssueStoreSavedViewsError>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 50
   */
    items?: Maybe<Array<Maybe<IssueStoreSavedViewObject>>>;
};

export type BatchUpdateIssueStoreSavedViewsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    items: Array<Maybe<IssueStoreSavedViewObjectInput>>;
};

export type BatchUpdateIssueStoreStatusesError = {
    __typename?: 'BatchUpdateIssueStoreStatusesError';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    code: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    message: Scalars['String'];
};

export type BatchUpdateIssueStoreStatusesOutput = {
    __typename?: 'BatchUpdateIssueStoreStatusesOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    errors: Array<Maybe<BatchUpdateIssueStoreStatusesError>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 256
   */
    items?: Maybe<Array<Maybe<IssueStoreStatus>>>;
};

export type BatchUpdateIssueStoreStatusesRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 256
   */
    items: Array<Maybe<IssueStoreStatusInput>>;
};

export type BlueprintSummary = {
    __typename?: 'BlueprintSummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    publisher: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    publishDate: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    packageUri: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    author: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    license?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BranchCoverageResult = {
    __typename?: 'BranchCoverageResult';
    /** * **Simple Shape:** `TestPercent` */
    percentageCovered?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    coveredCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedCount: Scalars['Int'];
    threshold?: Maybe<TestSuccessPercentageThreshold>;
};

export type BranchCoverageResultMigration = {
    __typename?: 'BranchCoverageResultMigration';
    /** * **Simple Shape:** `TestPercent` */
    percentageCovered?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    coveredCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedCount: Scalars['Int'];
    threshold?: Maybe<TestSuccessPercentageThresholdMigration>;
};

export type BuildActionAccountConnection = {
    __typename?: 'BuildActionAccountConnection';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    roleName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    accountConnectionName: Scalars['String'];
};

export type BuildActionCommand = {
    __typename?: 'BuildActionCommand';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

export type BuildActionConnectionDetails = {
    __typename?: 'BuildActionConnectionDetails';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    environmentName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 10
   */
    connections?: Maybe<Array<Maybe<BuildActionAccountConnection>>>;
};

export type BuildArtifact = {
    __typename?: 'BuildArtifact';
    type?: Maybe<Scalars['String']>;
    location?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
    packaging?: Maybe<Scalars['String']>;
};

export type BuildComputeDetails = {
    __typename?: 'BuildComputeDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    environmentType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    computeType: Scalars['String'];
    fleetName?: Maybe<Scalars['String']>;
};

export type BuildDetailsOutput = {
    __typename?: 'BuildDetailsOutput';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    sources?: Maybe<Array<Maybe<BuildSource>>>;
    fleetId?: Maybe<Scalars['String']>;
    currentPhase?: Maybe<Scalars['String']>;
    computeDetails?: Maybe<BuildComputeDetails>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    environment?: Maybe<BuildEnvironment>;
    artifacts?: Maybe<Array<Maybe<BuildArtifact>>>;
    reports?: Maybe<Array<Maybe<BuildReport>>>;
    phases?: Maybe<Array<Maybe<BuildPhaseMetadata>>>;
    connectionDetails?: Maybe<BuildActionConnectionDetails>;
};

export type BuildEnvironment = {
    __typename?: 'BuildEnvironment';
    debugSessionEnabled?: Maybe<Scalars['Boolean']>;
    timeoutInMinutes?: Maybe<Scalars['Int']>;
    variables?: Maybe<Array<Maybe<BuildVariable>>>;
    containerImage?: Maybe<Scalars['String']>;
    outputVariables?: Maybe<Array<Maybe<OutputVariable>>>;
};

export type BuildLog = {
    __typename?: 'BuildLog';
    timestamp?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
};

export type BuildPhaseContext = {
    __typename?: 'BuildPhaseContext';
    message?: Maybe<Scalars['String']>;
    statusCode?: Maybe<Scalars['String']>;
};

export type BuildPhaseMetadata = {
    __typename?: 'BuildPhaseMetadata';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    durationInSeconds?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    contexts?: Maybe<Array<Maybe<BuildPhaseContext>>>;
    commands?: Maybe<Array<Maybe<BuildActionCommand>>>;
    finallyCommands?: Maybe<Array<Maybe<BuildActionCommand>>>;
};

export type BuildReport = {
    __typename?: 'BuildReport';
    type?: Maybe<Scalars['String']>;
    sourceRepo?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BuildSource = {
    __typename?: 'BuildSource';
    sourceType?: Maybe<Scalars['String']>;
    sourceLocation?: Maybe<Scalars['String']>;
    sourceIdentifier?: Maybe<Scalars['String']>;
    sourceVersion?: Maybe<Scalars['String']>;
    sourceRank?: Maybe<Scalars['String']>;
};

export type BuildVariable = {
    __typename?: 'BuildVariable';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};

export type Category = {
    __typename?: 'Category';
    name?: Maybe<Scalars['String']>;
    mappedSeverityCounts?: Maybe<Array<Maybe<AnalysisCounter>>>;
    originalSeverityCounts?: Maybe<Array<Maybe<AnalysisCounter>>>;
};

export type CfnStackDeploymentTargetInfo = {
    __typename?: 'CfnStackDeploymentTargetInfo';
    stackId?: Maybe<Scalars['String']>;
    stackName?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
};

export type CloudFormationChangeSet = {
    __typename?: 'CloudFormationChangeSet';
    /**
   * * **Constraints**
   *   * Required
   */
    changeSetId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    changeSetName: Scalars['String'];
    changes?: Maybe<Array<Maybe<CloudFormationChangeSetChange>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    statusReason?: Maybe<Scalars['String']>;
};

export type CloudFormationChangeSetChange = {
    __typename?: 'CloudFormationChangeSetChange';
    /**
   * * **Constraints**
   *   * Required
   */
    logicalResourceId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceType: Scalars['String'];
};

export type CloudFormationStackEvent = {
    __typename?: 'CloudFormationStackEvent';
    /**
   * * **Constraints**
   *   * Required
   */
    logicalResourceId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    timestamp: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceStatus: Scalars['String'];
    resourceStatusReason?: Maybe<Scalars['String']>;
};

export type CloudFormationStackOutput = {
    __typename?: 'CloudFormationStackOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    outputKey: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    outputValue: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    exportName?: Maybe<Scalars['String']>;
};

export type CloudFormationStackParameter = {
    __typename?: 'CloudFormationStackParameter';
    /**
   * * **Constraints**
   *   * Required
   */
    parameterKey: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    parameterValue: Scalars['String'];
    resolvedValue?: Maybe<Scalars['String']>;
};

export type CloudFormationStackTemplate = {
    __typename?: 'CloudFormationStackTemplate';
    /**
   * * **Constraints**
   *   * Required
   */
    templateSource: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    templatePath: Scalars['String'];
};

export type CodeCoverageReportSummary = {
    __typename?: 'CodeCoverageReportSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    creationTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    lineCoverage: LineCoverageResult;
    branchCoverage?: Maybe<BranchCoverageResult>;
    workflowName?: Maybe<Scalars['String']>;
    actionName?: Maybe<Scalars['String']>;
    actionType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetails>>>;
    directoryLevelCoverages?: Maybe<Array<Maybe<DirectoryLevelCoverage>>>;
};

export type CodeCoverageReportSummaryMigration = {
    __typename?: 'CodeCoverageReportSummaryMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    creationTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    lineCoverage: LineCoverageResultMigration;
    branchCoverage?: Maybe<BranchCoverageResultMigration>;
    workflowName?: Maybe<Scalars['String']>;
    actionName?: Maybe<Scalars['String']>;
    actionType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetailsMigration>>>;
    directoryLevelCoverages?: Maybe<Array<Maybe<DirectoryLevelCoverageMigration>>>;
};

export type CodeCoverageRunResultListOutput = {
    __typename?: 'CodeCoverageRunResultListOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Simple Shape:** `TestPercent`
   * * **Constraints**
   *   * Required
   */
    lineCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    coveredLinesCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedLinesCount: Scalars['Int'];
    creationTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TestPercent` */
    branchCoveragePercentage?: Maybe<Scalars['Float']>;
    coveredBranchesCount?: Maybe<Scalars['Int']>;
    missedBranchesCount?: Maybe<Scalars['Int']>;
    additionalProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
    lineCoverageDetails?: Maybe<Array<Maybe<CoverageLineDetail>>>;
};

export type CodeCoverageRunResultListOutputMigration = {
    __typename?: 'CodeCoverageRunResultListOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Simple Shape:** `TestPercentMigration`
   * * **Constraints**
   *   * Required
   */
    lineCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    coveredLinesCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedLinesCount: Scalars['Int'];
    creationTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TestPercent` */
    branchCoveragePercentage?: Maybe<Scalars['Float']>;
    coveredBranchesCount?: Maybe<Scalars['Int']>;
    missedBranchesCount?: Maybe<Scalars['Int']>;
    additionalProperties?: Maybe<Array<Maybe<AdditionalPropertyMigration>>>;
    lineCoverageDetails?: Maybe<Array<Maybe<CoverageLineDetailMigration>>>;
};

export type CodeCoverageRunResultsOutput = {
    __typename?: 'CodeCoverageRunResultsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    creationTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Simple Shape:** `TestPercent`
   * * **Constraints**
   *   * Required
   */
    lineCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    coveredLinesCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedLinesCount: Scalars['Int'];
    /** * **Simple Shape:** `TestPercent` */
    branchCoveragePercentage?: Maybe<Scalars['Float']>;
    coveredBranchesCount?: Maybe<Scalars['Int']>;
    missedBranchesCount?: Maybe<Scalars['Int']>;
    lineCoverageDetails?: Maybe<Array<Maybe<CoverageLineDetail>>>;
    additionalProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
};

export type CodeCoverageRunResultsOutputMigration = {
    __typename?: 'CodeCoverageRunResultsOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    creationTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Simple Shape:** `TestPercentMigration`
   * * **Constraints**
   *   * Required
   */
    lineCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    coveredLinesCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedLinesCount: Scalars['Int'];
    /** * **Simple Shape:** `TestPercentMigration` */
    branchCoveragePercentage?: Maybe<Scalars['Float']>;
    coveredBranchesCount?: Maybe<Scalars['Int']>;
    missedBranchesCount?: Maybe<Scalars['Int']>;
    lineCoverageDetails?: Maybe<Array<Maybe<CoverageLineDetailMigration>>>;
    additionalProperties?: Maybe<Array<Maybe<AdditionalPropertyMigration>>>;
};

export type CommentAdditionalAttributesInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};

export type CommentForIssueOutput = {
    __typename?: 'CommentForIssueOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    issueId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    threadId: Scalars['String'];
    commentRepliedToId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    creatorId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commentId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    creationTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    content: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentType`
   * * **Constraints**
   *   * Required
   */
    contentType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    deleted: Scalars['Boolean'];
    reactions?: Maybe<Array<Maybe<CommentReactionsMap>>>;
};

export type CommentReactionsMap = {
    __typename?: 'CommentReactionsMap';
    key: Scalars['String'];
    value: Array<Maybe<Scalars['String']>>;
};

export type ComputeActionAccountConnection = {
    __typename?: 'ComputeActionAccountConnection';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    roleName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    accountConnectionName?: Maybe<Scalars['String']>;
};

export type ComputeActionArtifact = {
    __typename?: 'ComputeActionArtifact';
    type?: Maybe<Scalars['String']>;
    location?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
    packaging?: Maybe<Scalars['String']>;
};

export type ComputeActionComputeDetails = {
    __typename?: 'ComputeActionComputeDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    environmentType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    computeType: Scalars['String'];
    fleetName?: Maybe<Scalars['String']>;
};

export type ComputeActionConnectionDetails = {
    __typename?: 'ComputeActionConnectionDetails';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2500
   */
    environmentName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 10
   */
    connections: Array<Maybe<ComputeActionAccountConnection>>;
};

export type ComputeActionDetailsOutput = {
    __typename?: 'ComputeActionDetailsOutput';
    lastUpdatedTime?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    sources?: Maybe<Array<Maybe<ComputeActionSource>>>;
    fleetId?: Maybe<Scalars['String']>;
    currentPhase?: Maybe<Scalars['String']>;
    computeDetails?: Maybe<ComputeActionComputeDetails>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    environment?: Maybe<ComputeActionEnvironment>;
    artifacts?: Maybe<Array<Maybe<ComputeActionArtifact>>>;
    reports?: Maybe<Array<Maybe<ComputeActionReport>>>;
    phases?: Maybe<Array<Maybe<ComputeActionPhaseMetadata>>>;
    connectionDetails?: Maybe<ComputeActionConnectionDetails>;
};

export type ComputeActionEnvironment = {
    __typename?: 'ComputeActionEnvironment';
    debugSessionEnabled?: Maybe<Scalars['Boolean']>;
    timeoutInMinutes?: Maybe<Scalars['Int']>;
    variables?: Maybe<Array<Maybe<ComputeActionVariable>>>;
    containerImage?: Maybe<Scalars['String']>;
    outputVariables?: Maybe<Array<Maybe<OutputVariable>>>;
};

export type ComputeActionPhaseContext = {
    __typename?: 'ComputeActionPhaseContext';
    message?: Maybe<Scalars['String']>;
    statusCode?: Maybe<Scalars['String']>;
};

export type ComputeActionPhaseMetadata = {
    __typename?: 'ComputeActionPhaseMetadata';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    durationInSeconds?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    contexts?: Maybe<Array<Maybe<ComputeActionPhaseContext>>>;
    steps?: Maybe<Array<Maybe<ComputeActionStep>>>;
};

export type ComputeActionReport = {
    __typename?: 'ComputeActionReport';
    type?: Maybe<Scalars['String']>;
    sourceRepo?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ComputeActionSource = {
    __typename?: 'ComputeActionSource';
    /**
   * * **Constraints**
   *   * Required
   */
    sourceType: Scalars['String'];
    sourceLocation?: Maybe<Scalars['String']>;
    sourceIdentifier?: Maybe<Scalars['String']>;
    sourceVersion?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    sourceRank: Scalars['String'];
};

export type ComputeActionStep = {
    __typename?: 'ComputeActionStep';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

export type ComputeActionVariable = {
    __typename?: 'ComputeActionVariable';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};

export type ComputeFleetSettings = {
    __typename?: 'ComputeFleetSettings';
    /** * **Simple Shape:** `FleetArchitecture` */
    architecture?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `FleetOS` */
    os?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `FleetExecutionModel` */
    executionModel?: Maybe<Scalars['String']>;
    vcpu?: Maybe<Scalars['Int']>;
    memory?: Maybe<Scalars['Int']>;
    disk?: Maybe<Scalars['Int']>;
};

export type ComputeFleetSettingsInput = {
    /** * **Simple Shape:** `FleetArchitecture` */
    architecture?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `FleetOS` */
    os?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `FleetExecutionModel` */
    executionModel?: Maybe<Scalars['String']>;
    vcpu?: Maybe<Scalars['Int']>;
    memory?: Maybe<Scalars['Int']>;
    disk?: Maybe<Scalars['Int']>;
};

export type ComputeFleetSummary = {
    __typename?: 'ComputeFleetSummary';
    name?: Maybe<Scalars['String']>;
    creationTime?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    computeSettings?: Maybe<ComputeFleetSettings>;
    resolvedInstanceType?: Maybe<Scalars['String']>;
    desiredCapacity?: Maybe<Scalars['Int']>;
    /** * **Simple Shape:** `FleetOverflowBehavior` */
    overflowBehavior?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    statusContext?: Maybe<FleetStatusContext>;
    id?: Maybe<Scalars['String']>;
};

export type ConditionalFilter = {
    condition?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    value: Scalars['String'];
};

export type ConnectAwsAccountOutput = {
    __typename?: 'ConnectAwsAccountOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountName: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountId: Scalars['String'];
    /**
   * * **Simple Shape:** `AwsAccountStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    requesterId: GetPersonOutput;
    /**
   * * **Constraints**
   *   * Required
   */
    accountConnectionToken: Scalars['String'];
    connectionRequestedFeatures?: Maybe<Array<Maybe<ConnectionFeature>>>;
};

export type ConnectAwsAccountRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 12
   *   * Maximum length (inclusive): 12
   *   * Pattern: `/^[0-9]+$/`
   */
    awsAccountId: Scalars['String'];
    awsAccountDescription?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 512
   */
    description?: Maybe<Scalars['String']>;
    connectionRequestedFeatures?: Maybe<Array<Maybe<ConnectionFeatureInput>>>;
};

export type ConnectionFeature = {
    __typename?: 'ConnectionFeature';
    /**
   * * **Simple Shape:** `ConnectionFeatureType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    details?: Maybe<Scalars['String']>;
};

export type ConnectionFeatureInput = {
    /**
   * * **Simple Shape:** `ConnectionFeatureType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    details?: Maybe<Scalars['String']>;
};

export type ConnectionInfo = {
    __typename?: 'ConnectionInfo';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    roleName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    roleId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    accountConnectionName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    accountConnectionId?: Maybe<Scalars['String']>;
};

export type ConnectionSummary = {
    __typename?: 'ConnectionSummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    creatorId: GetPersonOutput;
    /**
   * * **Constraints**
   *   * Required
   */
    providerId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerData: ProviderData;
    /**
   * * **Simple Shape:** `ConnectionStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    statusMessage?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
};

export type CoverageLineDetail = {
    __typename?: 'CoverageLineDetail';
    /**
   * * **Constraints**
   *   * Required
   */
    lineNumber: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    coverage: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    isBranch: Scalars['Boolean'];
};

export type CoverageLineDetailMigration = {
    __typename?: 'CoverageLineDetailMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    lineNumber: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    coverage: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    isBranch: Scalars['Boolean'];
};

export type CoverageResult = {
    __typename?: 'CoverageResult';
    /** * **Simple Shape:** `TestPercent` */
    percentageCovered?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    coveredCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedCount: Scalars['Int'];
};

export type CoverageResultMigration = {
    __typename?: 'CoverageResultMigration';
    /** * **Simple Shape:** `TestPercentMigration` */
    percentageCovered?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    coveredCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedCount: Scalars['Int'];
};

export type CreateAccessTokenOutput = {
    __typename?: 'CreateAccessTokenOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 4000
   */
    secret: Scalars['String'];
};

export type CreateAccessTokenRequestInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 4000
   */
    name: Scalars['String'];
    expires?: Maybe<Scalars['String']>;
};

export type CreateArtifactRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 1000
   */
    description?: Maybe<Scalars['String']>;
    upstreams?: Maybe<Array<Maybe<UpstreamArtifactRepositoryInput>>>;
};

export type CreateArtifactRepositoryOutput = {
    __typename?: 'CreateArtifactRepositoryOutput';
    version?: Maybe<Scalars['String']>;
};

export type CreateBarInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type CreateBarOutput = {
    __typename?: 'CreateBarOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type CreateBlueprintUploadUrlInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    publisher: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
};

export type CreateBlueprintUploadUrlOutput = {
    __typename?: 'CreateBlueprintUploadUrlOutput';
    uploadUrl?: Maybe<Scalars['String']>;
    publishingJobId?: Maybe<Scalars['String']>;
};

export type CreateCommentForIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    issueId: Scalars['String'];
    commentRepliedToId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `CommentContentString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 30720
   */
    content: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentType`
   * * **Constraints**
   *   * Required
   */
    contentType: Scalars['String'];
};

export type CreateCommentForIssueOutput = {
    __typename?: 'CreateCommentForIssueOutput';
    id?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type CreateComputeFleetInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    computeSettings?: Maybe<ComputeFleetSettingsInput>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 20
   */
    desiredCapacity: Scalars['Int'];
    /** * **Simple Shape:** `FleetOverflowBehavior` */
    overflowBehavior?: Maybe<Scalars['String']>;
};

export type CreateComputeFleetOutput = {
    __typename?: 'CreateComputeFleetOutput';
    version?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type CreateConnectionInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    code: Scalars['String'];
};

export type CreateConnectionOutput = {
    __typename?: 'CreateConnectionOutput';
    version?: Maybe<Scalars['String']>;
};

export type CreateDevelopmentWorkspaceOutput = {
    __typename?: 'CreateDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
};

export type CreateDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    ideRuntimes?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    repositories: Array<Maybe<RepositoryInput>>;
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 128
   */
    alias?: Maybe<Scalars['String']>;
    ides?: Maybe<Array<Maybe<IdeConfigurationInput>>>;
    /** * **Simple Shape:** `InstanceType` */
    instanceType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InactivityTimeoutMinutes`
   * * **Constraints**
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 1200
   */
    inactivityTimeoutMinutes?: Maybe<Scalars['Int']>;
    persistentStorage?: Maybe<PersistentStorageConfigurationInput>;
};

export type CreateDummyDataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type CreateDummyDataOutput = {
    __typename?: 'CreateDummyDataOutput';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type CreateEnvironmentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 200
   */
    description?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `EnvironmentType` */
    environmentType?: Maybe<Scalars['String']>;
};

export type CreateEnvironmentOutput = {
    __typename?: 'CreateEnvironmentOutput';
    version?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type CreateExtensionInstallationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    extensionId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    extensionVersion: Scalars['String'];
};

export type CreateExtensionInstallationOutput = {
    __typename?: 'CreateExtensionInstallationOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type CreateExternalArtifactRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 1000
   */
    description?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ExternalConnectionNameString`
   * * **Constraints**
   *   * Required
   */
    externalConnection: Scalars['String'];
};

export type CreateIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    statusId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 200000
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    archived: Scalars['Boolean'];
    blocked?: Maybe<Scalars['Boolean']>;
    assigneeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** * **Simple Shape:** `IssuePriority` */
    priority?: Maybe<Scalars['String']>;
    labelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `Estimate`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 99
   */
    estimate?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 50
   */
    customFields?: Maybe<Array<Maybe<IssueCustomFieldInput>>>;
};

export type CreateIssueOutput = {
    __typename?: 'CreateIssueOutput';
    changeStatus?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
    shortId?: Maybe<Scalars['String']>;
};

export type CreateIssueRequestMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    title: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    statusId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 32767
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    archived: Scalars['Boolean'];
    blocked?: Maybe<Scalars['Boolean']>;
    assigneeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** * **Simple Shape:** `IssuePriorityMigration` */
    priority?: Maybe<Scalars['String']>;
    labelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `EstimateMigration`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    estimate?: Maybe<Scalars['Int']>;
    customFields?: Maybe<Array<Maybe<IssueCustomFieldMigrationInput>>>;
};

export type CreateIssueResponseMigration = {
    __typename?: 'CreateIssueResponseMigration';
    /**
   * * **Simple Shape:** `IssueId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type CreateIssueStoreLabelOutput = {
    __typename?: 'CreateIssueStoreLabelOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
};

export type CreateIssueStoreLabelRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueStoreLabelColor`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 7
   *   * Maximum length (inclusive): 7
   *   * Pattern: `/^#[0-9a-fA-F]{6}$/`
   */
    labelColor: Scalars['String'];
};

export type CreateIssueStoreSavedViewOutput = {
    __typename?: 'CreateIssueStoreSavedViewOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
};

export type CreateIssueStoreSavedViewRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `SavedViewQueryString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1023
   */
    query: Scalars['String'];
};

export type CreateIssueStoreStatusOutput = {
    __typename?: 'CreateIssueStoreStatusOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
};

export type CreateIssueStoreStatusRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 64
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueStoreHighLevelStatus`
   * * **Constraints**
   *   * Required
   */
    highLevelStatus: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    order: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    active: Scalars['Boolean'];
};

export type CreateLinkOutput = {
    __typename?: 'CreateLinkOutput';
    /**
   * * **Simple Shape:** `LinkId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}_[0-9a-zA-Z_]{4,62}_[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    linkId: Scalars['String'];
};

export type CreateLinkRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    source: LinkComponentInput;
    /**
   * * **Constraints**
   *   * Required
   */
    destination: LinkComponentInput;
    /**
   * * **Simple Shape:** `LinkType`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-zA-Z_]{4,62}$/`
   */
    linkType: Scalars['String'];
};

export type CreateNotificationChannelOutput = {
    __typename?: 'CreateNotificationChannelOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    alias: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationChannelType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationChannelDetails;
};

export type CreateNotificationChannelRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    alias?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationChannelDetailsInput;
};

export type CreateNotificationClientDetailsInput = {
    slack?: Maybe<CreateNotificationClientSlackDetailsInput>;
};

export type CreateNotificationClientMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: CreateNotificationClientDetailsInput;
};

export type CreateNotificationClientMigrationOutput = {
    __typename?: 'CreateNotificationClientMigrationOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationClientType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationClientDetails;
};

export type CreateNotificationClientOutput = {
    __typename?: 'CreateNotificationClientOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationClientType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationClientDetails;
};

export type CreateNotificationClientRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: CreateNotificationClientDetailsInput;
};

export type CreateNotificationClientSlackDetailsInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    oauthParameters: OAuthParametersInput;
};

export type CreateOnboardingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    onboardingId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    submitted: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    dismissed: Scalars['Boolean'];
    /**
   * * **Simple Shape:** `NextQuestionString`
   * * **Constraints**
   *   * Required
   */
    nextQuestion: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sections: Array<Maybe<QuestionInformationInput>>;
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
};

export type CreateOrganizationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `RegionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 16
   *   * Pattern: `/^(us(?:-gov)?|af|ap|ca|cn|eu|sa)-(central|(?:north|south)?(?:east|west)?)-(\d+)$/`
   */
    regionName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 200
   */
    description?: Maybe<Scalars['String']>;
};

export type CreateOrganizationOutput = {
    __typename?: 'CreateOrganizationOutput';
    versionId?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type CreateProjectInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 200
   */
    description?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    templateArn?: Maybe<Scalars['String']>;
    templateParams?: Maybe<Array<Maybe<TemplateParamsMapInput>>>;
};

export type CreateProjectOutput = {
    __typename?: 'CreateProjectOutput';
    versionId?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type CreatePullRequestCommentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    pullRequestId: Scalars['String'];
    commentRepliedToId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `CommentContentString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 30720
   */
    content: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentType`
   * * **Constraints**
   *   * Required
   */
    contentType: Scalars['String'];
    additionalAttributes?: Maybe<Array<Maybe<CommentAdditionalAttributesInput>>>;
};

export type CreatePullRequestCommentOutput = {
    __typename?: 'CreatePullRequestCommentOutput';
    id?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type CreateSecretInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    secretValue: Scalars['String'];
};

export type CreateSecretOutput = {
    __typename?: 'CreateSecretOutput';
    version?: Maybe<Scalars['String']>;
    referenceId?: Maybe<Scalars['String']>;
};

export type CreateSessionOutput = {
    __typename?: 'CreateSessionOutput';
    redirectLocation?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
};

export type CreateSessionRequestInput = {
    parameters?: Maybe<Array<Maybe<LoginQueryParametersMapInput>>>;
    callbackRedirectUri?: Maybe<Scalars['String']>;
};

export type CreateSourceBranchInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName: Scalars['String'];
    commitSpecifier?: Maybe<Scalars['String']>;
};

export type CreateSourceBranchOutput = {
    __typename?: 'CreateSourceBranchOutput';
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName?: Maybe<Scalars['String']>;
    commitId?: Maybe<Scalars['String']>;
};

export type CreateSourceCommitInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName: Scalars['String'];
    parentCommitId?: Maybe<Scalars['String']>;
    authorName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    commitMessage?: Maybe<Scalars['String']>;
    keepEmptyFolders?: Maybe<Scalars['Boolean']>;
    putFiles?: Maybe<Array<Maybe<SourceCommitFileToPutInput>>>;
    deleteFiles?: Maybe<Array<Maybe<SourceCommitFileToDeleteInput>>>;
    setFileModes?: Maybe<Array<Maybe<SourceCommitFileModeToSetInput>>>;
};

export type CreateSourceCommitOutput = {
    __typename?: 'CreateSourceCommitOutput';
    commitId?: Maybe<Scalars['String']>;
    treeId?: Maybe<Scalars['String']>;
    filesAdded?: Maybe<Array<Maybe<SourceCommitFileMetadataSummary>>>;
    filesUpdated?: Maybe<Array<Maybe<SourceCommitFileMetadataSummary>>>;
    filesDeleted?: Maybe<Array<Maybe<SourceCommitFileMetadataSummary>>>;
};

export type CreateSourcePullRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourcePullRequestTitle`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   */
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SourcePullRequestContributorId` */
    authorId?: Maybe<Scalars['String']>;
    coAuthorIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    reviewers?: Maybe<Array<Maybe<PullRequestReviewerInput>>>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceBranchReference?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    destinationBranchReference?: Maybe<Scalars['String']>;
};

export type CreateSourcePullRequestOutput = {
    __typename?: 'CreateSourcePullRequestOutput';
    /** * **Simple Shape:** `SourcePullRequestNumber` */
    number?: Maybe<Scalars['String']>;
};

export type CreateSourcePullRequestToJiraIssueLinkInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    issueId: Scalars['String'];
};

export type CreateSourcePullRequestToJiraIssueLinkOutput = {
    __typename?: 'CreateSourcePullRequestToJiraIssueLinkOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type CreateSourceRepositoryCommitInput = {
    repositoryName: Scalars['String'];
    branchName: Scalars['String'];
    parentCommitId?: Maybe<Scalars['String']>;
    authorName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    commitMessage?: Maybe<Scalars['String']>;
    keepEmptyFolders?: Maybe<Scalars['Boolean']>;
    putFiles?: Maybe<Array<Maybe<PutSourceRepositoryFileInput>>>;
    deleteFiles?: Maybe<Array<Maybe<DeleteSourceRepositoryFileInput>>>;
    setFileModes?: Maybe<Array<Maybe<SetSourceRepositoryFileModeInput>>>;
    organizationId?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
};

export type CreateSourceRepositoryCommitResponse = {
    __typename?: 'CreateSourceRepositoryCommitResponse';
    commitId?: Maybe<Scalars['String']>;
    treeId?: Maybe<Scalars['String']>;
    filesAdded?: Maybe<Array<Maybe<SourceRepositoryFileMetadata>>>;
    filesUpdated?: Maybe<Array<Maybe<SourceRepositoryFileMetadata>>>;
    filesDeleted?: Maybe<Array<Maybe<SourceRepositoryFileMetadata>>>;
};

export type CreateSourceRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    description?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    defaultBranch?: Maybe<Scalars['String']>;
    autoInitialize?: Maybe<SourceAutoInitializeInput>;
};

export type CreateSourceRepositoryOutput = {
    __typename?: 'CreateSourceRepositoryOutput';
    version?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type CreateUserDetailsInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    userName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    region?: Maybe<Scalars['String']>;
};

export type CreateUserDetailsOutput = {
    __typename?: 'CreateUserDetailsOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteAccessTokenOutput = {
    __typename?: 'DeleteAccessTokenOutput';
    deleted?: Maybe<Scalars['Boolean']>;
};

export type DeleteAccessTokenRequestInput = {
    /**
   * * **Simple Shape:** `AccessTokenId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 36
   */
    accessTokenId: Scalars['String'];
};

export type DeleteArtifactPackageVersionsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    versions: Array<Maybe<Scalars['String']>>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    expectedStatus?: Maybe<Scalars['String']>;
};

export type DeleteArtifactRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name: Scalars['String'];
};

export type DeleteArtifactRepositoryOutput = {
    __typename?: 'DeleteArtifactRepositoryOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteAwsAccountInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type DeleteAwsAccountOutput = {
    __typename?: 'DeleteAwsAccountOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
};

export type DeleteCommentContentForIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    issueId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commentId: Scalars['String'];
};

export type DeleteCommentContentForIssueOutput = {
    __typename?: 'DeleteCommentContentForIssueOutput';
    id?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type DeleteComputeFleetInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type DeleteComputeFleetOutput = {
    __typename?: 'DeleteComputeFleetOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteConnectionInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerId: Scalars['String'];
};

export type DeleteConnectionOutput = {
    __typename?: 'DeleteConnectionOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteDevelopmentWorkspaceOutput = {
    __typename?: 'DeleteDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
};

export type DeleteDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
};

export type DeleteDummyDataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    version?: Maybe<Scalars['String']>;
};

export type DeleteDummyDataOutput = {
    __typename?: 'DeleteDummyDataOutput';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type DeleteEnvironmentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type DeleteEnvironmentOutput = {
    __typename?: 'DeleteEnvironmentOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteExtensionInstallationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    extensionId: Scalars['String'];
};

export type DeleteExtensionInstallationOutput = {
    __typename?: 'DeleteExtensionInstallationOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteIssueStoreSavedViewInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
};

export type DeleteIssueStoreSavedViewOutput = {
    __typename?: 'DeleteIssueStoreSavedViewOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
};

export type DeleteLinkOutput = {
    __typename?: 'DeleteLinkOutput';
    /**
   * * **Simple Shape:** `LinkId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}_[0-9a-zA-Z_]{4,62}_[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    linkId: Scalars['String'];
};

export type DeleteLinkRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `LinkId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}_[0-9a-zA-Z_]{4,62}_[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    linkId: Scalars['String'];
};

export type DeleteNotificationChannelOutput = {
    __typename?: 'DeleteNotificationChannelOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type DeleteNotificationChannelRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type DeleteNotificationClientMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
};

export type DeleteNotificationClientMigrationOutput = {
    __typename?: 'DeleteNotificationClientMigrationOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizatioName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
};

export type DeleteNotificationClientOutput = {
    __typename?: 'DeleteNotificationClientOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
};

export type DeleteNotificationClientRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
};

export type DeleteOrganizationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
};

export type DeleteOrganizationOutput = {
    __typename?: 'DeleteOrganizationOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type DeleteProjectInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
};

export type DeleteProjectOutput = {
    __typename?: 'DeleteProjectOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type DeletePullRequestCommentContentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    pullRequestId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commentId: Scalars['String'];
};

export type DeletePullRequestCommentContentOutput = {
    __typename?: 'DeletePullRequestCommentContentOutput';
    id?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type DeleteSshPublicKeyOutput = {
    __typename?: 'DeleteSSHPublicKeyOutput';
    /**
   * * **Simple Shape:** `SSHPublicKeyIdString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[A-Fa-f0-9]{64}$/`
   */
    SSHPublicKeyId: Scalars['String'];
};

export type DeleteSshPublicKeyRequestInput = {
    /**
   * * **Simple Shape:** `SSHPublicKeyIdString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[A-Fa-f0-9]{64}$/`
   */
    SSHPublicKeyId: Scalars['String'];
};

export type DeleteSecretInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type DeleteSecretOutput = {
    __typename?: 'DeleteSecretOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteSourceBranchInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName: Scalars['String'];
};

export type DeleteSourceBranchOutput = {
    __typename?: 'DeleteSourceBranchOutput';
    deleted?: Maybe<Scalars['Boolean']>;
};

export type DeleteSourcePullRequestToJiraIssueLinkInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    linkId: Scalars['String'];
};

export type DeleteSourcePullRequestToJiraIssueLinkOutput = {
    __typename?: 'DeleteSourcePullRequestToJiraIssueLinkOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeleteSourceRepositoryFileInput = {
    filePath: Scalars['String'];
};

export type DeleteSourceRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
};

export type DeleteSourceRepositoryOutput = {
    __typename?: 'DeleteSourceRepositoryOutput';
    version?: Maybe<Scalars['String']>;
};

export type DeployBlueprintOutput = {
    __typename?: 'DeployBlueprintOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
};

export type DeployBlueprintRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    bundle: Scalars['String'];
};

export type DeploymentDetails = {
    __typename?: 'DeploymentDetails';
    deploymentPlatform?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `RegionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 16
   *   * Pattern: `/^(us(?:-gov)?|af|ap|ca|cn|eu|sa)-(central|(?:north|south)?(?:east|west)?)-(\d+)$/`
   */
    region?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    deploymentMessage?: Maybe<Scalars['String']>;
};

export type DeploymentDetailsV2 = {
    __typename?: 'DeploymentDetailsV2';
    /**
   * * **Constraints**
   *   * Required
   */
    environmentId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    deploymentTargetType: Scalars['String'];
    deploymentTargetId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    deploymentStatus?: Maybe<Scalars['String']>;
    deploymentMessage?: Maybe<Scalars['String']>;
    triggerInfo?: Maybe<EnvironmentDeploymentTriggerInfoV2>;
    connection?: Maybe<EnvironmentDeploymentConnectionInfoV2>;
    workflowActionInfo?: Maybe<EnvironmentDeploymentWorkflowActionInfoV2>;
    sourceInfo?: Maybe<EnvironmentDeploymentSourceInfoV2>;
    cfnStackDeploymentInfo?: Maybe<EnvironmentDeploymentCloudFormationStackDeploymentInfoV2>;
    ecsServiceDeploymentInfo?: Maybe<EnvironmentDeploymentEcsServiceDeploymentInfoV2>;
    details?: Maybe<DeploymentDetailsV2>;
};

export type DeploymentRollbackConfiguration = {
    __typename?: 'DeploymentRollbackConfiguration';
    /**
   * * **Constraints**
   *   * Required
   */
    alarmARNs: Array<Maybe<Scalars['String']>>;
    monitoringTime?: Maybe<Scalars['Int']>;
};

export type DeploymentTargetInfo = {
    __typename?: 'DeploymentTargetInfo';
    targetType?: Maybe<Scalars['String']>;
    connection?: Maybe<AccountConnectionInfo>;
};

export type DescribeAccessOutput = {
    __typename?: 'DescribeAccessOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    organizations: Array<Maybe<Scalars['String']>>;
    projects?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DescribeLinksOutput = {
    __typename?: 'DescribeLinksOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<DescribeLinksSummary>>;
};

export type DescribeLinksRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePath: Array<Maybe<ResourceRefInput>>;
    /**
   * * **Simple Shape:** `LinkType`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-zA-Z_]{4,62}$/`
   */
    linkType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type DescribeLinksSummary = {
    __typename?: 'DescribeLinksSummary';
    /**
   * * **Simple Shape:** `LinkId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}_[0-9a-zA-Z_]{4,62}_[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    linkId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    destination: LinkComponent;
    /**
   * * **Simple Shape:** `LinkType`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-zA-Z_]{4,62}$/`
   */
    linkType: Scalars['String'];
};

export type DescribeOrganizationMembersInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Scalars['String']>;
    sortDirection?: Maybe<Scalars['String']>;
};

export type DescribeOrganizationMembersMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Scalars['String']>;
    sortDirection?: Maybe<Scalars['String']>;
};

export type DescribeOrganizationMembersMigrationOutput = {
    __typename?: 'DescribeOrganizationMembersMigrationOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<OrganizationMemberMigration>>>;
};

export type DescribeOrganizationMembersOutput = {
    __typename?: 'DescribeOrganizationMembersOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<OrganizationMember>>>;
};

export type DescribeOrganizationUsageReportOutput = {
    __typename?: 'DescribeOrganizationUsageReportOutput';
    items?: Maybe<Array<Maybe<OrganizationUsageReport>>>;
};

export type DescribeOrganizationUsageReportRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    resourceTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DescribeProjectMembersInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Scalars['String']>;
    sortDirection?: Maybe<Scalars['String']>;
};

export type DescribeProjectMembersMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Scalars['String']>;
    sortDirection?: Maybe<Scalars['String']>;
};

export type DescribeProjectMembersMigrationOutput = {
    __typename?: 'DescribeProjectMembersMigrationOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ProjectMemberMigration>>>;
};

export type DescribeProjectMembersOutput = {
    __typename?: 'DescribeProjectMembersOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ProjectMember>>>;
};

export type DescribeSourceRepositoryEndpointsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
};

export type DescribeSourceRepositoryEndpointsOutput = {
    __typename?: 'DescribeSourceRepositoryEndpointsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SourceRepositoryEndpointSummary>>;
};

export type DescribeSubscriptionOutput = {
    __typename?: 'DescribeSubscriptionOutput';
    subscriptionType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName?: Maybe<Scalars['String']>;
};

export type DescribeSubscriptionRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
};

export type DevelopmentWorkspaceAccessDetails = {
    __typename?: 'DevelopmentWorkspaceAccessDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    streamUrl: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    tokenValue: Scalars['String'];
};

export type DevelopmentWorkspaceRepositorySummary = {
    __typename?: 'DevelopmentWorkspaceRepositorySummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceBranchName?: Maybe<Scalars['String']>;
    pullRequestNumber?: Maybe<Scalars['String']>;
};

export type DevelopmentWorkspaceSessionConfiguration = {
    __typename?: 'DevelopmentWorkspaceSessionConfiguration';
    /**
   * * **Simple Shape:** `WorkspaceSessionType`
   * * **Constraints**
   *   * Required
   */
    sessionType: Scalars['String'];
    executeCommandSessionConfiguration?: Maybe<ExecuteCommandSessionConfiguration>;
};

export type DevelopmentWorkspaceSessionConfigurationInput = {
    /**
   * * **Simple Shape:** `WorkspaceSessionType`
   * * **Constraints**
   *   * Required
   */
    sessionType: Scalars['String'];
    executeCommandSessionConfiguration?: Maybe<ExecuteCommandSessionConfigurationInput>;
};

export type DevelopmentWorkspaceSummary = {
    __typename?: 'DevelopmentWorkspaceSummary';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    creatorId: Scalars['String'];
    /** * **Simple Shape:** `IDEType` */
    ide?: Maybe<Scalars['String']>;
    labels?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `WorkspaceStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositories: Array<Maybe<DevelopmentWorkspaceRepositorySummary>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 128
   */
    alias?: Maybe<Scalars['String']>;
    ides?: Maybe<Array<Maybe<Ide>>>;
    /** * **Simple Shape:** `InstanceType` */
    instanceType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InactivityTimeoutMinutes`
   * * **Constraints**
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 1200
   */
    inactivityTimeoutMinutes?: Maybe<Scalars['Int']>;
    persistentStorage?: Maybe<PersistentStorage>;
};

export type DirectoryLevelCoverage = {
    __typename?: 'DirectoryLevelCoverage';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalLinesCovered: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalLinesMissed: Scalars['Int'];
    /**
   * * **Simple Shape:** `TestPercent`
   * * **Constraints**
   *   * Required
   */
    lineCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalBranchesCovered: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalBranchesMissed: Scalars['Int'];
    /**
   * * **Simple Shape:** `TestPercent`
   * * **Constraints**
   *   * Required
   */
    branchCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalFiles: Scalars['Int'];
    parent?: Maybe<Scalars['String']>;
    childDirectories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryLevelCoverageMigration = {
    __typename?: 'DirectoryLevelCoverageMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalLinesCovered: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalLinesMissed: Scalars['Int'];
    /**
   * * **Simple Shape:** `TestPercentMigration`
   * * **Constraints**
   *   * Required
   */
    lineCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalBranchesCovered: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalBranchesMissed: Scalars['Int'];
    /**
   * * **Simple Shape:** `TestPercentMigration`
   * * **Constraints**
   *   * Required
   */
    branchCoveragePercentage: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalFiles: Scalars['Int'];
    parent?: Maybe<Scalars['String']>;
    childDirectories?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DisposeArtifactPackageVersionsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    versions: Array<Maybe<Scalars['String']>>;
    versionRevisions?: Maybe<Array<Maybe<ArtifactPackageVersionRevisionMapInput>>>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    expectedStatus?: Maybe<Scalars['String']>;
};

export type DummyDataSummary = {
    __typename?: 'DummyDataSummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
};

export type EcsServiceDeploymentTargetInfo = {
    __typename?: 'EcsServiceDeploymentTargetInfo';
    clusterName?: Maybe<Scalars['String']>;
    serviceName?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    deploymentController?: Maybe<Scalars['String']>;
    applicationName?: Maybe<Scalars['String']>;
    deploymentGroupName?: Maybe<Scalars['String']>;
};

export type EmailAddress = {
    __typename?: 'EmailAddress';
    email?: Maybe<Scalars['String']>;
    verified?: Maybe<Scalars['Boolean']>;
};

export type EnvironmentDeploymentCloudFormationStackDeploymentChangeSetChangeV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentChangeSetChangeV2';
    /**
   * * **Constraints**
   *   * Required
   */
    logicalResourceId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceType: Scalars['String'];
};

export type EnvironmentDeploymentCloudFormationStackDeploymentChangeSetV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentChangeSetV2';
    /**
   * * **Constraints**
   *   * Required
   */
    changeSetId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    changeSetName: Scalars['String'];
    changes?: Maybe<Array<Maybe<EnvironmentDeploymentCloudFormationStackDeploymentChangeSetChangeV2>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    statusReason?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentCloudFormationStackDeploymentEventV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentEventV2';
    /**
   * * **Constraints**
   *   * Required
   */
    logicalResourceId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    timestamp: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceStatus: Scalars['String'];
    resourceStatusReason?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentCloudFormationStackDeploymentInfoV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentInfoV2';
    stackName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `RegionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 16
   *   * Pattern: `/^(us(?:-gov)?|af|ap|ca|cn|eu|sa)-(central|(?:north|south)?(?:east|west)?)-(\d+)$/`
   */
    region?: Maybe<Scalars['String']>;
    stackId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    statusReason?: Maybe<Scalars['String']>;
    stackTemplate?: Maybe<Scalars['String']>;
    stackRoleArn?: Maybe<Scalars['String']>;
    rollbackOnFailure?: Maybe<Scalars['Boolean']>;
    rollbackConfiguration?: Maybe<EnvironmentDeploymentCloudFormationStackDeploymentRollbackConfigurationV2>;
    changeSet?: Maybe<EnvironmentDeploymentCloudFormationStackDeploymentChangeSetV2>;
    stackEvents?: Maybe<Array<Maybe<EnvironmentDeploymentCloudFormationStackDeploymentEventV2>>>;
    parameters?: Maybe<Array<Maybe<EnvironmentDeploymentCloudFormationStackDeploymentParameterV2>>>;
    outputs?: Maybe<Array<Maybe<EnvironmentDeploymentCloudFormationStackDeploymentOutputV2>>>;
    resourceCount?: Maybe<Scalars['Int']>;
};

export type EnvironmentDeploymentCloudFormationStackDeploymentOutputV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentOutputV2';
    /**
   * * **Constraints**
   *   * Required
   */
    outputKey: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    outputValue: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    exportName?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentCloudFormationStackDeploymentParameterV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentParameterV2';
    /**
   * * **Constraints**
   *   * Required
   */
    parameterKey: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    parameterValue: Scalars['String'];
    resolvedValue?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentCloudFormationStackDeploymentRollbackConfigurationV2 = {
    __typename?: 'EnvironmentDeploymentCloudFormationStackDeploymentRollbackConfigurationV2';
    /**
   * * **Constraints**
   *   * Required
   */
    alarmArns: Array<Maybe<Scalars['String']>>;
    monitoringTime?: Maybe<Scalars['Int']>;
};

export type EnvironmentDeploymentConnectionInfoV2 = {
    __typename?: 'EnvironmentDeploymentConnectionInfoV2';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    roleName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    roleId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    accountConnectionName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    accountConnectionId?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentEcsServiceDeploymentInfoV2 = {
    __typename?: 'EnvironmentDeploymentEcsServiceDeploymentInfoV2';
    clusterName?: Maybe<Scalars['String']>;
    serviceName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `RegionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 16
   *   * Pattern: `/^(us(?:-gov)?|af|ap|ca|cn|eu|sa)-(central|(?:north|south)?(?:east|west)?)-(\d+)$/`
   */
    region?: Maybe<Scalars['String']>;
    deploymentController?: Maybe<Scalars['String']>;
    codedeployApplicationName?: Maybe<Scalars['String']>;
    codedeployDeploymentGroupName?: Maybe<Scalars['String']>;
    codedeployDeploymentId?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentSourceInfoV2 = {
    __typename?: 'EnvironmentDeploymentSourceInfoV2';
    sourceRepositoryName?: Maybe<Scalars['String']>;
    sourceBranchName?: Maybe<Scalars['String']>;
    sourceCommitId?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentTargetDetails = {
    __typename?: 'EnvironmentDeploymentTargetDetails';
    environmentId?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    deploymentTargetInfo?: Maybe<DeploymentTargetInfo>;
    ecsServiceInfo?: Maybe<EcsServiceDeploymentTargetInfo>;
    cfnStackInfo?: Maybe<CfnStackDeploymentTargetInfo>;
    workflowId?: Maybe<Scalars['String']>;
    workflowName?: Maybe<Scalars['String']>;
};

export type EnvironmentDeploymentTriggerInfoV2 = {
    __typename?: 'EnvironmentDeploymentTriggerInfoV2';
    triggerEventId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    triggerEventType: Scalars['String'];
    triggerEventActor?: Maybe<Scalars['String']>;
    triggerEventUser?: Maybe<GetPersonOutput>;
};

export type EnvironmentDeploymentWorkflowActionInfoV2 = {
    __typename?: 'EnvironmentDeploymentWorkflowActionInfoV2';
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    workflowExecutionId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowActionExecutionId: Scalars['String'];
    workflowActionName?: Maybe<Scalars['String']>;
    workflowActionIdentifier?: Maybe<Scalars['String']>;
};

export type EnvironmentDescriptor = {
    __typename?: 'EnvironmentDescriptor';
    provider?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
};

export type EnvironmentFilterInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    value: Scalars['String'];
    /**
   * * **Simple Shape:** `EnvironmentFilterComparator`
   * * **Constraints**
   *   * Required
   */
    condition: Scalars['String'];
};

export type EnvironmentInfo = {
    __typename?: 'EnvironmentInfo';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    environmentId?: Maybe<Scalars['String']>;
};

export type EnvironmentOrderingInput = {
    /**
   * * **Simple Shape:** `EnvironmentOrderingKey`
   * * **Constraints**
   *   * Required
   */
    key: Scalars['String'];
    /** * **Simple Shape:** `EnvironmentOrderingDirection` */
    direction?: Maybe<Scalars['String']>;
};

export type EnvironmentStackSummary = {
    __typename?: 'EnvironmentStackSummary';
    name?: Maybe<Scalars['String']>;
    environment?: Maybe<EnvironmentInfo>;
    connection?: Maybe<ConnectionInfo>;
    descriptor?: Maybe<EnvironmentDescriptor>;
    updateTime?: Maybe<Scalars['String']>;
};

export type EnvironmentSummary = {
    __typename?: 'EnvironmentSummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
    updateTime?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `EnvironmentType` */
    environmentType?: Maybe<Scalars['String']>;
};

export type ExecuteCommandSessionConfiguration = {
    __typename?: 'ExecuteCommandSessionConfiguration';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    command: Scalars['String'];
    arguments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ExecuteCommandSessionConfigurationInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    command: Scalars['String'];
    arguments?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ExtensionInstallationSummary = {
    __typename?: 'ExtensionInstallationSummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    extensionId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    extensionVersion: Scalars['String'];
};

export type ExtensionIssueScopeSummary = {
    __typename?: 'ExtensionIssueScopeSummary';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    providerCanonicalId?: Maybe<Scalars['String']>;
    providerCanonicalUrl?: Maybe<Scalars['String']>;
};

export type ExtensionIssueSummary = {
    __typename?: 'ExtensionIssueSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    creator: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    createdTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    shortId: Scalars['String'];
    assignees?: Maybe<Array<Maybe<Scalars['String']>>>;
    priority?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    issueType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerCanonicalId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerCanonicalUrl: Scalars['String'];
};

export type FilterInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    key: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    values: Array<Maybe<Scalars['String']>>;
    comparisonOperator?: Maybe<Scalars['String']>;
};

export type FilterListInput = {
    filters?: Maybe<Array<Maybe<FilterInput>>>;
    operation?: Maybe<Scalars['String']>;
};

export type FilterListMigrationInput = {
    filters?: Maybe<Array<Maybe<FilterInput>>>;
    operation?: Maybe<Scalars['String']>;
};

export type FleetStatusContext = {
    __typename?: 'FleetStatusContext';
    code?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
};

export type FooSummary = {
    __typename?: 'FooSummary';
    name?: Maybe<Scalars['String']>;
};

export type GetActionRunArtifactMetadataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    artifactActionId: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactNameString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[a-zA-Z0-9_-]+$/`
   */
    artifactName: Scalars['String'];
};

export type GetActionRunArtifactMetadataOutput = {
    __typename?: 'GetActionRunArtifactMetadataOutput';
    downloadUrl?: Maybe<Scalars['String']>;
};

export type GetActionRunInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetActionRunOutput = {
    __typename?: 'GetActionRunOutput';
    id?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `ActionRunStatus` */
    status?: Maybe<Scalars['String']>;
    currentPhase?: Maybe<Scalars['String']>;
    computeDetails?: Maybe<ActionRunComputeDetails>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    environment?: Maybe<ActionRunEnvironment>;
    reports?: Maybe<Array<Maybe<ActionRunReport>>>;
    phases?: Maybe<Array<Maybe<ActionRunPhaseMetadata>>>;
    connectionDetails?: Maybe<ActionRunConnectionDetails>;
    workflowId?: Maybe<Scalars['String']>;
    workflowRunId?: Maybe<Scalars['String']>;
};

export type GetArtifactPackageInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
};

export type GetArtifactPackageOutput = {
    __typename?: 'GetArtifactPackageOutput';
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    originConfiguration?: Maybe<ArtifactPackageOriginConfiguration>;
};

export type GetArtifactPackageVersionInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    packageVersion: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
};

export type GetArtifactPackageVersionOutput = {
    __typename?: 'GetArtifactPackageVersionOutput';
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    displayName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    version?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    homePage?: Maybe<Scalars['String']>;
    sourceCodeRepository?: Maybe<Scalars['String']>;
    publishedTime?: Maybe<Scalars['String']>;
    licenses?: Maybe<Array<Maybe<ArtifactPackageVersionLicense>>>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionRevisionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    revision?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    status?: Maybe<Scalars['String']>;
    origin?: Maybe<ArtifactPackageVersionOrigin>;
};

export type GetArtifactPackageVersionReadmeInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    packageVersion: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
};

export type GetArtifactPackageVersionReadmeOutput = {
    __typename?: 'GetArtifactPackageVersionReadmeOutput';
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    version?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionRevisionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    revision?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `ArtifactPackageVersionReadmeString` */
    readme?: Maybe<Scalars['String']>;
};

export type GetArtifactRepositoryEndpointInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    packageFormat: Scalars['String'];
};

export type GetArtifactRepositoryEndpointOutput = {
    __typename?: 'GetArtifactRepositoryEndpointOutput';
    /** * **Simple Shape:** `ArtifactRepositoryEndpointUrl` */
    url?: Maybe<Scalars['String']>;
};

export type GetArtifactRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name: Scalars['String'];
};

export type GetAuthenticationRedirectOutput = {
    __typename?: 'GetAuthenticationRedirectOutput';
    redirect?: Maybe<Scalars['String']>;
};

export type GetAuthenticationRedirectRequestInput = {
    state?: Maybe<Scalars['String']>;
    callbackUri?: Maybe<Scalars['String']>;
    tenant?: Maybe<Scalars['String']>;
};

export type GetAwsAccountOutput = {
    __typename?: 'GetAwsAccountOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountName: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountId: Scalars['String'];
    /**
   * * **Simple Shape:** `AwsAccountStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    requesterId: GetPersonOutput;
    accountConnectionToken?: Maybe<Scalars['String']>;
    connectionRequestedFeatures?: Maybe<Array<Maybe<ConnectionFeature>>>;
    connectionId?: Maybe<Scalars['String']>;
};

export type GetAwsAccountRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
};

export type GetAwsAccountRoleOutput = {
    __typename?: 'GetAwsAccountRoleOutput';
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    roleName: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    roleArn: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccountId: Scalars['String'];
    roleDescription?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
};

export type GetAwsAccountRoleRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    roleName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 64
   *   * Pattern: `/[\w+=,.@-]+/`
   */
    name?: Maybe<Scalars['String']>;
};

export type GetBarInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetBarOutput = {
    __typename?: 'GetBarOutput';
    name?: Maybe<Scalars['String']>;
    versionId?: Maybe<Scalars['String']>;
};

export type GetBlueprintOutput = {
    __typename?: 'GetBlueprintOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    packageUri: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    publishDate: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    declarationAst: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    author: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    defaults: Scalars['String'];
    referenceAsts?: Maybe<Array<Maybe<ReferenceAstsMap>>>;
    license?: Maybe<Scalars['String']>;
    homepage?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    readme?: Maybe<Scalars['String']>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
    mediaUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GetBlueprintPreviewFileOutput = {
    __typename?: 'GetBlueprintPreviewFileOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    fileContent: Scalars['String'];
};

export type GetBlueprintPreviewFileRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sessionId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    synthesisId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    filePath: Scalars['String'];
};

export type GetBlueprintPreviewFolderOutput = {
    __typename?: 'GetBlueprintPreviewFolderOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    files: Array<Maybe<Scalars['String']>>;
    /**
   * * **Constraints**
   *   * Required
   */
    subFolders: Array<Maybe<Scalars['String']>>;
};

export type GetBlueprintPreviewFolderRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sessionId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    synthesisId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    folderPath: Scalars['String'];
};

export type GetBlueprintPreviewOutput = {
    __typename?: 'GetBlueprintPreviewOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    bundle?: Maybe<Scalars['String']>;
    overview?: Maybe<PreviewOverview>;
};

export type GetBlueprintPreviewRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sessionId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    synthesisId: Scalars['String'];
};

export type GetBlueprintRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    publisher: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
};

export type GetBuildInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    workflowId?: Maybe<Scalars['String']>;
    workflowRunId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    buildId: Scalars['String'];
};

export type GetBuildLogsInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    buildId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    workflowId?: Maybe<Scalars['String']>;
    workflowRunId?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
    paginationToken?: Maybe<Scalars['String']>;
    tailLogs?: Maybe<Scalars['Boolean']>;
};

export type GetBuildLogsOutput = {
    __typename?: 'GetBuildLogsOutput';
    nextToken?: Maybe<Scalars['String']>;
    previousToken?: Maybe<Scalars['String']>;
    events?: Maybe<Array<Maybe<BuildLog>>>;
};

export type GetCodeCoverageReportInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetCodeCoverageReportInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetCodeCoverageReportOutput = {
    __typename?: 'GetCodeCoverageReportOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    creationTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lineCoverage: LineCoverageResult;
    branchCoverage?: Maybe<BranchCoverageResult>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    workflowName?: Maybe<Scalars['String']>;
    actionName?: Maybe<Scalars['String']>;
    actionType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetails>>>;
    directoryLevelCoverages?: Maybe<Array<Maybe<DirectoryLevelCoverage>>>;
};

export type GetCodeCoverageReportOutputMigration = {
    __typename?: 'GetCodeCoverageReportOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    creationTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lineCoverage: LineCoverageResultMigration;
    branchCoverage?: Maybe<BranchCoverageResultMigration>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    workflowName?: Maybe<Scalars['String']>;
    actionName?: Maybe<Scalars['String']>;
    actionType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetailsMigration>>>;
    directoryLevelCoverages?: Maybe<Array<Maybe<DirectoryLevelCoverageMigration>>>;
};

export type GetCodeCoverageRunResultsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetCodeCoverageRunResultsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetComputeActionInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    workflowId: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    computeActionId: Scalars['String'];
};

export type GetComputeFleetInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetConnectionInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerId: Scalars['String'];
};

export type GetDeploymentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    workflowActionRunId: Scalars['String'];
};

export type GetDeploymentOutput = {
    __typename?: 'GetDeploymentOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    stackName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionStatus: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    environment: EnvironmentInfo;
    /**
   * * **Constraints**
   *   * Required
   */
    connection: ConnectionInfo;
    /**
   * * **Constraints**
   *   * Required
   */
    stackRoleArn: Scalars['String'];
    rollbackOnFailure?: Maybe<Scalars['Boolean']>;
    changeSet?: Maybe<CloudFormationChangeSet>;
    stackEvents?: Maybe<Array<Maybe<CloudFormationStackEvent>>>;
    actionStatusReason?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    stackTemplate: CloudFormationStackTemplate;
    rollbackConfiguration?: Maybe<DeploymentRollbackConfiguration>;
    deploymentTargetDetails?: Maybe<GetDeploymentTargetOutput>;
};

export type GetDeploymentTargetInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowActionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    deploymentTargetId: Scalars['String'];
};

export type GetDeploymentTargetOutput = {
    __typename?: 'GetDeploymentTargetOutput';
    description?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    outputs?: Maybe<Array<Maybe<CloudFormationStackOutput>>>;
    parameters?: Maybe<Array<Maybe<CloudFormationStackParameter>>>;
    resourceCount?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `RegionString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 16
   *   * Pattern: `/^(us(?:-gov)?|af|ap|ca|cn|eu|sa)-(central|(?:north|south)?(?:east|west)?)-(\d+)$/`
   */
    region: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    stackId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    statusReason?: Maybe<Scalars['String']>;
};

export type GetDevelopmentWorkspaceOutput = {
    __typename?: 'GetDevelopmentWorkspaceOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    creatorId: Scalars['String'];
    /** * **Simple Shape:** `IDEType` */
    ide?: Maybe<Scalars['String']>;
    labels?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `WorkspaceStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositories: Array<Maybe<DevelopmentWorkspaceRepositorySummary>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 128
   */
    alias?: Maybe<Scalars['String']>;
    ides?: Maybe<Array<Maybe<Ide>>>;
    /** * **Simple Shape:** `InstanceType` */
    instanceType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InactivityTimeoutMinutes`
   * * **Constraints**
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 1200
   */
    inactivityTimeoutMinutes?: Maybe<Scalars['Int']>;
    persistentStorage?: Maybe<PersistentStorage>;
};

export type GetDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
};

export type GetDummyDataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetDummyDataLambdaInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetDummyDataLambdaOutput = {
    __typename?: 'GetDummyDataLambdaOutput';
    name?: Maybe<Scalars['String']>;
};

export type GetDummyDataOutput = {
    __typename?: 'GetDummyDataOutput';
    name?: Maybe<Scalars['String']>;
    foo?: Maybe<ListFooOutput>;
};


export type GetDummyDataOutputFooArgs = {
    nextToken?: Maybe<Scalars['String']>;
    pageSize?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
};

export type GetDummyDataServiceInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetDummyDataServiceOutput = {
    __typename?: 'GetDummyDataServiceOutput';
    name?: Maybe<Scalars['String']>;
};

export type GetEnvironmentDeploymentV2Input = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    deploymentId: Scalars['String'];
};

export type GetEnvironmentDeploymentV2Output = {
    __typename?: 'GetEnvironmentDeploymentV2Output';
    details?: Maybe<DeploymentDetailsV2>;
};

export type GetEnvironmentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetEnvironmentOutput = {
    __typename?: 'GetEnvironmentOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
    updateTime?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `EnvironmentType` */
    environmentType?: Maybe<Scalars['String']>;
};

export type GetEnvironmentResourceMetadataOutput = {
    __typename?: 'GetEnvironmentResourceMetadataOutput';
    data?: Maybe<Scalars['String']>;
};

export type GetEnvironmentResourceMetadataRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleArn: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    serviceName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    actionName: Scalars['String'];
    params?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `RegionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 16
   *   * Pattern: `/^(us(?:-gov)?|af|ap|ca|cn|eu|sa)-(central|(?:north|south)?(?:east|west)?)-(\d+)$/`
   */
    regionName?: Maybe<Scalars['String']>;
    filters?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GetEnvironmentStackInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetEnvironmentStackOutput = {
    __typename?: 'GetEnvironmentStackOutput';
    name?: Maybe<Scalars['String']>;
    environment?: Maybe<EnvironmentInfo>;
    connection?: Maybe<ConnectionInfo>;
    descriptor?: Maybe<EnvironmentDescriptor>;
    updateTime?: Maybe<Scalars['String']>;
};

export type GetExtensionInstallationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    extensionId: Scalars['String'];
};

export type GetExtensionIssueScopeInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
};

export type GetFooInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    dummyDataName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetFooOutput = {
    __typename?: 'GetFooOutput';
    name?: Maybe<Scalars['String']>;
};

export type GetIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
};

export type GetIssueOutput = {
    __typename?: 'GetIssueOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    item: IssueObject;
};

export type GetIssueRequestMigrationInput = {
    /**
   * * **Simple Shape:** `IssueId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
};

export type GetIssueResponseMigration = {
    __typename?: 'GetIssueResponseMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    item: IssueObjectMigration;
};

export type GetIssueStoreInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
};

export type GetIssueStoreOutput = {
    __typename?: 'GetIssueStoreOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    item: IssueStoreObject;
};

export type GetIssueStoreRequestMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
};

export type GetIssueStoreResponseMigration = {
    __typename?: 'GetIssueStoreResponseMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    item: IssueStoreObjectMigration;
};

export type GetNotificationChannelOutput = {
    __typename?: 'GetNotificationChannelOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    alias: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationChannelType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationChannelDetails;
};

export type GetNotificationChannelRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetNotificationClientMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
};

export type GetNotificationClientMigrationOutput = {
    __typename?: 'GetNotificationClientMigrationOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationClientType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationClientDetails;
};

export type GetNotificationClientOutput = {
    __typename?: 'GetNotificationClientOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationClientType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationClientDetails;
};

export type GetNotificationClientRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
};

export type GetOnboardingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    onboardingId: Scalars['String'];
};

export type GetOrganizationActivityFeedInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actors?: Maybe<Array<Maybe<OrganizationActivityFeedParticipantInput>>>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    participants?: Maybe<Array<Maybe<OrganizationActivityFeedParticipantInput>>>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    types?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    count?: Maybe<Scalars['Int']>;
    rangeStart?: Maybe<Scalars['String']>;
    rangeEnd?: Maybe<Scalars['String']>;
    sortBy?: Maybe<Scalars['String']>;
};

export type GetOrganizationActivityFeedOutput = {
    __typename?: 'GetOrganizationActivityFeedOutput';
    items?: Maybe<Array<Maybe<OrganizationActivityFeedItem>>>;
};

export type GetOrganizationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetOrganizationInvitationOutput = {
    __typename?: 'GetOrganizationInvitationOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    timestamp: Scalars['String'];
    inviterUserName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeEmailAddress: Scalars['String'];
    inviteeDisplayName?: Maybe<Scalars['String']>;
    signupEmailAddress?: Maybe<Scalars['String']>;
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InvitationStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `OrganizationRoles`
   * * **Constraints**
   *   * Required
   */
    inviteeRole: Scalars['String'];
};

export type GetOrganizationInvitationRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    organizationInvitationId: Scalars['String'];
};

export type GetOrganizationOutput = {
    __typename?: 'GetOrganizationOutput';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    regionName?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    projects?: Maybe<ListProjectsOutput>;
};


export type GetOrganizationOutputProjectsArgs = {
    nextToken?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
};

export type GetOrganizationRoleMappingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
};

export type GetPersonByUserNameRequestInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    userName: Scalars['String'];
};

export type GetPersonOutput = {
    __typename?: 'GetPersonOutput';
    userId?: Maybe<Scalars['String']>;
    userName?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    primaryEmail?: Maybe<EmailAddress>;
    version?: Maybe<Scalars['String']>;
};

export type GetPersonRequestInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetProjectActivityFeedInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actors?: Maybe<Array<Maybe<ProjectActivityFeedParticipantInput>>>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    participants?: Maybe<Array<Maybe<ProjectActivityFeedParticipantInput>>>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    types?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    count?: Maybe<Scalars['Int']>;
    rangeStart?: Maybe<Scalars['String']>;
    rangeEnd?: Maybe<Scalars['String']>;
    sortBy?: Maybe<Scalars['String']>;
};

export type GetProjectActivityFeedOutput = {
    __typename?: 'GetProjectActivityFeedOutput';
    items?: Maybe<Array<Maybe<ProjectActivityFeedItem>>>;
};

export type GetProjectInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetProjectInvitationByIdOutput = {
    __typename?: 'GetProjectInvitationByIdOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    projectInvitation: ProjectInvitation;
};

export type GetProjectInvitationByIdRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    projectInvitationId: Scalars['String'];
};

export type GetProjectMetricsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `MetricType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    event: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    measurement?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `MetricAggregationType`
   * * **Constraints**
   *   * Required
   */
    aggregation: Scalars['String'];
    intervalInMinutes?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Required
   */
    from: Scalars['String'];
    to?: Maybe<Scalars['String']>;
    filters?: Maybe<Array<Maybe<MetricFilterMapInput>>>;
};

export type GetProjectMetricsOutput = {
    __typename?: 'GetProjectMetricsOutput';
    histogram?: Maybe<MetricHistogramResult>;
    buckets?: Maybe<MetricBucketResult>;
    value?: Maybe<MetricValueResult>;
};

export type GetProjectNotificationSettingsOutput = {
    __typename?: 'GetProjectNotificationSettingsOutput';
    /**
   * * **Simple Shape:** `Locale`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[a-zA-Z_-]{2,16}$/`
   */
    locale: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    settings: Array<Maybe<ProjectNotificationSettingsItem>>;
};

export type GetProjectNotificationSettingsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
};

export type GetProjectOutput = {
    __typename?: 'GetProjectOutput';
    id?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    templateArn?: Maybe<Scalars['String']>;
    templateParams?: Maybe<Array<Maybe<TemplateParamsMap>>>;
    additionalFields?: Maybe<Array<Maybe<ProjectAdditionalFieldsMap>>>;
    versionId?: Maybe<Scalars['String']>;
};

export type GetProjectRoleMappingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    projectId: Scalars['String'];
};

export type GetProjectStatusInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
};

export type GetProjectStatusOutput = {
    __typename?: 'GetProjectStatusOutput';
    status?: Maybe<Scalars['String']>;
    reason?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type GetPullRequestRequirementStatusInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    revisionNumber?: Maybe<Scalars['String']>;
};

export type GetPullRequestRequirementStatusOutput = {
    __typename?: 'GetPullRequestRequirementStatusOutput';
    sourceCommitSha1?: Maybe<Scalars['String']>;
    mergeBaseCommitSha1?: Maybe<Scalars['String']>;
    destinationCommitSha1?: Maybe<Scalars['String']>;
    mergeOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
    mergeRequirementsMet?: Maybe<Scalars['Boolean']>;
    mergeRequirements?: Maybe<SourcePullRequestMergeRequirements>;
};

export type GetRoleMappingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetRoleMappingMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetSshPublicKeyOutput = {
    __typename?: 'GetSSHPublicKeyOutput';
    /**
   * * **Simple Shape:** `SSHPublicKeyBodyString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 5000
   */
    SSHPublicKeyBody: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyImportDateTimestamp`
   * * **Constraints**
   *   * Required
   */
    importDate: Scalars['String'];
};

export type GetSshPublicKeyRequestInput = {
    /**
   * * **Simple Shape:** `SSHPublicKeyIdString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[A-Fa-f0-9]{64}$/`
   */
    SSHPublicKeyId: Scalars['String'];
};

export type GetSecretInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetSecretValueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type GetSecretValueOutput = {
    __typename?: 'GetSecretValueOutput';
    value?: Maybe<Scalars['String']>;
};

export type GetSlackCredentialsMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `OAuthVersion`
   * * **Constraints**
   *   * Required
   */
    oAuthVersion: Scalars['String'];
};

export type GetSlackCredentialsMigrationOutput = {
    __typename?: 'GetSlackCredentialsMigrationOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    state: Scalars['String'];
    /**
   * * **Simple Shape:** `SlackClientId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9.]{0,32}$/`
   */
    clientId: Scalars['String'];
    /**
   * * **Simple Shape:** `SlackPermissionScope`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[a-z_.:,]{0,128}$/`
   */
    scope: Scalars['String'];
};

export type GetSlackCredentialsOutput = {
    __typename?: 'GetSlackCredentialsOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    state: Scalars['String'];
    /**
   * * **Simple Shape:** `SlackClientId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9.]{0,32}$/`
   */
    clientId: Scalars['String'];
    /**
   * * **Simple Shape:** `SlackPermissionScope`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[a-z_.:,]{0,128}$/`
   */
    scope: Scalars['String'];
};

export type GetSlackCredentialsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `OAuthVersion`
   * * **Constraints**
   *   * Required
   */
    oAuthVersion: Scalars['String'];
};

export type GetSoftwareCompositionAnalysisFindingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    findingId: Scalars['String'];
};

export type GetSoftwareCompositionAnalysisFindingInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    findingId: Scalars['String'];
};

export type GetSoftwareCompositionAnalysisReportInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportId: Scalars['String'];
};

export type GetSoftwareCompositionAnalysisReportInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportId: Scalars['String'];
};

export type GetSoftwareCompositionAnalysisReportOutput = {
    __typename?: 'GetSoftwareCompositionAnalysisReportOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanStatistics: SoftwareCompositionAnalysisScanStatistics;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    pullRequestId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    rawReportFiles: SoftwareCompositionAnalysisReportSourceFiles;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryLevelFindings: Array<Maybe<SoftwareCompositionAnalysisDirectoryLevelFinding>>;
    /**
   * * **Constraints**
   *   * Required
   */
    toolDetails: SoftwareCompositionAnalysisToolDetails;
    /**
   * * **Constraints**
   *   * Required
   */
    scanRunTime: Scalars['String'];
};

export type GetSoftwareCompositionAnalysisReportOutputMigration = {
    __typename?: 'GetSoftwareCompositionAnalysisReportOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanStatistics: SoftwareCompositionAnalysisScanStatisticsMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    pullRequestId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    rawReportFiles: SoftwareCompositionAnalysisReportSourceFilesMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryLevelFindings: Array<Maybe<SoftwareCompositionAnalysisDirectoryLevelFindingMigration>>;
    /**
   * * **Constraints**
   *   * Required
   */
    toolDetails: SoftwareCompositionAnalysisToolDetailsMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    scanRunTime: Scalars['String'];
};

export type GetSoftwareTestingReportInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportId: Scalars['String'];
};

export type GetSoftwareTestingReportInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportId: Scalars['String'];
};

export type GetSoftwareTestingReportOutput = {
    __typename?: 'GetSoftwareTestingReportOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    latestReportRun: SoftwareTestingReportRunDetails;
};

export type GetSoftwareTestingReportOutputMigration = {
    __typename?: 'GetSoftwareTestingReportOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    latestReportRun: SoftwareTestingReportRunDetailsMigration;
};

export type GetSourceBranchInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName: Scalars['String'];
};

export type GetSourceCommitInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourceCommitSha1: Scalars['String'];
};

export type GetSourceFileInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourceFilePath: Scalars['String'];
    sourceCommitSha1?: Maybe<Scalars['String']>;
};

export type GetSourceFolderInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourceFolderPath: Scalars['String'];
    sourceCommitSha1?: Maybe<Scalars['String']>;
};

export type GetSourcePullRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
};

export type GetSourceRepositoryCloneUrlsInput = {
    username: Scalars['String'];
    repositoryName: Scalars['String'];
    organizationName: Scalars['String'];
    projectName: Scalars['String'];
};

export type GetSourceRepositoryCommitHistoryInput = {
    repositoryName: Scalars['String'];
    headCommitId: Scalars['String'];
    tailCommitId?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
    organizationId?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
};

export type GetSourceRepositoryCommitInput = {
    repositoryName: Scalars['String'];
    commitId: Scalars['String'];
    organizationId?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
};

export type GetSourceRepositoryFileInput = {
    commitSpecifier?: Maybe<Scalars['String']>;
    filePath: Scalars['String'];
    repositoryName: Scalars['String'];
    organizationId?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
};

export type GetSourceRepositoryFolderInput = {
    commitSpecifier?: Maybe<Scalars['String']>;
    folderPath: Scalars['String'];
    repositoryName: Scalars['String'];
    organizationId?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
};

export type GetSourceRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
};

export type GetSourceRespositoryCommitDifferencesInput = {
    repositoryId: Scalars['String'];
    organizationId: Scalars['String'];
    projectId: Scalars['String'];
    beforeCommitSpecifier?: Maybe<Scalars['String']>;
    beforePath?: Maybe<Scalars['String']>;
    afterCommitSpecifier: Scalars['String'];
    afterPath?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    sizeInBytes?: Maybe<Scalars['Int']>;
    diffView: Scalars['String'];
    ignoreWhitespace?: Maybe<Scalars['Boolean']>;
    unhighlightedLargeDiff?: Maybe<Scalars['Boolean']>;
};

export type GetStaticAnalysisFindingOutput = {
    __typename?: 'GetStaticAnalysisFindingOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 3000
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 256
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    severity: AnalysisFindingSeverity;
    /** * **Simple Shape:** `AnalysisFindingScore` */
    score?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 1024
   */
    category?: Maybe<Scalars['String']>;
    message?: Maybe<AnalysisFindingMessage>;
    /**
   * * **Constraints**
   *   * Required
   */
    rule: AnalysisFindingRule;
    recommendation?: Maybe<AnalysisFindingRecommendation>;
    location?: Maybe<AnalysisFindingLocation>;
    relatedLocations?: Maybe<RelatedLocations>;
    additionalToolProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 256
   */
    status?: Maybe<Scalars['String']>;
    estimate?: Maybe<AnalysisFindingEstimate>;
};

export type GetStaticAnalysisFindingRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    id: Scalars['String'];
};

export type GetStaticAnalysisReportOutput = {
    __typename?: 'GetStaticAnalysisReportOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanStatistics: StaticAnalysisScanStatistics;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    pullRequestId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    rawReportFiles: StaticAnalysisReportSourceFiles;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryLevelFindings: Array<Maybe<StaticAnalysisDirectoryLevelFinding>>;
    /**
   * * **Constraints**
   *   * Required
   */
    toolDetails: StaticAnalysisToolDetails;
    /**
   * * **Constraints**
   *   * Required
   */
    scanRunTime: Scalars['String'];
};

export type GetStaticAnalysisReportRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 256
   */
    id: Scalars['String'];
};

export type GetTeamInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetTestActionMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    testId: Scalars['String'];
};

export type GetTestActionRunRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type GetTestCaseRunResultsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetTestCaseRunResultsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetTestReportInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetTestReportInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetTestReportOutput = {
    __typename?: 'GetTestReportOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    testRunStartTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    durationInNanoseconds: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    testRunResult: TestRunResult;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    parentTestSummaryId?: Maybe<Scalars['String']>;
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetails>>>;
    runCount?: Maybe<Scalars['Int']>;
    runNumber?: Maybe<Scalars['Int']>;
    testSummaryType?: Maybe<Scalars['String']>;
    testGroups?: Maybe<Array<Maybe<TestGroup>>>;
};

export type GetTestReportOutputMigration = {
    __typename?: 'GetTestReportOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    testRunStartTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    durationInNanoseconds: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    testRunResult: TestRunResultMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    parentTestSummaryId?: Maybe<Scalars['String']>;
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetailsMigration>>>;
    runCount?: Maybe<Scalars['Int']>;
    runNumber?: Maybe<Scalars['Int']>;
    testSummaryType?: Maybe<Scalars['String']>;
    testGroups?: Maybe<Array<Maybe<TestGroupMigration>>>;
};

export type GetTestReportStatusInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetTestReportStatusInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type GetTestReportStatusOutput = {
    __typename?: 'GetTestReportStatusOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    phaseHistory: Array<Maybe<TestReportStatusPhaseDetails>>;
};

export type GetTestReportStatusOutputMigration = {
    __typename?: 'GetTestReportStatusOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    phaseHistory: Array<Maybe<TestReportStatusPhaseDetailsMigration>>;
};

export type GetUserDetailsOutput = {
    __typename?: 'GetUserDetailsOutput';
    userId?: Maybe<Scalars['String']>;
    userName?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    primaryEmail?: Maybe<EmailAddress>;
    version?: Maybe<Scalars['String']>;
};

export type GetUserDetailsRequestInput = {
    id?: Maybe<Scalars['String']>;
    userName?: Maybe<Scalars['String']>;
};

export type GetUserNotificationSettingsOutput = {
    __typename?: 'GetUserNotificationSettingsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    settings: Array<Maybe<UserNotificationSettingsItem>>;
};

export type GetUserNotificationSettingsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
};

export type GetWorkflowInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    workflowVersion?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
};

export type GetWorkflowRunInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
};

export type GetWorkflowRunOutput = {
    __typename?: 'GetWorkflowRunOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflow: WorkflowSummary;
    /**
   * * **Constraints**
   *   * Required
   */
    triggerEventId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    triggerEventType: Scalars['String'];
    triggerEventActor?: Maybe<GetPersonOutput>;
    /**
   * * **Constraints**
   *   * Required
   */
    runMode: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    statusReasons?: Maybe<Array<Maybe<WorkflowRunStatusReason>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionStates: Array<Maybe<ActionState>>;
    /**
   * * **Constraints**
   *   * Required
   */
    startTime: Scalars['String'];
    endTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    metadata?: Maybe<Array<Maybe<WorkflowRunMetadata>>>;
};

export type GetWorkflowStateInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
};

export type GetWorkflowStateOutput = {
    __typename?: 'GetWorkflowStateOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionStates: Array<Maybe<WorkflowActionState>>;
    inboundTransitionStates?: Maybe<Array<Maybe<InboundTransitionState>>>;
};

export type Ide = {
    __typename?: 'Ide';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 400
   */
    runtime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 128
   */
    name?: Maybe<Scalars['String']>;
};

export type IdeConfiguration = {
    __typename?: 'IdeConfiguration';
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 400
   */
    runtime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 128
   */
    name?: Maybe<Scalars['String']>;
};

export type IdeConfigurationInput = {
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 400
   */
    runtime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 128
   */
    name?: Maybe<Scalars['String']>;
};

export type ImportSshPublicKeyOutput = {
    __typename?: 'ImportSSHPublicKeyOutput';
    /**
   * * **Simple Shape:** `SSHPublicKeyIdString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[A-Fa-f0-9]{64}$/`
   */
    SSHPublicKeyId: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyImportDateTimestamp`
   * * **Constraints**
   *   * Required
   */
    importDate: Scalars['String'];
};

export type ImportSshPublicKeyRequestInput = {
    /**
   * * **Simple Shape:** `SSHPublicKeyBodyString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 5000
   */
    SSHPublicKeyBody: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name: Scalars['String'];
};

export type InboundRun = {
    __typename?: 'InboundRun';
    workflowRunId?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};

export type InboundTransitionState = {
    __typename?: 'InboundTransitionState';
    actionGroupNames?: Maybe<Array<Maybe<Scalars['String']>>>;
    actionNames?: Maybe<Array<Maybe<Scalars['String']>>>;
    inboundRuns?: Maybe<Array<Maybe<InboundRun>>>;
};

export type IssueComment = {
    __typename?: 'IssueComment';
    id?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    authorId?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
};

export type IssueCustomField = {
    __typename?: 'IssueCustomField';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueCustomFieldType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1000
   */
    value: Scalars['String'];
};

export type IssueCustomFieldInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueCustomFieldType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1000
   */
    value: Scalars['String'];
};

export type IssueCustomFieldMigration = {
    __typename?: 'IssueCustomFieldMigration';
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueCustomFieldTypeMigration`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1023
   */
    value: Scalars['String'];
};

export type IssueCustomFieldMigrationInput = {
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueCustomFieldTypeMigration`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1023
   */
    value: Scalars['String'];
};

export type IssueMetadata = {
    __typename?: 'IssueMetadata';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    version: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    shortId?: Maybe<Scalars['String']>;
};

export type IssueMetadataMigration = {
    __typename?: 'IssueMetadataMigration';
    /**
   * * **Simple Shape:** `IssueId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    versionId: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    updatedAt: Scalars['String'];
};

export type IssueObject = {
    __typename?: 'IssueObject';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    version: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    storeId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    archived: Scalars['Boolean'];
    blocked?: Maybe<Scalars['Boolean']>;
    assigneeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    createdTime?: Maybe<Scalars['String']>;
    creator?: Maybe<Scalars['String']>;
    lastUpdatedBy?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `IssuePriority` */
    priority?: Maybe<Scalars['String']>;
    references?: Maybe<Array<Maybe<IssueReference>>>;
    comments?: Maybe<Array<Maybe<IssueComment>>>;
    labelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    position?: Maybe<Scalars['Float']>;
    /**
   * * **Simple Shape:** `Estimate`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 99
   */
    estimate?: Maybe<Scalars['Int']>;
    shortId?: Maybe<Scalars['String']>;
    customFields?: Maybe<Array<Maybe<IssueCustomField>>>;
};

export type IssueObjectMigration = {
    __typename?: 'IssueObjectMigration';
    /**
   * * **Simple Shape:** `IssueId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    updatedAt: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    versionId: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    statusId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 32767
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    issueStoreId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    archived: Scalars['Boolean'];
    blocked?: Maybe<Scalars['Boolean']>;
    assigneeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    createdAt?: Maybe<Scalars['String']>;
    createdBy?: Maybe<Scalars['String']>;
    updatedBy?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `IssuePriorityMigration` */
    priority?: Maybe<Scalars['String']>;
    labelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `EstimateMigration`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    estimate?: Maybe<Scalars['Int']>;
    customFields?: Maybe<Array<Maybe<IssueCustomFieldMigration>>>;
};

export type IssueReference = {
    __typename?: 'IssueReference';
    referenceType?: Maybe<Scalars['String']>;
    referenceId?: Maybe<Scalars['String']>;
};

export type IssueStoreLabelObject = {
    __typename?: 'IssueStoreLabelObject';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueStoreLabelColor`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 7
   *   * Maximum length (inclusive): 7
   *   * Pattern: `/^#[0-9a-fA-F]{6}$/`
   */
    labelColor: Scalars['String'];
};

export type IssueStoreLabelObjectInput = {
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueStoreLabelColor`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 7
   *   * Maximum length (inclusive): 7
   *   * Pattern: `/^#[0-9a-fA-F]{6}$/`
   */
    labelColor: Scalars['String'];
};

export type IssueStoreObject = {
    __typename?: 'IssueStoreObject';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    statuses: Array<Maybe<IssueStoreStatus>>;
    /** * **Simple Shape:** `IssueStoreEstimationType` */
    estimationType?: Maybe<Scalars['String']>;
    labels?: Maybe<Array<Maybe<Label>>>;
    savedViews?: Maybe<Array<Maybe<SavedView>>>;
    /**
   * * **Simple Shape:** `MaxAssigneesPerIssue`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    maxAssigneesPerIssue?: Maybe<Scalars['Int']>;
};

export type IssueStoreObjectMigration = {
    __typename?: 'IssueStoreObjectMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    updatedAt: Scalars['String'];
    /** * **Simple Shape:** `IssueStoreEstimationTypeMigration` */
    estimationType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `MaxAssigneesPerIssueMigration`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    maxAssigneesPerIssue?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Required
   */
    versionId: Scalars['Int'];
};

export type IssueStoreSavedViewObject = {
    __typename?: 'IssueStoreSavedViewObject';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `SavedViewQueryString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1023
   */
    query: Scalars['String'];
};

export type IssueStoreSavedViewObjectInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `SavedViewQueryString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1023
   */
    query: Scalars['String'];
};

export type IssueStoreStatus = {
    __typename?: 'IssueStoreStatus';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueStoreHighLevelStatus`
   * * **Constraints**
   *   * Required
   */
    highLevelStatus: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    order: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    active: Scalars['Boolean'];
};

export type IssueStoreStatusInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `IssueStoreHighLevelStatus`
   * * **Constraints**
   *   * Required
   */
    highLevelStatus: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    order: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    active: Scalars['Boolean'];
};

export type Label = {
    __typename?: 'Label';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 7
   *   * Maximum length (inclusive): 7
   *   * Pattern: `/^#[0-9a-fA-F]{6}$/`
   */
    color: Scalars['String'];
};

export type LabelInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 7
   *   * Maximum length (inclusive): 7
   *   * Pattern: `/^#[0-9a-fA-F]{6}$/`
   */
    color: Scalars['String'];
};

export type LineCoverageResult = {
    __typename?: 'LineCoverageResult';
    /** * **Simple Shape:** `TestPercent` */
    percentageCovered?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    coveredCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedCount: Scalars['Int'];
    threshold?: Maybe<TestSuccessPercentageThreshold>;
};

export type LineCoverageResultMigration = {
    __typename?: 'LineCoverageResultMigration';
    /** * **Simple Shape:** `TestPercentMigration` */
    percentageCovered?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    coveredCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    missedCount: Scalars['Int'];
    threshold?: Maybe<TestSuccessPercentageThresholdMigration>;
};

export type LinkAccountToEnvironmentOutput = {
    __typename?: 'LinkAccountToEnvironmentOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type LinkAccountToEnvironmentRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type LinkComponent = {
    __typename?: 'LinkComponent';
    /**
   * * **Constraints**
   *   * Required
   */
    resourcePath: Array<Maybe<ResourceRef>>;
    resourceId?: Maybe<Array<Maybe<ResourceMap>>>;
};

export type LinkComponentInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    resourcePath: Array<Maybe<ResourceRefInput>>;
    resourceId?: Maybe<Array<Maybe<ResourceMapInput>>>;
};

export type LinkExtensionIssueScopeInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    connectionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerCanonicalId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
};

export type LinkExtensionIssueScopeOutput = {
    __typename?: 'LinkExtensionIssueScopeOutput';
    version?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type LinkSourceRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    connectionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerCanonicalId: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name: Scalars['String'];
};

export type LinkSourceRepositoryOutput = {
    __typename?: 'LinkSourceRepositoryOutput';
    version?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type ListAccessTokensOutput = {
    __typename?: 'ListAccessTokensOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<AccessTokenSummary>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListAccessTokensRequestInput = {
    maxResults?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListActiveOrganizationInvitationsOutput = {
    __typename?: 'ListActiveOrganizationInvitationsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    invitations: Array<Maybe<OrganizationInvitationListMember>>;
};

export type ListActiveOrganizationInvitationsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
};

export type ListActiveProjectInvitationsOutput = {
    __typename?: 'ListActiveProjectInvitationsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    invitations: Array<Maybe<ProjectInvitation>>;
};

export type ListActiveProjectInvitationsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    projectName?: Maybe<Scalars['String']>;
};

export type ListArtifactPackageVersionAssetsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    packageVersion: Scalars['String'];
};

export type ListArtifactPackageVersionAssetsOutput = {
    __typename?: 'ListArtifactPackageVersionAssetsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ArtifactPackageVersionAsset>>>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    version?: Maybe<Scalars['String']>;
};

export type ListArtifactPackageVersionDependenciesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    packageVersion: Scalars['String'];
};

export type ListArtifactPackageVersionDependenciesOutput = {
    __typename?: 'ListArtifactPackageVersionDependenciesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ArtifactPackageVersionDependency>>>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionValueString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/^[^\s!#/]+$/`
   */
    version?: Maybe<Scalars['String']>;
};

export type ListArtifactPackageVersionsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    sortBy?: Maybe<Scalars['String']>;
};

export type ListArtifactPackageVersionsOutput = {
    __typename?: 'ListArtifactPackageVersionsOutput';
    name?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ArtifactPackageVersionSummary>>>;
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    namespace?: Maybe<Scalars['String']>;
    defaultDisplayVersion?: Maybe<Scalars['String']>;
};

export type ListArtifactPackagesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    packagePrefix?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListArtifactPackagesOutput = {
    __typename?: 'ListArtifactPackagesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ArtifactPackageSummary>>>;
};

export type ListArtifactRepositoriesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `RepositoryTypeNameString` */
    repositoryType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListArtifactRepositoriesOutput = {
    __typename?: 'ListArtifactRepositoriesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ArtifactRepositorySummary>>>;
};

export type ListAwsAccountRolesOutput = {
    __typename?: 'ListAwsAccountRolesOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    roles: Array<Maybe<AwsAccountRole>>;
    items?: Maybe<Array<Maybe<AwsAccountRole>>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListAwsAccountRolesRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListAwsAccountsOutput = {
    __typename?: 'ListAwsAccountsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    awsAccounts: Array<Maybe<AwsAccount>>;
    items?: Maybe<Array<Maybe<AwsAccount>>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListAwsAccountsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListBlueprintsOutput = {
    __typename?: 'ListBlueprintsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<BlueprintSummary>>>;
};

export type ListBlueprintsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    publisher?: Maybe<Scalars['String']>;
};

export type ListBuildsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    workflowRunId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    nextToken?: Maybe<Scalars['String']>;
};

export type ListBuildsOutput = {
    __typename?: 'ListBuildsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<BuildDetailsOutput>>>;
};

export type ListCodeCoverageReportsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListCodeCoverageReportsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListCodeCoverageReportsOutput = {
    __typename?: 'ListCodeCoverageReportsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<CodeCoverageReportSummary>>>;
};

export type ListCodeCoverageReportsOutputMigration = {
    __typename?: 'ListCodeCoverageReportsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<CodeCoverageReportSummaryMigration>>>;
};

export type ListCodeCoverageRunResultsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListInput>;
};

export type ListCodeCoverageRunResultsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListMigrationInput>;
};

export type ListCodeCoverageRunResultsOutput = {
    __typename?: 'ListCodeCoverageRunResultsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<CodeCoverageRunResultListOutput>>>;
};

export type ListCodeCoverageRunResultsOutputMigration = {
    __typename?: 'ListCodeCoverageRunResultsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<CodeCoverageRunResultListOutputMigration>>>;
};

export type ListCodeCoverageRunResultsStatisticsOutput = {
    __typename?: 'ListCodeCoverageRunResultsStatisticsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    totalItems: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    lineCoverage: CoverageResult;
    branchCoverage?: Maybe<CoverageResult>;
};

export type ListCodeCoverageRunResultsStatisticsOutputMigration = {
    __typename?: 'ListCodeCoverageRunResultsStatisticsOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    totalItems: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    lineCoverage: CoverageResultMigration;
    branchCoverage?: Maybe<CoverageResultMigration>;
};

export type ListCommentsForIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    issueId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `CommentsOrderForIssue`
   * * **Constraints**
   *   * Required
   */
    order: Scalars['String'];
};

export type ListCommentsForIssueOutput = {
    __typename?: 'ListCommentsForIssueOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<CommentForIssueOutput>>>;
};

export type ListComputeFleetsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListComputeFleetsOutput = {
    __typename?: 'ListComputeFleetsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ComputeFleetSummary>>>;
};

export type ListConnectionsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    providerId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListConnectionsOutput = {
    __typename?: 'ListConnectionsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ConnectionSummary>>>;
};

export type ListDevelopmentWorkspaceOutput = {
    __typename?: 'ListDevelopmentWorkspaceOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<DevelopmentWorkspaceSummary>>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2048
   */
    nextToken?: Maybe<Scalars['String']>;
};

export type ListDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    filters?: Maybe<Array<Maybe<FilterInput>>>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2048
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListDummyDataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListDummyDataOutput = {
    __typename?: 'ListDummyDataOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<DummyDataSummary>>>;
};

export type ListEnvironmentDeploymentTargetsOutput = {
    __typename?: 'ListEnvironmentDeploymentTargetsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<EnvironmentDeploymentTargetDetails>>>;
};

export type ListEnvironmentDeploymentTargetsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 64
   */
    nextToken?: Maybe<Scalars['String']>;
};

export type ListEnvironmentDeploymentsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    nextToken?: Maybe<Scalars['String']>;
};

export type ListEnvironmentDeploymentsOutput = {
    __typename?: 'ListEnvironmentDeploymentsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<DeploymentDetails>>>;
};

export type ListEnvironmentDeploymentsV2Output = {
    __typename?: 'ListEnvironmentDeploymentsV2Output';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<DeploymentDetailsV2>>>;
};

export type ListEnvironmentDeploymentsV2RequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1640
   */
    nextToken?: Maybe<Scalars['String']>;
};

export type ListEnvironmentStacksInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    nextToken?: Maybe<Scalars['String']>;
};

export type ListEnvironmentStacksOutput = {
    __typename?: 'ListEnvironmentStacksOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<EnvironmentStackSummary>>>;
};

export type ListEnvironmentsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 100
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    filters?: Maybe<Array<Maybe<EnvironmentFilterInput>>>;
    sortBy?: Maybe<Array<Maybe<EnvironmentOrderingInput>>>;
};

export type ListEnvironmentsOutput = {
    __typename?: 'ListEnvironmentsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    totalCount?: Maybe<Scalars['Int']>;
    items?: Maybe<Array<Maybe<EnvironmentSummary>>>;
};

export type ListExtensionInstallationsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListExtensionInstallationsOutput = {
    __typename?: 'ListExtensionInstallationsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ExtensionInstallationSummary>>>;
};

export type ListExtensionIssueScopesOutput = {
    __typename?: 'ListExtensionIssueScopesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ExtensionIssueScopeSummary>>>;
};

export type ListExtensionIssueScopesRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 20
   */
    maxResults?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListFooInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    dummyDataName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
};

export type ListFooOutput = {
    __typename?: 'ListFooOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<FooSummary>>>;
};

export type ListIssueStoreLabelsOutput = {
    __typename?: 'ListIssueStoreLabelsOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 50
   */
    items: Array<Maybe<IssueStoreLabelObject>>;
};

export type ListIssueStoreLabelsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
};

export type ListIssueStoreSavedViewsOutput = {
    __typename?: 'ListIssueStoreSavedViewsOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 25
   */
    items: Array<Maybe<IssueStoreSavedViewObject>>;
};

export type ListIssueStoreSavedViewsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
};

export type ListIssueStoreStatusesOutput = {
    __typename?: 'ListIssueStoreStatusesOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 256
   */
    items: Array<Maybe<IssueStoreStatus>>;
};

export type ListIssueStoreStatusesRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
};

export type ListIssuesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    archived?: Maybe<Scalars['Boolean']>;
    nextToken?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
    lastUpdated?: Maybe<Scalars['String']>;
};

export type ListIssuesOutput = {
    __typename?: 'ListIssuesOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    issues: Array<Maybe<IssueMetadata>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListIssuesRequestMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
    archived?: Maybe<Scalars['Boolean']>;
    nextToken?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
    lastUpdated?: Maybe<Scalars['String']>;
};

export type ListIssuesResponseMigration = {
    __typename?: 'ListIssuesResponseMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<IssueMetadataMigration>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListLinkableSourceRepositoriesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    connectionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListLinkableSourceRepositoriesOutput = {
    __typename?: 'ListLinkableSourceRepositoriesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SourceRepositoryLinkableSummary>>>;
};

export type ListLinksInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePath: Array<Maybe<ResourceRefInput>>;
    /**
   * * **Simple Shape:** `LinkType`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-zA-Z_]{4,62}$/`
   */
    linkType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2000
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 1000
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListLinksOutput = {
    __typename?: 'ListLinksOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<ListLinksSummary>>;
};

export type ListLinksSummary = {
    __typename?: 'ListLinksSummary';
    /**
   * * **Simple Shape:** `LinkId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}_[0-9a-zA-Z_]{4,62}_[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    linkId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    destination: LinkComponent;
    /**
   * * **Simple Shape:** `LinkType`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-zA-Z_]{4,62}$/`
   */
    linkType: Scalars['String'];
};

export type ListNotificationChannelsOutput = {
    __typename?: 'ListNotificationChannelsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<NotificationChannelSummary>>;
};

export type ListNotificationChannelsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 64
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListNotificationClientsMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 64
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListNotificationClientsMigrationOutput = {
    __typename?: 'ListNotificationClientsMigrationOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<NotificationClientSummary>>;
};

export type ListNotificationClientsOutput = {
    __typename?: 'ListNotificationClientsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<NotificationClientSummary>>;
};

export type ListNotificationClientsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 64
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListOnboardingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListOnboardingOutput = {
    __typename?: 'ListOnboardingOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<OnboardingOutput>>>;
};

export type ListOrganizationsInput = {
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListOrganizationsOutput = {
    __typename?: 'ListOrganizationsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<OrganizationSummary>>>;
};

export type ListPreviousProjectsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
};

export type ListPreviousProjectsOutput = {
    __typename?: 'ListPreviousProjectsOutput';
    items?: Maybe<Array<Maybe<PreviousProjectsSummary>>>;
};

export type ListProjectsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 1000
   */
    maxResults?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
};

export type ListProjectsOutput = {
    __typename?: 'ListProjectsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<ProjectSummary>>>;
};

export type ListPullRequestCommentsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    pullRequestId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `PullRequestCommentsOrder`
   * * **Constraints**
   *   * Required
   */
    order: Scalars['String'];
};

export type ListPullRequestCommentsOutput = {
    __typename?: 'ListPullRequestCommentsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<PullRequestCommentObject>>>;
};

export type ListPullRequestsInput = {
    organizationId: Scalars['String'];
    projectId: Scalars['String'];
    filters?: Maybe<Array<Maybe<ConditionalFilter>>>;
    maxResults?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListRoleMappingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListRoleMappingMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListRoleMappingMigrationOutput = {
    __typename?: 'ListRoleMappingMigrationOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<RoleMappingObjectMigration>>>;
};

export type ListRoleMappingOutput = {
    __typename?: 'ListRoleMappingOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<RoleMappingObject>>>;
};

export type ListSshPublicKeysOutput = {
    __typename?: 'ListSSHPublicKeysOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SshPublicKeySummary>>;
};

export type ListSecretsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListSecretsOutput = {
    __typename?: 'ListSecretsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SecretMetadata>>>;
};

export type ListSoftwareCompositionAnalysisFindingStatisticsOutput = {
    __typename?: 'ListSoftwareCompositionAnalysisFindingStatisticsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    totalFindings: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityCounts: Array<Maybe<AnalysisCounter>>;
    /**
   * * **Constraints**
   *   * Required
   */
    originalSeverityCounts: Array<Maybe<AnalysisCounter>>;
    /**
   * * **Constraints**
   *   * Required
   */
    categoryCounts: Array<Maybe<AnalysisCounter>>;
};

export type ListSoftwareCompositionAnalysisFindingStatisticsOutputMigration = {
    __typename?: 'ListSoftwareCompositionAnalysisFindingStatisticsOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    totalFindings: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityCounts: Array<Maybe<AnalysisCounterMigration>>;
    /**
   * * **Constraints**
   *   * Required
   */
    originalSeverityCounts: Array<Maybe<AnalysisCounterMigration>>;
    /**
   * * **Constraints**
   *   * Required
   */
    categoryCounts: Array<Maybe<AnalysisCounterMigration>>;
};

export type ListSoftwareCompositionAnalysisFindingsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListInput>;
};

export type ListSoftwareCompositionAnalysisFindingsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListMigrationInput>;
};

export type ListSoftwareCompositionAnalysisFindingsOutput = {
    __typename?: 'ListSoftwareCompositionAnalysisFindingsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SoftwareCompositionAnalysisFindingListOutput>>>;
};

export type ListSoftwareCompositionAnalysisFindingsOutputMigration = {
    __typename?: 'ListSoftwareCompositionAnalysisFindingsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SoftwareCompositionAnalysisFindingListOutputMigration>>>;
};

export type ListSoftwareCompositionAnalysisReportsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListSoftwareCompositionAnalysisReportsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListSoftwareCompositionAnalysisReportsOutput = {
    __typename?: 'ListSoftwareCompositionAnalysisReportsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SoftwareCompositionAnalysisReportSummary>>;
};

export type ListSoftwareCompositionAnalysisReportsOutputMigration = {
    __typename?: 'ListSoftwareCompositionAnalysisReportsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SoftwareCompositionAnalysisReportSummaryMigration>>;
};

export type ListSoftwareTestingReportsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    repositoryName?: Maybe<Scalars['String']>;
    branchName?: Maybe<Scalars['String']>;
    workflowId?: Maybe<Scalars['String']>;
    reportType?: Maybe<Scalars['String']>;
    reportName?: Maybe<Scalars['String']>;
    passingStatus?: Maybe<Scalars['String']>;
    lastRunAt?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortParamInput>;
};

export type ListSoftwareTestingReportsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    repositoryName?: Maybe<Scalars['String']>;
    branchName?: Maybe<Scalars['String']>;
    workflowId?: Maybe<Scalars['String']>;
    reportType?: Maybe<Scalars['String']>;
    reportName?: Maybe<Scalars['String']>;
    passingStatus?: Maybe<Scalars['String']>;
    lastRunAt?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SortParamInput>;
};

export type ListSoftwareTestingReportsOutput = {
    __typename?: 'ListSoftwareTestingReportsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SoftwareTestingReportSummary>>;
};

export type ListSoftwareTestingReportsOutputMigration = {
    __typename?: 'ListSoftwareTestingReportsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SoftwareTestingReportSummaryMigration>>;
};

export type ListSourceBranchesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListSourceBranchesOutput = {
    __typename?: 'ListSourceBranchesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SourceBranchSummary>>>;
};

export type ListSourceDifferenceMetadataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    afterSourceCommitSha1: Scalars['String'];
    afterPath?: Maybe<Scalars['String']>;
    beforeSourceCommitSha1?: Maybe<Scalars['String']>;
    beforePath?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListSourceDifferenceMetadataOutput = {
    __typename?: 'ListSourceDifferenceMetadataOutput';
    nextToken?: Maybe<Scalars['String']>;
    differences?: Maybe<Array<Maybe<SourceDifferenceMetadataSummary>>>;
};

export type ListSourcePullRequestToJiraIssueLinkInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListSourcePullRequestToJiraIssueLinkOutput = {
    __typename?: 'ListSourcePullRequestToJiraIssueLinkOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SourcePullRequestToJiraIssueLinkSummary>>>;
};

export type ListSourcePullRequestsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    maxResults?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListSourcePullRequestsOutput = {
    __typename?: 'ListSourcePullRequestsOutput';
    items?: Maybe<Array<Maybe<SourcePullRequestSummary>>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListSourceRepositoriesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListSourceRepositoriesOutput = {
    __typename?: 'ListSourceRepositoriesOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<SourceRepositorySummary>>>;
};

export type ListSourceRevisionsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    nextToken?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListSourceRevisionsOutput = {
    __typename?: 'ListSourceRevisionsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<SourceRevisionSummary>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListStaticAnalysisFindingStatisticsOutput = {
    __typename?: 'ListStaticAnalysisFindingStatisticsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    totalFindings: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityCounts: Array<Maybe<AnalysisCounter>>;
    /**
   * * **Constraints**
   *   * Required
   */
    originalSeverityCounts: Array<Maybe<AnalysisCounter>>;
    /**
   * * **Constraints**
   *   * Required
   */
    categoryCounts: Array<Maybe<AnalysisCounter>>;
};

export type ListStaticAnalysisFindingsOutput = {
    __typename?: 'ListStaticAnalysisFindingsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<StaticAnalysisFindingListItem>>>;
};

export type ListStaticAnalysisFindingsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 256
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListInput>;
};

export type ListStaticAnalysisFindingsStatisticsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 256
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListInput>;
};

export type ListStaticAnalysisReportsOutput = {
    __typename?: 'ListStaticAnalysisReportsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<StaticAnalysisReportSummary>>;
};

export type ListStaticAnalysisReportsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Maximum value (inclusive): 50
   */
    maxResults?: Maybe<Scalars['Int']>;
};

export type ListTeamInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListTeamOutput = {
    __typename?: 'ListTeamOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<TeamObject>>>;
};

export type ListTestActionRunsOutput = {
    __typename?: 'ListTestActionRunsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<TestActionRunSummary>>>;
};

export type ListTestActionRunsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    workflowRunId?: Maybe<Scalars['String']>;
    testRunName?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListTestActionsMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    workflowRunId?: Maybe<Scalars['String']>;
    testRunName?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type ListTestActionsMigrationOutput = {
    __typename?: 'ListTestActionsMigrationOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<TestActionMigrationOutput>>>;
};

export type ListTestCaseRunResultsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListInput>;
};

export type ListTestCaseRunResultsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    order?: Maybe<Array<Maybe<OrderingInput>>>;
    filter?: Maybe<FilterListInput>;
};

export type ListTestCaseRunResultsOutput = {
    __typename?: 'ListTestCaseRunResultsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<TestCaseRunResultsOutput>>>;
};

export type ListTestCaseRunResultsOutputMigration = {
    __typename?: 'ListTestCaseRunResultsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<TestCaseRunResultsOutputMigration>>>;
};

export type ListTestCaseRunResultsStatisticsOutput = {
    __typename?: 'ListTestCaseRunResultsStatisticsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    totalTestCases: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalDurationInNanoseconds: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    testCaseResultCounts: Array<Maybe<TestCaseResultCount>>;
};

export type ListTestCaseRunResultsStatisticsOutputMigration = {
    __typename?: 'ListTestCaseRunResultsStatisticsOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    totalTestCases: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalPages: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalDurationInNanoseconds: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    testCaseResultCounts: Array<Maybe<TestCaseResultCountMigration>>;
};

export type ListTestReportStatusesInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    actionRunId: Scalars['String'];
};

export type ListTestReportStatusesInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    actionRunId: Scalars['String'];
};

export type ListTestReportStatusesOutput = {
    __typename?: 'ListTestReportStatusesOutput';
    items?: Maybe<Array<Maybe<TestReportStatusSummary>>>;
};

export type ListTestReportStatusesOutputMigration = {
    __typename?: 'ListTestReportStatusesOutputMigration';
    items?: Maybe<Array<Maybe<TestReportStatusSummary>>>;
};

export type ListTestReportsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    parentTestSummaryId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListTestReportsInputMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    sourceRepositoryBranchName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    actionRunId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    parentTestSummaryId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
};

export type ListTestReportsOutput = {
    __typename?: 'ListTestReportsOutput';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<TestReportSummary>>;
};

export type ListTestReportsOutputMigration = {
    __typename?: 'ListTestReportsOutputMigration';
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    items: Array<Maybe<TestReportSummaryMigration>>;
};

export type ListWorkflowRunsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    workflowId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Array<Maybe<WorkflowRunOrderingInput>>>;
    filters?: Maybe<WorkflowFiltersInput>;
};

export type ListWorkflowRunsOutput = {
    __typename?: 'ListWorkflowRunsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<WorkflowRunSummary>>>;
};

export type ListWorkflowsInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   */
    nextToken?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   */
    pageSize?: Maybe<Scalars['Int']>;
    filters?: Maybe<WorkflowFiltersInput>;
};

export type ListWorkflowsOutput = {
    __typename?: 'ListWorkflowsOutput';
    nextToken?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<WorkflowSummary>>>;
};

export type LoginQueryParametersMapInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};


export type MergeSourcePullRequestByFastForwardInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    revisionNumber?: Maybe<Scalars['Int']>;
};

export type MergeSourcePullRequestByFastForwardOutput = {
    __typename?: 'MergeSourcePullRequestByFastForwardOutput';
    /**
   * * **Simple Shape:** `SourcePullRequestNumber`
   * * **Constraints**
   *   * Required
   */
    number: Scalars['String'];
};

export type MergeSourcePullRequestBySquashInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    revisionNumber?: Maybe<Scalars['Int']>;
    commitMessage?: Maybe<Scalars['String']>;
};

export type MergeSourcePullRequestBySquashOutput = {
    __typename?: 'MergeSourcePullRequestBySquashOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    number: Scalars['String'];
};

export type MetricBucket = {
    __typename?: 'MetricBucket';
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    value: Scalars['Float'];
};

export type MetricBucketResult = {
    __typename?: 'MetricBucketResult';
    /**
   * * **Constraints**
   *   * Required
   */
    data: Array<Maybe<MetricBucket>>;
};

export type MetricFilterMapInput = {
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type MetricHistogramInterval = {
    __typename?: 'MetricHistogramInterval';
    /**
   * * **Constraints**
   *   * Required
   */
    x: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    y: Scalars['Float'];
};

export type MetricHistogramResult = {
    __typename?: 'MetricHistogramResult';
    /**
   * * **Constraints**
   *   * Required
   */
    data: Array<Maybe<MetricHistogramInterval>>;
};

export type MetricValueResult = {
    __typename?: 'MetricValueResult';
    /**
   * * **Constraints**
   *   * Required
   */
    data: Scalars['Float'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createAccessToken?: Maybe<CreateAccessTokenOutput>;
    deleteAccessToken?: Maybe<DeleteAccessTokenOutput>;
    createCommentForIssue?: Maybe<CreateCommentForIssueOutput>;
    updateCommentContentForIssue?: Maybe<UpdateCommentContentForIssueOutput>;
    deleteCommentContentForIssue?: Maybe<DeleteCommentContentForIssueOutput>;
    createConnection?: Maybe<CreateConnectionOutput>;
    deleteConnection?: Maybe<DeleteConnectionOutput>;
    createExtensionInstallation?: Maybe<CreateExtensionInstallationOutput>;
    deleteExtensionInstallation?: Maybe<DeleteExtensionInstallationOutput>;
    createOrganization?: Maybe<CreateOrganizationOutput>;
    deleteOrganization?: Maybe<DeleteOrganizationOutput>;
    updateOrganization?: Maybe<UpdateOrganizationOutput>;
    renameOrganization?: Maybe<RenameOrganizationOutput>;
    connectAwsAccount?: Maybe<ConnectAwsAccountOutput>;
    deleteAwsAccount?: Maybe<DeleteAwsAccountOutput>;
    linkAccountToEnvironment?: Maybe<LinkAccountToEnvironmentOutput>;
    unlinkAccountFromEnvironment?: Maybe<UnlinkAccountFromEnvironmentOutput>;
    createBar?: Maybe<CreateBarOutput>;
    createBlueprintUploadUrl?: Maybe<CreateBlueprintUploadUrlOutput>;
    deployBlueprint?: Maybe<DeployBlueprintOutput>;
    synthesizeBlueprint?: Maybe<SynthesizeBlueprintOutput>;
    createDummyData?: Maybe<CreateDummyDataOutput>;
    deleteDummyData?: Maybe<DeleteDummyDataOutput>;
    updateDummyData?: Maybe<UpdateDummyDataOutput>;
    createLink?: Maybe<CreateLinkOutput>;
    deleteLink?: Maybe<DeleteLinkOutput>;
    createOnboarding?: Maybe<OnboardingOutput>;
    updateOnboarding?: Maybe<OnboardingOutput>;
    sendOrganizationInvitation?: Maybe<SendOrganizationInvitationOutput>;
    acceptOrganizationInvitation?: Maybe<AcceptOrganizationInvitationOutput>;
    createProject?: Maybe<CreateProjectOutput>;
    deleteProject?: Maybe<DeleteProjectOutput>;
    updateProject?: Maybe<UpdateProjectOutput>;
    renameProject?: Maybe<RenameProjectOutput>;
    createArtifactRepository?: Maybe<CreateArtifactRepositoryOutput>;
    deleteArtifactRepository?: Maybe<DeleteArtifactRepositoryOutput>;
    updateArtifactRepository?: Maybe<UpdateArtifactRepositoryOutput>;
    updateArtifactPackageOriginConfiguration?: Maybe<UpdateArtifactPackageOriginConfigurationOutput>;
    deleteArtifactPackageVersions?: Maybe<ArtifactPackageVersionsBatchActionOutput>;
    disposeArtifactPackageVersions?: Maybe<ArtifactPackageVersionsBatchActionOutput>;
    updateArtifactPackageVersionsStatus?: Maybe<ArtifactPackageVersionsBatchActionOutput>;
    createComputeFleet?: Maybe<CreateComputeFleetOutput>;
    deleteComputeFleet?: Maybe<DeleteComputeFleetOutput>;
    updateComputeFleet?: Maybe<UpdateComputeFleetOutput>;
    createDevelopmentWorkspace?: Maybe<CreateDevelopmentWorkspaceOutput>;
    deleteDevelopmentWorkspace?: Maybe<DeleteDevelopmentWorkspaceOutput>;
    updateDevelopmentWorkspace?: Maybe<UpdateDevelopmentWorkspaceOutput>;
    startDevelopmentWorkspace?: Maybe<StartDevelopmentWorkspaceOutput>;
    startSessionDevelopmentWorkspace?: Maybe<StartSessionDevelopmentWorkspaceOutput>;
    stopDevelopmentWorkspace?: Maybe<StopDevelopmentWorkspaceOutput>;
    stopSessionDevelopmentWorkspace?: Maybe<StopSessionDevelopmentWorkspaceOutput>;
    createEnvironment?: Maybe<CreateEnvironmentOutput>;
    deleteEnvironment?: Maybe<DeleteEnvironmentOutput>;
    updateEnvironment?: Maybe<UpdateEnvironmentOutput>;
    linkExtensionIssueScope?: Maybe<LinkExtensionIssueScopeOutput>;
    unlinkExtensionIssueScope?: Maybe<UnlinkExtensionIssueScopeOutput>;
    createExternalArtifactRepository?: Maybe<CreateArtifactRepositoryOutput>;
    updateIssueStore?: Maybe<UpdateIssueStoreOutput>;
    createIssue?: Maybe<CreateIssueOutput>;
    updateIssue?: Maybe<UpdateIssueOutput>;
    createIssueStoreLabel?: Maybe<CreateIssueStoreLabelOutput>;
    batchUpdateIssueStoreLabels?: Maybe<BatchUpdateIssueStoreLabelsOutput>;
    createIssueStoreSavedView?: Maybe<CreateIssueStoreSavedViewOutput>;
    deleteIssueStoreSavedView?: Maybe<DeleteIssueStoreSavedViewOutput>;
    batchUpdateIssueStoreSavedViews?: Maybe<BatchUpdateIssueStoreSavedViewsOutput>;
    createIssueStoreStatus?: Maybe<CreateIssueStoreStatusOutput>;
    batchUpdateIssueStoreStatuses?: Maybe<BatchUpdateIssueStoreStatusesOutput>;
    updateIssueStoreMigration?: Maybe<UpdateIssueStoreResponseMigration>;
    createIssueMigration?: Maybe<CreateIssueResponseMigration>;
    updateIssueMigration?: Maybe<UpdateIssueResponseMigration>;
    createNotificationChannel?: Maybe<CreateNotificationChannelOutput>;
    deleteNotificationChannel?: Maybe<DeleteNotificationChannelOutput>;
    updateNotificationChannel?: Maybe<UpdateNotificationChannelOutput>;
    createNotificationClient?: Maybe<CreateNotificationClientOutput>;
    deleteNotificationClient?: Maybe<DeleteNotificationClientOutput>;
    createNotificationClientMigration?: Maybe<CreateNotificationClientMigrationOutput>;
    deleteNotificationClientMigration?: Maybe<DeleteNotificationClientMigrationOutput>;
    putProjectNotificationSettings?: Maybe<PutProjectNotificationSettingsOutput>;
    createSecret?: Maybe<CreateSecretOutput>;
    deleteSecret?: Maybe<DeleteSecretOutput>;
    updateSecret?: Maybe<UpdateSecretOutput>;
    createSourcePullRequest?: Maybe<CreateSourcePullRequestOutput>;
    updateSourcePullRequest?: Maybe<UpdateSourcePullRequestOutput>;
    mergeSourcePullRequestByFastForward?: Maybe<MergeSourcePullRequestByFastForwardOutput>;
    mergeSourcePullRequestBySquash?: Maybe<MergeSourcePullRequestBySquashOutput>;
    updateSourcePullRequestApprovalStatus?: Maybe<UpdateSourcePullRequestApprovalStatusOutput>;
    updateSourcePullRequestReviewers?: Maybe<UpdateSourcePullRequestReviewersOutput>;
    createSourceRepository?: Maybe<CreateSourceRepositoryOutput>;
    deleteSourceRepository?: Maybe<DeleteSourceRepositoryOutput>;
    updateSourceRepository?: Maybe<UpdateSourceRepositoryOutput>;
    linkSourceRepository?: Maybe<LinkSourceRepositoryOutput>;
    createSourceBranch?: Maybe<CreateSourceBranchOutput>;
    deleteSourceBranch?: Maybe<DeleteSourceBranchOutput>;
    createSourceCommit?: Maybe<CreateSourceCommitOutput>;
    retryTestActionTestCases?: Maybe<RetryTestActionTestCasesOutput>;
    startWorkflowRun?: Maybe<StartWorkflowRunOutput>;
    setSubscription?: Maybe<SetSubscriptionOutput>;
    updateTeam?: Maybe<UpdateTeamOutput>;
    putUserNotificationSettings?: Maybe<PutUserNotificationSettingsOutput>;
    updatePerson?: Maybe<UpdatePersonOutput>;
    createUserDetails?: Maybe<CreateUserDetailsOutput>;
    sendProjectInvitation?: Maybe<SendProjectInvitationOutput>;
    acceptProjectInvitation?: Maybe<AcceptProjectInvitationOutput>;
    createPullRequestComment?: Maybe<CreatePullRequestCommentOutput>;
    updatePullRequestCommentContent?: Maybe<UpdatePullRequestCommentContentOutput>;
    deletePullRequestCommentContent?: Maybe<DeletePullRequestCommentContentOutput>;
    updateRoleMapping?: Maybe<UpdateRoleMappingOutput>;
    addUserToRole?: Maybe<AddUserToRoleOutput>;
    removeUserFromRole?: Maybe<RemoveUserFromRoleOutput>;
    addUserToRoleMigration?: Maybe<AddUserToRoleMigrationOutput>;
    removeUserFromRoleMigration?: Maybe<RemoveUserFromRoleMigrationOutput>;
    updateRoleMappingMigration?: Maybe<UpdateRoleMappingMigrationOutput>;
    createSourcePullRequestToJiraIssueLink?: Maybe<CreateSourcePullRequestToJiraIssueLinkOutput>;
    deleteSourcePullRequestToJiraIssueLink?: Maybe<DeleteSourcePullRequestToJiraIssueLinkOutput>;
    importSSHPublicKey?: Maybe<ImportSshPublicKeyOutput>;
    deleteSSHPublicKey?: Maybe<DeleteSshPublicKeyOutput>;
    retryTestActionTestCasesMigration?: Maybe<RetryTestActionTestCasesMigrationOutput>;
    validateWorkflowDefinitionDraft?: Maybe<ValidateWorkflowDefinitionDraftOutput>;
    createSession?: Maybe<CreateSessionOutput>;
    revokeSession?: Maybe<RevokeSessionOutput>;
    createSourceRepositoryCommit: CreateSourceRepositoryCommitResponse;
};


export type MutationCreateAccessTokenArgs = {
    input: CreateAccessTokenRequestInput;
};


export type MutationDeleteAccessTokenArgs = {
    input: DeleteAccessTokenRequestInput;
};


export type MutationCreateCommentForIssueArgs = {
    input: CreateCommentForIssueInput;
};


export type MutationUpdateCommentContentForIssueArgs = {
    input: UpdateCommentContentForIssueInput;
};


export type MutationDeleteCommentContentForIssueArgs = {
    input: DeleteCommentContentForIssueInput;
};


export type MutationCreateConnectionArgs = {
    input: CreateConnectionInput;
};


export type MutationDeleteConnectionArgs = {
    input: DeleteConnectionInput;
};


export type MutationCreateExtensionInstallationArgs = {
    input: CreateExtensionInstallationInput;
};


export type MutationDeleteExtensionInstallationArgs = {
    input: DeleteExtensionInstallationInput;
};


export type MutationCreateOrganizationArgs = {
    input: CreateOrganizationInput;
};


export type MutationDeleteOrganizationArgs = {
    input: DeleteOrganizationInput;
};


export type MutationUpdateOrganizationArgs = {
    input: UpdateOrganizationInput;
};


export type MutationRenameOrganizationArgs = {
    input: RenameOrganizationInput;
};


export type MutationConnectAwsAccountArgs = {
    input: ConnectAwsAccountRequestInput;
};


export type MutationDeleteAwsAccountArgs = {
    input: DeleteAwsAccountInput;
};


export type MutationLinkAccountToEnvironmentArgs = {
    input: LinkAccountToEnvironmentRequestInput;
};


export type MutationUnlinkAccountFromEnvironmentArgs = {
    input: UnlinkAccountFromEnvironmentRequestInput;
};


export type MutationCreateBarArgs = {
    input: CreateBarInput;
};


export type MutationCreateBlueprintUploadUrlArgs = {
    input: CreateBlueprintUploadUrlInput;
};


export type MutationDeployBlueprintArgs = {
    input: DeployBlueprintRequestInput;
};


export type MutationSynthesizeBlueprintArgs = {
    input: SynthesizeBlueprintRequestInput;
};


export type MutationCreateDummyDataArgs = {
    input: CreateDummyDataInput;
};


export type MutationDeleteDummyDataArgs = {
    input: DeleteDummyDataInput;
};


export type MutationUpdateDummyDataArgs = {
    input: UpdateDummyDataInput;
};


export type MutationCreateLinkArgs = {
    input: CreateLinkRequestInput;
};


export type MutationDeleteLinkArgs = {
    input: DeleteLinkRequestInput;
};


export type MutationCreateOnboardingArgs = {
    input: CreateOnboardingInput;
};


export type MutationUpdateOnboardingArgs = {
    input: UpdateOnboardingInput;
};


export type MutationSendOrganizationInvitationArgs = {
    input: SendOrganizationInvitationRequestInput;
};


export type MutationAcceptOrganizationInvitationArgs = {
    input: AcceptOrganizationInvitationRequestInput;
};


export type MutationCreateProjectArgs = {
    input: CreateProjectInput;
};


export type MutationDeleteProjectArgs = {
    input: DeleteProjectInput;
};


export type MutationUpdateProjectArgs = {
    input: UpdateProjectInput;
};


export type MutationRenameProjectArgs = {
    input: RenameProjectInput;
};


export type MutationCreateArtifactRepositoryArgs = {
    input: CreateArtifactRepositoryInput;
};


export type MutationDeleteArtifactRepositoryArgs = {
    input: DeleteArtifactRepositoryInput;
};


export type MutationUpdateArtifactRepositoryArgs = {
    input: UpdateArtifactRepositoryInput;
};


export type MutationUpdateArtifactPackageOriginConfigurationArgs = {
    input: UpdateArtifactPackageOriginConfigurationInput;
};


export type MutationDeleteArtifactPackageVersionsArgs = {
    input: DeleteArtifactPackageVersionsInput;
};


export type MutationDisposeArtifactPackageVersionsArgs = {
    input: DisposeArtifactPackageVersionsInput;
};


export type MutationUpdateArtifactPackageVersionsStatusArgs = {
    input: UpdateArtifactPackageVersionsStatusInput;
};


export type MutationCreateComputeFleetArgs = {
    input: CreateComputeFleetInput;
};


export type MutationDeleteComputeFleetArgs = {
    input: DeleteComputeFleetInput;
};


export type MutationUpdateComputeFleetArgs = {
    input: UpdateComputeFleetInput;
};


export type MutationCreateDevelopmentWorkspaceArgs = {
    input: CreateDevelopmentWorkspaceRequestInput;
};


export type MutationDeleteDevelopmentWorkspaceArgs = {
    input: DeleteDevelopmentWorkspaceRequestInput;
};


export type MutationUpdateDevelopmentWorkspaceArgs = {
    input: UpdateDevelopmentWorkspaceRequestInput;
};


export type MutationStartDevelopmentWorkspaceArgs = {
    input: StartDevelopmentWorkspaceRequestInput;
};


export type MutationStartSessionDevelopmentWorkspaceArgs = {
    input: StartSessionDevelopmentWorkspaceRequestInput;
};


export type MutationStopDevelopmentWorkspaceArgs = {
    input: StopDevelopmentWorkspaceRequestInput;
};


export type MutationStopSessionDevelopmentWorkspaceArgs = {
    input: StopSessionDevelopmentWorkspaceRequestInput;
};


export type MutationCreateEnvironmentArgs = {
    input: CreateEnvironmentInput;
};


export type MutationDeleteEnvironmentArgs = {
    input: DeleteEnvironmentInput;
};


export type MutationUpdateEnvironmentArgs = {
    input: UpdateEnvironmentInput;
};


export type MutationLinkExtensionIssueScopeArgs = {
    input: LinkExtensionIssueScopeInput;
};


export type MutationUnlinkExtensionIssueScopeArgs = {
    input: UnlinkExtensionIssueScopeInput;
};


export type MutationCreateExternalArtifactRepositoryArgs = {
    input: CreateExternalArtifactRepositoryInput;
};


export type MutationUpdateIssueStoreArgs = {
    input: UpdateIssueStoreInput;
};


export type MutationCreateIssueArgs = {
    input: CreateIssueInput;
};


export type MutationUpdateIssueArgs = {
    input: UpdateIssueInput;
};


export type MutationCreateIssueStoreLabelArgs = {
    input: CreateIssueStoreLabelRequestInput;
};


export type MutationBatchUpdateIssueStoreLabelsArgs = {
    input: BatchUpdateIssueStoreLabelsRequestInput;
};


export type MutationCreateIssueStoreSavedViewArgs = {
    input: CreateIssueStoreSavedViewRequestInput;
};


export type MutationDeleteIssueStoreSavedViewArgs = {
    input: DeleteIssueStoreSavedViewInput;
};


export type MutationBatchUpdateIssueStoreSavedViewsArgs = {
    input: BatchUpdateIssueStoreSavedViewsRequestInput;
};


export type MutationCreateIssueStoreStatusArgs = {
    input: CreateIssueStoreStatusRequestInput;
};


export type MutationBatchUpdateIssueStoreStatusesArgs = {
    input: BatchUpdateIssueStoreStatusesRequestInput;
};


export type MutationUpdateIssueStoreMigrationArgs = {
    input: UpdateIssueStoreRequestMigrationInput;
};


export type MutationCreateIssueMigrationArgs = {
    input: CreateIssueRequestMigrationInput;
};


export type MutationUpdateIssueMigrationArgs = {
    input: UpdateIssueRequestMigrationInput;
};


export type MutationCreateNotificationChannelArgs = {
    input: CreateNotificationChannelRequestInput;
};


export type MutationDeleteNotificationChannelArgs = {
    input: DeleteNotificationChannelRequestInput;
};


export type MutationUpdateNotificationChannelArgs = {
    input: UpdateNotificationChannelRequestInput;
};


export type MutationCreateNotificationClientArgs = {
    input: CreateNotificationClientRequestInput;
};


export type MutationDeleteNotificationClientArgs = {
    input: DeleteNotificationClientRequestInput;
};


export type MutationCreateNotificationClientMigrationArgs = {
    input: CreateNotificationClientMigrationInput;
};


export type MutationDeleteNotificationClientMigrationArgs = {
    input: DeleteNotificationClientMigrationInput;
};


export type MutationPutProjectNotificationSettingsArgs = {
    input: PutProjectNotificationSettingsRequestInput;
};


export type MutationCreateSecretArgs = {
    input: CreateSecretInput;
};


export type MutationDeleteSecretArgs = {
    input: DeleteSecretInput;
};


export type MutationUpdateSecretArgs = {
    input: UpdateSecretInput;
};


export type MutationCreateSourcePullRequestArgs = {
    input: CreateSourcePullRequestInput;
};


export type MutationUpdateSourcePullRequestArgs = {
    input: UpdateSourcePullRequestInput;
};


export type MutationMergeSourcePullRequestByFastForwardArgs = {
    input: MergeSourcePullRequestByFastForwardInput;
};


export type MutationMergeSourcePullRequestBySquashArgs = {
    input: MergeSourcePullRequestBySquashInput;
};


export type MutationUpdateSourcePullRequestApprovalStatusArgs = {
    input: UpdateSourcePullRequestApprovalStatusInput;
};


export type MutationUpdateSourcePullRequestReviewersArgs = {
    input: UpdateSourcePullRequestReviewersInput;
};


export type MutationCreateSourceRepositoryArgs = {
    input: CreateSourceRepositoryInput;
};


export type MutationDeleteSourceRepositoryArgs = {
    input: DeleteSourceRepositoryInput;
};


export type MutationUpdateSourceRepositoryArgs = {
    input: UpdateSourceRepositoryInput;
};


export type MutationLinkSourceRepositoryArgs = {
    input: LinkSourceRepositoryInput;
};


export type MutationCreateSourceBranchArgs = {
    input: CreateSourceBranchInput;
};


export type MutationDeleteSourceBranchArgs = {
    input: DeleteSourceBranchInput;
};


export type MutationCreateSourceCommitArgs = {
    input: CreateSourceCommitInput;
};


export type MutationRetryTestActionTestCasesArgs = {
    input: RetryTestActionTestCasesRequestInput;
};


export type MutationStartWorkflowRunArgs = {
    input: StartWorkflowRunInput;
};


export type MutationSetSubscriptionArgs = {
    input: SetSubscriptionRequestInput;
};


export type MutationUpdateTeamArgs = {
    input: UpdateTeamInput;
};


export type MutationPutUserNotificationSettingsArgs = {
    input: PutUserNotificationSettingsRequestInput;
};


export type MutationUpdatePersonArgs = {
    input: UpdatePersonInput;
};


export type MutationCreateUserDetailsArgs = {
    input: CreateUserDetailsInput;
};


export type MutationSendProjectInvitationArgs = {
    input: SendProjectInvitationRequestInput;
};


export type MutationAcceptProjectInvitationArgs = {
    input: AcceptProjectInvitationRequestInput;
};


export type MutationCreatePullRequestCommentArgs = {
    input: CreatePullRequestCommentInput;
};


export type MutationUpdatePullRequestCommentContentArgs = {
    input: UpdatePullRequestCommentContentInput;
};


export type MutationDeletePullRequestCommentContentArgs = {
    input: DeletePullRequestCommentContentInput;
};


export type MutationUpdateRoleMappingArgs = {
    input: UpdateRoleMappingInput;
};


export type MutationAddUserToRoleArgs = {
    input: AddUserToRoleInput;
};


export type MutationRemoveUserFromRoleArgs = {
    input: RemoveUserFromRoleInput;
};


export type MutationAddUserToRoleMigrationArgs = {
    input: AddUserToRoleMigrationInput;
};


export type MutationRemoveUserFromRoleMigrationArgs = {
    input: RemoveUserFromRoleMigrationInput;
};


export type MutationUpdateRoleMappingMigrationArgs = {
    input: UpdateRoleMappingMigrationInput;
};


export type MutationCreateSourcePullRequestToJiraIssueLinkArgs = {
    input: CreateSourcePullRequestToJiraIssueLinkInput;
};


export type MutationDeleteSourcePullRequestToJiraIssueLinkArgs = {
    input: DeleteSourcePullRequestToJiraIssueLinkInput;
};


export type MutationImportSshPublicKeyArgs = {
    input: ImportSshPublicKeyRequestInput;
};


export type MutationDeleteSshPublicKeyArgs = {
    input: DeleteSshPublicKeyRequestInput;
};


export type MutationRetryTestActionTestCasesMigrationArgs = {
    input: RetryTestActionTestCasesMigrationInput;
};


export type MutationValidateWorkflowDefinitionDraftArgs = {
    input: ValidateWorkflowDefinitionDraftInput;
};


export type MutationCreateSessionArgs = {
    input: CreateSessionRequestInput;
};


export type MutationRevokeSessionArgs = {
    input: RevokeSessionRequestInput;
};


export type MutationCreateSourceRepositoryCommitArgs = {
    input: CreateSourceRepositoryCommitInput;
};

export type NotificationChannelDetails = {
    __typename?: 'NotificationChannelDetails';
    slack?: Maybe<NotificationChannelSlackDetails>;
};

export type NotificationChannelDetailsInput = {
    slack?: Maybe<NotificationChannelSlackDetailsInput>;
};

export type NotificationChannelSlackDetails = {
    __typename?: 'NotificationChannelSlackDetails';
    /**
   * * **Simple Shape:** `SlackChannelId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 11
   *   * Maximum length (inclusive): 11
   *   * Pattern: `/^[A-Z0-9]+$/`
   */
    channelId: Scalars['String'];
    /**
   * * **Simple Shape:** `SlackWorkspaceId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 11
   *   * Maximum length (inclusive): 11
   *   * Pattern: `/^[A-Z0-9]+$/`
   */
    workspaceId: Scalars['String'];
};

export type NotificationChannelSlackDetailsInput = {
    /**
   * * **Simple Shape:** `SlackChannelId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 11
   *   * Maximum length (inclusive): 11
   *   * Pattern: `/^[A-Z0-9]+$/`
   */
    channelId: Scalars['String'];
    /**
   * * **Simple Shape:** `SlackWorkspaceId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 11
   *   * Maximum length (inclusive): 11
   *   * Pattern: `/^[A-Z0-9]+$/`
   */
    workspaceId: Scalars['String'];
};

export type NotificationChannelSummary = {
    __typename?: 'NotificationChannelSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    alias: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationChannelType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationChannelDetails;
};

export type NotificationClientDetails = {
    __typename?: 'NotificationClientDetails';
    slack?: Maybe<NotificationClientSlackDetails>;
};

export type NotificationClientSlackDetails = {
    __typename?: 'NotificationClientSlackDetails';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    workspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    workspaceName: Scalars['String'];
};

export type NotificationClientSummary = {
    __typename?: 'NotificationClientSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationClientType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationClientDetails;
};

export type OAuthParametersInput = {
    /**
   * * **Simple Shape:** `OAuthCode`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-f.]{64,128}$/`
   */
    code: Scalars['String'];
    /**
   * * **Simple Shape:** `Url`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-zA-Z-._~:/?#\[\]@!$&'()*+,;=]{4,1024}$/`
   */
    redirectUrl: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    state: Scalars['String'];
};

export type OnboardingOutput = {
    __typename?: 'OnboardingOutput';
    onboardingId?: Maybe<Scalars['String']>;
    submitted?: Maybe<Scalars['Boolean']>;
    dismissed?: Maybe<Scalars['Boolean']>;
    /** * **Simple Shape:** `NextQuestionString` */
    nextQuestion?: Maybe<Scalars['String']>;
    sections?: Maybe<Array<Maybe<QuestionInformation>>>;
};

export type OrderingInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    key: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    direction: Scalars['String'];
};

export type OrganizationActivityFeedItem = {
    __typename?: 'OrganizationActivityFeedItem';
    type?: Maybe<Scalars['String']>;
    organizationName?: Maybe<Scalars['String']>;
    projectName?: Maybe<Scalars['String']>;
    primaryActor?: Maybe<OrganizationActivityFeedParticipant>;
    primaryResource?: Maybe<ResourceRef>;
    status?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['String']>;
};

export type OrganizationActivityFeedParticipant = {
    __typename?: 'OrganizationActivityFeedParticipant';
    type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type OrganizationActivityFeedParticipantInput = {
    type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type OrganizationInvitationListMember = {
    __typename?: 'OrganizationInvitationListMember';
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    timestamp: Scalars['String'];
    inviterUserName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeEmailAddress: Scalars['String'];
    inviteeDisplayName?: Maybe<Scalars['String']>;
    signupEmailAddress?: Maybe<Scalars['String']>;
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InvitationStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `OrganizationRoles`
   * * **Constraints**
   *   * Required
   */
    inviteeRole: Scalars['String'];
};

export type OrganizationMember = {
    __typename?: 'OrganizationMember';
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    username: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    emailAddress: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type OrganizationMemberMigration = {
    __typename?: 'OrganizationMemberMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    username: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    emailAddress: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type OrganizationSummary = {
    __typename?: 'OrganizationSummary';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
    regionName?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type OrganizationUsageReport = {
    __typename?: 'OrganizationUsageReport';
    /**
   * * **Constraints**
   *   * Required
   */
    limitPeriod: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    usageAmount: Scalars['Float'];
    /**
   * * **Constraints**
   *   * Required
   */
    limitAmount: Scalars['Float'];
};

export type OutputVariable = {
    __typename?: 'OutputVariable';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type PersistentStorage = {
    __typename?: 'PersistentStorage';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 64
   */
    sizeInGiB: Scalars['Int'];
};

export type PersistentStorageConfigurationInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 64
   */
    sizeInGiB: Scalars['Int'];
};

export type PreviewEnvironment = {
    __typename?: 'PreviewEnvironment';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    contents: Scalars['String'];
    digest?: Maybe<Scalars['String']>;
};

export type PreviewOverview = {
    __typename?: 'PreviewOverview';
    /**
   * * **Constraints**
   *   * Required
   */
    sourceRepositories: Array<Maybe<PreviewSourceRepository>>;
    /**
   * * **Constraints**
   *   * Required
   */
    environments: Array<Maybe<PreviewEnvironment>>;
    /**
   * * **Constraints**
   *   * Required
   */
    workflows: Array<Maybe<PreviewWorkflow>>;
};

export type PreviewSourceRepository = {
    __typename?: 'PreviewSourceRepository';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    digest?: Maybe<Scalars['String']>;
};

export type PreviewWorkflow = {
    __typename?: 'PreviewWorkflow';
    /**
   * * **Constraints**
   *   * Required
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    contents: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    digest?: Maybe<Scalars['String']>;
};

export type PreviousProjectsSummary = {
    __typename?: 'PreviousProjectsSummary';
    name?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type ProjectActivityFeedItem = {
    __typename?: 'ProjectActivityFeedItem';
    type?: Maybe<Scalars['String']>;
    organizationName?: Maybe<Scalars['String']>;
    projectName?: Maybe<Scalars['String']>;
    primaryActor?: Maybe<ProjectActivityFeedParticipant>;
    primaryResource?: Maybe<ResourceRef>;
    status?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    content?: Maybe<Scalars['String']>;
};

export type ProjectActivityFeedParticipant = {
    __typename?: 'ProjectActivityFeedParticipant';
    type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type ProjectActivityFeedParticipantInput = {
    type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type ProjectAdditionalFieldsMap = {
    __typename?: 'ProjectAdditionalFieldsMap';
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type ProjectInvitation = {
    __typename?: 'ProjectInvitation';
    id?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['String']>;
    inviterUserName?: Maybe<Scalars['String']>;
    inviteeEmailAddress?: Maybe<Scalars['String']>;
    inviteeDisplayName?: Maybe<Scalars['String']>;
    signupEmailAddress?: Maybe<Scalars['String']>;
    projectName?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `roles` */
    inviteeRole?: Maybe<Scalars['String']>;
};

export type ProjectMember = {
    __typename?: 'ProjectMember';
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    username: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    emailAddress: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type ProjectMemberMigration = {
    __typename?: 'ProjectMemberMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    username: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    emailAddress: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type ProjectNotificationSettingsItem = {
    __typename?: 'ProjectNotificationSettingsItem';
    /**
   * * **Simple Shape:** `ProjectNotificationSettingsResourceId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^\*$|^[a-zA-Z-_]{8,64}$/`
   */
    resourceId: Scalars['String'];
    /**
   * * **Simple Shape:** `ProjectNotificationSettingsStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    eventType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    channelIds: Array<Maybe<Scalars['String']>>;
};

export type ProjectNotificationSettingsItemInput = {
    /**
   * * **Simple Shape:** `ProjectNotificationSettingsResourceId`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^\*$|^[a-zA-Z-_]{8,64}$/`
   */
    resourceId: Scalars['String'];
    /**
   * * **Simple Shape:** `ProjectNotificationSettingsStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    eventType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    channelIds: Array<Maybe<Scalars['String']>>;
};

export type ProjectSummary = {
    __typename?: 'ProjectSummary';
    name?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    templateArn?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    externalId?: Maybe<Scalars['String']>;
    templateParams?: Maybe<Array<Maybe<TemplateParamsMap>>>;
    additionalFields?: Maybe<Array<Maybe<ProjectAdditionalFieldsMap>>>;
    versionId?: Maybe<Scalars['String']>;
};

export type ProviderData = {
    __typename?: 'ProviderData';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    account: Scalars['String'];
};

export type PullRequest = {
    __typename?: 'PullRequest';
    id: Scalars['String'];
    title: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    authorId?: Maybe<Scalars['String']>;
    coAuthorIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    reviewerIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    repositoryId: Scalars['String'];
    repositoryName: Scalars['String'];
    projectId?: Maybe<Scalars['String']>;
    sourceBranchReference: Scalars['String'];
    destinationBranchReference: Scalars['String'];
    lastUpdatedTime: Scalars['String'];
    creationTime: Scalars['String'];
    status: Scalars['String'];
    number: Scalars['String'];
};

export type PullRequestCommentObject = {
    __typename?: 'PullRequestCommentObject';
    /**
   * * **Constraints**
   *   * Required
   */
    pullRequestId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    threadId: Scalars['String'];
    commentRepliedToId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    creatorId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commentId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    creationTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    content: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentType`
   * * **Constraints**
   *   * Required
   */
    contentType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    deleted: Scalars['Boolean'];
    reactions?: Maybe<Array<Maybe<CommentReactionsMap>>>;
    /** * **Simple Shape:** `PullRequestCommentType` */
    commentType?: Maybe<Scalars['String']>;
    blobId?: Maybe<Scalars['String']>;
    filePath?: Maybe<Scalars['String']>;
    startLineNumber?: Maybe<Scalars['String']>;
    revisionContextId?: Maybe<Scalars['String']>;
    resolvedBy?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PullRequestReviewerInput = {
    /**
   * * **Simple Shape:** `SourcePullRequestContributorId`
   * * **Constraints**
   *   * Required
   */
    reviewerId: Scalars['String'];
    /**
   * * **Simple Shape:** `SourcePullRequestReviewerType`
   * * **Constraints**
   *   * Required
   */
    reviewerType: Scalars['String'];
};

export type PullRequests = {
    __typename?: 'PullRequests';
    pullRequests?: Maybe<Array<Maybe<PullRequest>>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type PutProjectNotificationSettingsOutput = {
    __typename?: 'PutProjectNotificationSettingsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    documentId: Scalars['String'];
};

export type PutProjectNotificationSettingsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    locale?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    settings: Array<Maybe<ProjectNotificationSettingsItemInput>>;
};

export type PutSourceRepositoryFileInput = {
    filePath: Scalars['String'];
    fileMode: SourceRepositoryFileModeType;
    fileContent?: Maybe<Scalars['String']>;
    sourceFile?: Maybe<SourceRepositoryFileSpecifier>;
};

export type PutUserNotificationSettingsOutput = {
    __typename?: 'PutUserNotificationSettingsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    documentId: Scalars['String'];
};

export type PutUserNotificationSettingsRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    settings: Array<Maybe<UserNotificationSettingsItemInput>>;
};

export type Query = {
    __typename?: 'Query';
    listAccessTokens?: Maybe<ListAccessTokensOutput>;
    getActionRunArtifactMetadata?: Maybe<GetActionRunArtifactMetadataOutput>;
    listBuilds?: Maybe<ListBuildsOutput>;
    getBuild?: Maybe<BuildDetailsOutput>;
    getBuildLogs?: Maybe<GetBuildLogsOutput>;
    listCodeCoverageRunResults?: Maybe<ListCodeCoverageRunResultsOutput>;
    getCodeCoverageRunResults?: Maybe<CodeCoverageRunResultsOutput>;
    listCodeCoverageRunResultsStatistics?: Maybe<ListCodeCoverageRunResultsStatisticsOutput>;
    listCodeCoverageRunResultsMigration?: Maybe<ListCodeCoverageRunResultsOutputMigration>;
    getCodeCoverageRunResultsMigration?: Maybe<CodeCoverageRunResultsOutputMigration>;
    listCodeCoverageRunResultsStatisticsMigration?: Maybe<ListCodeCoverageRunResultsStatisticsOutputMigration>;
    listCommentsForIssue?: Maybe<ListCommentsForIssueOutput>;
    getComputeAction?: Maybe<ComputeActionDetailsOutput>;
    listConnections?: Maybe<ListConnectionsOutput>;
    getConnection?: Maybe<ConnectionSummary>;
    getDeployment?: Maybe<GetDeploymentOutput>;
    getDeploymentTarget?: Maybe<GetDeploymentTargetOutput>;
    listExtensionInstallations?: Maybe<ListExtensionInstallationsOutput>;
    getExtensionInstallation?: Maybe<ExtensionInstallationSummary>;
    listLinkableSourceRepositories?: Maybe<ListLinkableSourceRepositoriesOutput>;
    listOrganizations?: Maybe<ListOrganizationsOutput>;
    getOrganization?: Maybe<GetOrganizationOutput>;
    describeOrganizationMembers?: Maybe<DescribeOrganizationMembersOutput>;
    describeOrganizationMembersMigration?: Maybe<DescribeOrganizationMembersMigrationOutput>;
    getOrganizationActivityFeed?: Maybe<GetOrganizationActivityFeedOutput>;
    search?: Maybe<SearchOutput>;
    validateOrganizationName?: Maybe<ValidateOrganizationNameOutput>;
    listAwsAccounts?: Maybe<ListAwsAccountsOutput>;
    getAwsAccount?: Maybe<GetAwsAccountOutput>;
    listAwsAccountRoles?: Maybe<ListAwsAccountRolesOutput>;
    getAwsAccountRole?: Maybe<GetAwsAccountRoleOutput>;
    getBar?: Maybe<GetBarOutput>;
    getBlueprint?: Maybe<GetBlueprintOutput>;
    getBlueprintPreview?: Maybe<GetBlueprintPreviewOutput>;
    getBlueprintPreviewFile?: Maybe<GetBlueprintPreviewFileOutput>;
    getBlueprintPreviewFolder?: Maybe<GetBlueprintPreviewFolderOutput>;
    listBlueprints?: Maybe<ListBlueprintsOutput>;
    listDummyData?: Maybe<ListDummyDataOutput>;
    getDummyData?: Maybe<GetDummyDataOutput>;
    getDummyDataLambda?: Maybe<GetDummyDataLambdaOutput>;
    getDummyDataService?: Maybe<GetDummyDataServiceOutput>;
    listFoo?: Maybe<ListFooOutput>;
    getFoo?: Maybe<GetFooOutput>;
    listLinks?: Maybe<ListLinksOutput>;
    describeLinks?: Maybe<DescribeLinksOutput>;
    listOnboarding?: Maybe<ListOnboardingOutput>;
    getOnboarding?: Maybe<OnboardingOutput>;
    listArtifactRepositories?: Maybe<ListArtifactRepositoriesOutput>;
    listActiveOrganizationInvitations?: Maybe<ListActiveOrganizationInvitationsOutput>;
    getOrganizationInvitation?: Maybe<GetOrganizationInvitationOutput>;
    listProjects?: Maybe<ListProjectsOutput>;
    getProject?: Maybe<GetProjectOutput>;
    describeProjectMembers?: Maybe<DescribeProjectMembersOutput>;
    describeProjectMembersMigration?: Maybe<DescribeProjectMembersMigrationOutput>;
    getProjectActivityFeed?: Maybe<GetProjectActivityFeedOutput>;
    getProjectMetrics?: Maybe<GetProjectMetricsOutput>;
    getSlackCredentials?: Maybe<GetSlackCredentialsOutput>;
    getSlackCredentialsMigration?: Maybe<GetSlackCredentialsMigrationOutput>;
    listPreviousProjects?: Maybe<ListPreviousProjectsOutput>;
    validateProjectName?: Maybe<ValidateProjectNameOutput>;
    getActionRun?: Maybe<GetActionRunOutput>;
    getArtifactRepository?: Maybe<ArtifactRepositorySummary>;
    getArtifactRepositoryEndpoint?: Maybe<GetArtifactRepositoryEndpointOutput>;
    getArtifactPackage?: Maybe<GetArtifactPackageOutput>;
    listArtifactPackages?: Maybe<ListArtifactPackagesOutput>;
    getArtifactPackageVersion?: Maybe<GetArtifactPackageVersionOutput>;
    getArtifactPackageVersionReadme?: Maybe<GetArtifactPackageVersionReadmeOutput>;
    listArtifactPackageVersionAssets?: Maybe<ListArtifactPackageVersionAssetsOutput>;
    listArtifactPackageVersionDependencies?: Maybe<ListArtifactPackageVersionDependenciesOutput>;
    listArtifactPackageVersions?: Maybe<ListArtifactPackageVersionsOutput>;
    listCodeCoverageReports?: Maybe<ListCodeCoverageReportsOutput>;
    getCodeCoverageReport?: Maybe<GetCodeCoverageReportOutput>;
    listCodeCoverageReportsMigration?: Maybe<ListCodeCoverageReportsOutputMigration>;
    getCodeCoverageReportMigration?: Maybe<GetCodeCoverageReportOutputMigration>;
    listComputeFleets?: Maybe<ListComputeFleetsOutput>;
    getComputeFleet?: Maybe<ComputeFleetSummary>;
    listDevelopmentWorkspace?: Maybe<ListDevelopmentWorkspaceOutput>;
    getDevelopmentWorkspace?: Maybe<GetDevelopmentWorkspaceOutput>;
    listEnvironments?: Maybe<ListEnvironmentsOutput>;
    getEnvironment?: Maybe<GetEnvironmentOutput>;
    listEnvironmentDeployments?: Maybe<ListEnvironmentDeploymentsOutput>;
    listEnvironmentDeploymentTargets?: Maybe<ListEnvironmentDeploymentTargetsOutput>;
    listEnvironmentDeploymentsV2?: Maybe<ListEnvironmentDeploymentsV2Output>;
    getEnvironmentDeploymentV2?: Maybe<GetEnvironmentDeploymentV2Output>;
    getEnvironmentResourceMetadata?: Maybe<GetEnvironmentResourceMetadataOutput>;
    listEnvironmentStacks?: Maybe<ListEnvironmentStacksOutput>;
    getEnvironmentStack?: Maybe<GetEnvironmentStackOutput>;
    listExtensionIssueScopes?: Maybe<ListExtensionIssueScopesOutput>;
    getExtensionIssueScope?: Maybe<ExtensionIssueScopeSummary>;
    getIssueStore?: Maybe<GetIssueStoreOutput>;
    batchGetIssue?: Maybe<BatchGetIssueOutput>;
    getIssue?: Maybe<GetIssueOutput>;
    listIssues?: Maybe<ListIssuesOutput>;
    listIssueStoreLabels?: Maybe<ListIssueStoreLabelsOutput>;
    listIssueStoreSavedViews?: Maybe<ListIssueStoreSavedViewsOutput>;
    listIssueStoreStatuses?: Maybe<ListIssueStoreStatusesOutput>;
    getIssueStoreMigration?: Maybe<GetIssueStoreResponseMigration>;
    batchGetIssueMigration?: Maybe<BatchGetIssueResponseMigration>;
    getIssueMigration?: Maybe<GetIssueResponseMigration>;
    listIssuesMigration?: Maybe<ListIssuesResponseMigration>;
    listNotificationChannels?: Maybe<ListNotificationChannelsOutput>;
    getNotificationChannel?: Maybe<GetNotificationChannelOutput>;
    listNotificationClients?: Maybe<ListNotificationClientsOutput>;
    getNotificationClient?: Maybe<GetNotificationClientOutput>;
    listNotificationClientsMigration?: Maybe<ListNotificationClientsMigrationOutput>;
    getNotificationClientMigration?: Maybe<GetNotificationClientMigrationOutput>;
    getProjectNotificationSettings?: Maybe<GetProjectNotificationSettingsOutput>;
    getProjectStatus?: Maybe<GetProjectStatusOutput>;
    listSecrets?: Maybe<ListSecretsOutput>;
    getSecret?: Maybe<SecretMetadata>;
    getSecretValue?: Maybe<GetSecretValueOutput>;
    listSoftwareCompositionAnalysisFindings?: Maybe<ListSoftwareCompositionAnalysisFindingsOutput>;
    getSoftwareCompositionAnalysisFinding?: Maybe<SoftwareCompositionAnalysisFindingOutput>;
    listSoftwareCompositionAnalysisFindingStatistics?: Maybe<ListSoftwareCompositionAnalysisFindingStatisticsOutput>;
    listSoftwareCompositionAnalysisFindingsMigration?: Maybe<ListSoftwareCompositionAnalysisFindingsOutputMigration>;
    getSoftwareCompositionAnalysisFindingMigration?: Maybe<SoftwareCompositionAnalysisFindingOutputMigration>;
    listSoftwareCompositionAnalysisFindingStatisticsMigration?: Maybe<ListSoftwareCompositionAnalysisFindingStatisticsOutputMigration>;
    listSoftwareCompositionAnalysisReports?: Maybe<ListSoftwareCompositionAnalysisReportsOutput>;
    getSoftwareCompositionAnalysisReport?: Maybe<GetSoftwareCompositionAnalysisReportOutput>;
    listSoftwareCompositionAnalysisReportsMigration?: Maybe<ListSoftwareCompositionAnalysisReportsOutputMigration>;
    getSoftwareCompositionAnalysisReportMigration?: Maybe<GetSoftwareCompositionAnalysisReportOutputMigration>;
    listSoftwareTestingReports?: Maybe<ListSoftwareTestingReportsOutput>;
    getSoftwareTestingReport?: Maybe<GetSoftwareTestingReportOutput>;
    listSoftwareTestingReportsMigration?: Maybe<ListSoftwareTestingReportsOutputMigration>;
    getSoftwareTestingReportMigration?: Maybe<GetSoftwareTestingReportOutputMigration>;
    listSourcePullRequests?: Maybe<ListSourcePullRequestsOutput>;
    getSourcePullRequest?: Maybe<SourcePullRequestSummary>;
    getPullRequestRequirementStatus?: Maybe<GetPullRequestRequirementStatusOutput>;
    listSourceRevisions?: Maybe<ListSourceRevisionsOutput>;
    listSourceRepositories?: Maybe<ListSourceRepositoriesOutput>;
    getSourceRepository?: Maybe<SourceRepositorySummary>;
    describeSourceRepositoryEndpoints?: Maybe<DescribeSourceRepositoryEndpointsOutput>;
    listSourceBranches?: Maybe<ListSourceBranchesOutput>;
    getSourceBranch?: Maybe<SourceBranchSummary>;
    getSourceCommit?: Maybe<SourceCommitSummary>;
    listSourceDifferenceMetadata?: Maybe<ListSourceDifferenceMetadataOutput>;
    getSourceFile?: Maybe<SourceFileSummary>;
    getSourceFolder?: Maybe<SourceFolderSummary>;
    listStaticAnalysisFindings?: Maybe<ListStaticAnalysisFindingsOutput>;
    getStaticAnalysisFinding?: Maybe<GetStaticAnalysisFindingOutput>;
    listStaticAnalysisFindingStatistics?: Maybe<ListStaticAnalysisFindingStatisticsOutput>;
    listStaticAnalysisReports?: Maybe<ListStaticAnalysisReportsOutput>;
    getStaticAnalysisReport?: Maybe<GetStaticAnalysisReportOutput>;
    listTestActionRuns?: Maybe<ListTestActionRunsOutput>;
    getTestActionRun?: Maybe<TestActionRunOutput>;
    listTestReports?: Maybe<ListTestReportsOutput>;
    getTestReport?: Maybe<GetTestReportOutput>;
    listTestReportsMigration?: Maybe<ListTestReportsOutputMigration>;
    getTestReportMigration?: Maybe<GetTestReportOutputMigration>;
    listTestReportStatuses?: Maybe<ListTestReportStatusesOutput>;
    getTestReportStatus?: Maybe<GetTestReportStatusOutput>;
    listTestReportStatusesMigration?: Maybe<ListTestReportStatusesOutputMigration>;
    getTestReportStatusMigration?: Maybe<GetTestReportStatusOutputMigration>;
    listWorkflows?: Maybe<ListWorkflowsOutput>;
    getWorkflow?: Maybe<WorkflowSummary>;
    getWorkflowState?: Maybe<GetWorkflowStateOutput>;
    listWorkflowRuns?: Maybe<ListWorkflowRunsOutput>;
    getWorkflowRun?: Maybe<GetWorkflowRunOutput>;
    describeSubscription?: Maybe<DescribeSubscriptionOutput>;
    listTeams?: Maybe<ListTeamOutput>;
    getTeam?: Maybe<TeamObject>;
    describeOrganizationUsageReport?: Maybe<DescribeOrganizationUsageReportOutput>;
    getUserNotificationSettings?: Maybe<GetUserNotificationSettingsOutput>;
    getPerson?: Maybe<GetPersonOutput>;
    listActiveProjectInvitations?: Maybe<ListActiveProjectInvitationsOutput>;
    getProjectInvitationById?: Maybe<GetProjectInvitationByIdOutput>;
    listPullRequestComments?: Maybe<ListPullRequestCommentsOutput>;
    listRoleMappings?: Maybe<ListRoleMappingOutput>;
    getRoleMapping?: Maybe<RoleMappingObject>;
    getOrganizationRoleMapping?: Maybe<RoleMappingObject>;
    getProjectRoleMapping?: Maybe<RoleMappingObject>;
    listRoleMappingsMigration?: Maybe<ListRoleMappingMigrationOutput>;
    getRoleMappingMigration?: Maybe<RoleMappingObjectMigration>;
    searchActionLogs?: Maybe<SearchActionLogsOutput>;
    listSourcePullRequestToJiraIssueLinks?: Maybe<ListSourcePullRequestToJiraIssueLinkOutput>;
    listSSHPublicKeys?: Maybe<ListSshPublicKeysOutput>;
    getSSHPublicKey?: Maybe<GetSshPublicKeyOutput>;
    listTestActionsMigration?: Maybe<ListTestActionsMigrationOutput>;
    getTestActionMigration?: Maybe<TestActionMigrationOutput>;
    listTestCaseRunResults?: Maybe<ListTestCaseRunResultsOutput>;
    getTestCaseRunResults?: Maybe<TestCaseRunResultsOutput>;
    listTestCaseRunResultsStatistics?: Maybe<ListTestCaseRunResultsStatisticsOutput>;
    listTestCaseRunResultsMigration?: Maybe<ListTestCaseRunResultsOutputMigration>;
    getTestCaseRunResultsMigration?: Maybe<TestCaseRunResultsOutputMigration>;
    listTestCaseRunResultsStatisticsMigration?: Maybe<ListTestCaseRunResultsStatisticsOutputMigration>;
    describeAccess?: Maybe<DescribeAccessOutput>;
    getAuthenticationRedirect?: Maybe<GetAuthenticationRedirectOutput>;
    getPersonByUserName?: Maybe<GetPersonOutput>;
    getUserDetails?: Maybe<GetUserDetailsOutput>;
    verifySession?: Maybe<VerifySessionOutput>;
    getSourceRepositoryFile: SourceRepositoryFile;
    getSourceRepositoryFolder: SourceRepositoryFolder;
    getSourceRepositoryCommit: SourceRepositoryCommit;
    getSourceRepositoryCommitHistory: SourceRepositoryCommitHistoryEntries;
    getSourceRepositoryCloneUrls: Array<SourceRepositoryCloneUrl>;
    listPullRequests?: Maybe<PullRequests>;
    getSourceRepositoryCommitDifferences: SourceRepositoryCommitDifferences;
};


export type QueryListAccessTokensArgs = {
    input: ListAccessTokensRequestInput;
};


export type QueryGetActionRunArtifactMetadataArgs = {
    input: GetActionRunArtifactMetadataInput;
};


export type QueryListBuildsArgs = {
    input: ListBuildsInput;
};


export type QueryGetBuildArgs = {
    input: GetBuildInput;
};


export type QueryGetBuildLogsArgs = {
    input: GetBuildLogsInput;
};


export type QueryListCodeCoverageRunResultsArgs = {
    input: ListCodeCoverageRunResultsInput;
};


export type QueryGetCodeCoverageRunResultsArgs = {
    input: GetCodeCoverageRunResultsInput;
};


export type QueryListCodeCoverageRunResultsStatisticsArgs = {
    input: ListCodeCoverageRunResultsInput;
};


export type QueryListCodeCoverageRunResultsMigrationArgs = {
    input: ListCodeCoverageRunResultsInputMigrationInput;
};


export type QueryGetCodeCoverageRunResultsMigrationArgs = {
    input: GetCodeCoverageRunResultsInputMigrationInput;
};


export type QueryListCodeCoverageRunResultsStatisticsMigrationArgs = {
    input: ListCodeCoverageRunResultsInputMigrationInput;
};


export type QueryListCommentsForIssueArgs = {
    input: ListCommentsForIssueInput;
};


export type QueryGetComputeActionArgs = {
    input: GetComputeActionInput;
};


export type QueryListConnectionsArgs = {
    input: ListConnectionsInput;
};


export type QueryGetConnectionArgs = {
    input: GetConnectionInput;
};


export type QueryGetDeploymentArgs = {
    input: GetDeploymentInput;
};


export type QueryGetDeploymentTargetArgs = {
    input: GetDeploymentTargetInput;
};


export type QueryListExtensionInstallationsArgs = {
    input: ListExtensionInstallationsInput;
};


export type QueryGetExtensionInstallationArgs = {
    input: GetExtensionInstallationInput;
};


export type QueryListLinkableSourceRepositoriesArgs = {
    input: ListLinkableSourceRepositoriesInput;
};


export type QueryListOrganizationsArgs = {
    input: ListOrganizationsInput;
};


export type QueryGetOrganizationArgs = {
    input: GetOrganizationInput;
};


export type QueryDescribeOrganizationMembersArgs = {
    input: DescribeOrganizationMembersInput;
};


export type QueryDescribeOrganizationMembersMigrationArgs = {
    input: DescribeOrganizationMembersMigrationInput;
};


export type QueryGetOrganizationActivityFeedArgs = {
    input: GetOrganizationActivityFeedInput;
};


export type QuerySearchArgs = {
    input: SearchRequestInput;
};


export type QueryValidateOrganizationNameArgs = {
    input: ValidateOrganizationNameInput;
};


export type QueryListAwsAccountsArgs = {
    input: ListAwsAccountsRequestInput;
};


export type QueryGetAwsAccountArgs = {
    input: GetAwsAccountRequestInput;
};


export type QueryListAwsAccountRolesArgs = {
    input: ListAwsAccountRolesRequestInput;
};


export type QueryGetAwsAccountRoleArgs = {
    input: GetAwsAccountRoleRequestInput;
};


export type QueryGetBarArgs = {
    input: GetBarInput;
};


export type QueryGetBlueprintArgs = {
    input: GetBlueprintRequestInput;
};


export type QueryGetBlueprintPreviewArgs = {
    input: GetBlueprintPreviewRequestInput;
};


export type QueryGetBlueprintPreviewFileArgs = {
    input: GetBlueprintPreviewFileRequestInput;
};


export type QueryGetBlueprintPreviewFolderArgs = {
    input: GetBlueprintPreviewFolderRequestInput;
};


export type QueryListBlueprintsArgs = {
    input: ListBlueprintsRequestInput;
};


export type QueryListDummyDataArgs = {
    input: ListDummyDataInput;
};


export type QueryGetDummyDataArgs = {
    input: GetDummyDataInput;
};


export type QueryGetDummyDataLambdaArgs = {
    input: GetDummyDataLambdaInput;
};


export type QueryGetDummyDataServiceArgs = {
    input: GetDummyDataServiceInput;
};


export type QueryListFooArgs = {
    input: ListFooInput;
};


export type QueryGetFooArgs = {
    input: GetFooInput;
};


export type QueryListLinksArgs = {
    input: ListLinksInput;
};


export type QueryDescribeLinksArgs = {
    input: DescribeLinksRequestInput;
};


export type QueryListOnboardingArgs = {
    input: ListOnboardingInput;
};


export type QueryGetOnboardingArgs = {
    input: GetOnboardingInput;
};


export type QueryListArtifactRepositoriesArgs = {
    input: ListArtifactRepositoriesInput;
};


export type QueryListActiveOrganizationInvitationsArgs = {
    input: ListActiveOrganizationInvitationsRequestInput;
};


export type QueryGetOrganizationInvitationArgs = {
    input: GetOrganizationInvitationRequestInput;
};


export type QueryListProjectsArgs = {
    input: ListProjectsInput;
};


export type QueryGetProjectArgs = {
    input: GetProjectInput;
};


export type QueryDescribeProjectMembersArgs = {
    input: DescribeProjectMembersInput;
};


export type QueryDescribeProjectMembersMigrationArgs = {
    input: DescribeProjectMembersMigrationInput;
};


export type QueryGetProjectActivityFeedArgs = {
    input: GetProjectActivityFeedInput;
};


export type QueryGetProjectMetricsArgs = {
    input: GetProjectMetricsInput;
};


export type QueryGetSlackCredentialsArgs = {
    input: GetSlackCredentialsRequestInput;
};


export type QueryGetSlackCredentialsMigrationArgs = {
    input: GetSlackCredentialsMigrationInput;
};


export type QueryListPreviousProjectsArgs = {
    input: ListPreviousProjectsInput;
};


export type QueryValidateProjectNameArgs = {
    input: ValidateProjectNameInput;
};


export type QueryGetActionRunArgs = {
    input: GetActionRunInput;
};


export type QueryGetArtifactRepositoryArgs = {
    input: GetArtifactRepositoryInput;
};


export type QueryGetArtifactRepositoryEndpointArgs = {
    input: GetArtifactRepositoryEndpointInput;
};


export type QueryGetArtifactPackageArgs = {
    input: GetArtifactPackageInput;
};


export type QueryListArtifactPackagesArgs = {
    input: ListArtifactPackagesInput;
};


export type QueryGetArtifactPackageVersionArgs = {
    input: GetArtifactPackageVersionInput;
};


export type QueryGetArtifactPackageVersionReadmeArgs = {
    input: GetArtifactPackageVersionReadmeInput;
};


export type QueryListArtifactPackageVersionAssetsArgs = {
    input: ListArtifactPackageVersionAssetsInput;
};


export type QueryListArtifactPackageVersionDependenciesArgs = {
    input: ListArtifactPackageVersionDependenciesInput;
};


export type QueryListArtifactPackageVersionsArgs = {
    input: ListArtifactPackageVersionsInput;
};


export type QueryListCodeCoverageReportsArgs = {
    input: ListCodeCoverageReportsInput;
};


export type QueryGetCodeCoverageReportArgs = {
    input: GetCodeCoverageReportInput;
};


export type QueryListCodeCoverageReportsMigrationArgs = {
    input: ListCodeCoverageReportsInputMigrationInput;
};


export type QueryGetCodeCoverageReportMigrationArgs = {
    input: GetCodeCoverageReportInputMigrationInput;
};


export type QueryListComputeFleetsArgs = {
    input: ListComputeFleetsInput;
};


export type QueryGetComputeFleetArgs = {
    input: GetComputeFleetInput;
};


export type QueryListDevelopmentWorkspaceArgs = {
    input: ListDevelopmentWorkspaceRequestInput;
};


export type QueryGetDevelopmentWorkspaceArgs = {
    input: GetDevelopmentWorkspaceRequestInput;
};


export type QueryListEnvironmentsArgs = {
    input: ListEnvironmentsInput;
};


export type QueryGetEnvironmentArgs = {
    input: GetEnvironmentInput;
};


export type QueryListEnvironmentDeploymentsArgs = {
    input: ListEnvironmentDeploymentsInput;
};


export type QueryListEnvironmentDeploymentTargetsArgs = {
    input: ListEnvironmentDeploymentTargetsRequestInput;
};


export type QueryListEnvironmentDeploymentsV2Args = {
    input: ListEnvironmentDeploymentsV2RequestInput;
};


export type QueryGetEnvironmentDeploymentV2Args = {
    input: GetEnvironmentDeploymentV2Input;
};


export type QueryGetEnvironmentResourceMetadataArgs = {
    input: GetEnvironmentResourceMetadataRequestInput;
};


export type QueryListEnvironmentStacksArgs = {
    input: ListEnvironmentStacksInput;
};


export type QueryGetEnvironmentStackArgs = {
    input: GetEnvironmentStackInput;
};


export type QueryListExtensionIssueScopesArgs = {
    input: ListExtensionIssueScopesRequestInput;
};


export type QueryGetExtensionIssueScopeArgs = {
    input: GetExtensionIssueScopeInput;
};


export type QueryGetIssueStoreArgs = {
    input: GetIssueStoreInput;
};


export type QueryBatchGetIssueArgs = {
    input: BatchGetIssueInput;
};


export type QueryGetIssueArgs = {
    input: GetIssueInput;
};


export type QueryListIssuesArgs = {
    input: ListIssuesInput;
};


export type QueryListIssueStoreLabelsArgs = {
    input: ListIssueStoreLabelsRequestInput;
};


export type QueryListIssueStoreSavedViewsArgs = {
    input: ListIssueStoreSavedViewsRequestInput;
};


export type QueryListIssueStoreStatusesArgs = {
    input: ListIssueStoreStatusesRequestInput;
};


export type QueryGetIssueStoreMigrationArgs = {
    input: GetIssueStoreRequestMigrationInput;
};


export type QueryBatchGetIssueMigrationArgs = {
    input: BatchGetIssueRequestMigrationInput;
};


export type QueryGetIssueMigrationArgs = {
    input: GetIssueRequestMigrationInput;
};


export type QueryListIssuesMigrationArgs = {
    input: ListIssuesRequestMigrationInput;
};


export type QueryListNotificationChannelsArgs = {
    input: ListNotificationChannelsRequestInput;
};


export type QueryGetNotificationChannelArgs = {
    input: GetNotificationChannelRequestInput;
};


export type QueryListNotificationClientsArgs = {
    input: ListNotificationClientsRequestInput;
};


export type QueryGetNotificationClientArgs = {
    input: GetNotificationClientRequestInput;
};


export type QueryListNotificationClientsMigrationArgs = {
    input: ListNotificationClientsMigrationInput;
};


export type QueryGetNotificationClientMigrationArgs = {
    input: GetNotificationClientMigrationInput;
};


export type QueryGetProjectNotificationSettingsArgs = {
    input: GetProjectNotificationSettingsRequestInput;
};


export type QueryGetProjectStatusArgs = {
    input: GetProjectStatusInput;
};


export type QueryListSecretsArgs = {
    input: ListSecretsInput;
};


export type QueryGetSecretArgs = {
    input: GetSecretInput;
};


export type QueryGetSecretValueArgs = {
    input: GetSecretValueInput;
};


export type QueryListSoftwareCompositionAnalysisFindingsArgs = {
    input: ListSoftwareCompositionAnalysisFindingsInput;
};


export type QueryGetSoftwareCompositionAnalysisFindingArgs = {
    input: GetSoftwareCompositionAnalysisFindingInput;
};


export type QueryListSoftwareCompositionAnalysisFindingStatisticsArgs = {
    input: ListSoftwareCompositionAnalysisFindingsInput;
};


export type QueryListSoftwareCompositionAnalysisFindingsMigrationArgs = {
    input: ListSoftwareCompositionAnalysisFindingsInputMigrationInput;
};


export type QueryGetSoftwareCompositionAnalysisFindingMigrationArgs = {
    input: GetSoftwareCompositionAnalysisFindingInputMigrationInput;
};


export type QueryListSoftwareCompositionAnalysisFindingStatisticsMigrationArgs = {
    input: ListSoftwareCompositionAnalysisFindingsInputMigrationInput;
};


export type QueryListSoftwareCompositionAnalysisReportsArgs = {
    input: ListSoftwareCompositionAnalysisReportsInput;
};


export type QueryGetSoftwareCompositionAnalysisReportArgs = {
    input: GetSoftwareCompositionAnalysisReportInput;
};


export type QueryListSoftwareCompositionAnalysisReportsMigrationArgs = {
    input: ListSoftwareCompositionAnalysisReportsInputMigrationInput;
};


export type QueryGetSoftwareCompositionAnalysisReportMigrationArgs = {
    input: GetSoftwareCompositionAnalysisReportInputMigrationInput;
};


export type QueryListSoftwareTestingReportsArgs = {
    input: ListSoftwareTestingReportsInput;
};


export type QueryGetSoftwareTestingReportArgs = {
    input: GetSoftwareTestingReportInput;
};


export type QueryListSoftwareTestingReportsMigrationArgs = {
    input: ListSoftwareTestingReportsInputMigrationInput;
};


export type QueryGetSoftwareTestingReportMigrationArgs = {
    input: GetSoftwareTestingReportInputMigrationInput;
};


export type QueryListSourcePullRequestsArgs = {
    input: ListSourcePullRequestsInput;
};


export type QueryGetSourcePullRequestArgs = {
    input: GetSourcePullRequestInput;
};


export type QueryGetPullRequestRequirementStatusArgs = {
    input: GetPullRequestRequirementStatusInput;
};


export type QueryListSourceRevisionsArgs = {
    input: ListSourceRevisionsInput;
};


export type QueryListSourceRepositoriesArgs = {
    input: ListSourceRepositoriesInput;
};


export type QueryGetSourceRepositoryArgs = {
    input: GetSourceRepositoryInput;
};


export type QueryDescribeSourceRepositoryEndpointsArgs = {
    input: DescribeSourceRepositoryEndpointsInput;
};


export type QueryListSourceBranchesArgs = {
    input: ListSourceBranchesInput;
};


export type QueryGetSourceBranchArgs = {
    input: GetSourceBranchInput;
};


export type QueryGetSourceCommitArgs = {
    input: GetSourceCommitInput;
};


export type QueryListSourceDifferenceMetadataArgs = {
    input: ListSourceDifferenceMetadataInput;
};


export type QueryGetSourceFileArgs = {
    input: GetSourceFileInput;
};


export type QueryGetSourceFolderArgs = {
    input: GetSourceFolderInput;
};


export type QueryListStaticAnalysisFindingsArgs = {
    input: ListStaticAnalysisFindingsRequestInput;
};


export type QueryGetStaticAnalysisFindingArgs = {
    input: GetStaticAnalysisFindingRequestInput;
};


export type QueryListStaticAnalysisFindingStatisticsArgs = {
    input: ListStaticAnalysisFindingsStatisticsRequestInput;
};


export type QueryListStaticAnalysisReportsArgs = {
    input: ListStaticAnalysisReportsRequestInput;
};


export type QueryGetStaticAnalysisReportArgs = {
    input: GetStaticAnalysisReportRequestInput;
};


export type QueryListTestActionRunsArgs = {
    input: ListTestActionRunsRequestInput;
};


export type QueryGetTestActionRunArgs = {
    input: GetTestActionRunRequestInput;
};


export type QueryListTestReportsArgs = {
    input: ListTestReportsInput;
};


export type QueryGetTestReportArgs = {
    input: GetTestReportInput;
};


export type QueryListTestReportsMigrationArgs = {
    input: ListTestReportsInputMigrationInput;
};


export type QueryGetTestReportMigrationArgs = {
    input: GetTestReportInputMigrationInput;
};


export type QueryListTestReportStatusesArgs = {
    input: ListTestReportStatusesInput;
};


export type QueryGetTestReportStatusArgs = {
    input: GetTestReportStatusInput;
};


export type QueryListTestReportStatusesMigrationArgs = {
    input: ListTestReportStatusesInputMigrationInput;
};


export type QueryGetTestReportStatusMigrationArgs = {
    input: GetTestReportStatusInputMigrationInput;
};


export type QueryListWorkflowsArgs = {
    input: ListWorkflowsInput;
};


export type QueryGetWorkflowArgs = {
    input: GetWorkflowInput;
};


export type QueryGetWorkflowStateArgs = {
    input: GetWorkflowStateInput;
};


export type QueryListWorkflowRunsArgs = {
    input: ListWorkflowRunsInput;
};


export type QueryGetWorkflowRunArgs = {
    input: GetWorkflowRunInput;
};


export type QueryDescribeSubscriptionArgs = {
    input: DescribeSubscriptionRequestInput;
};


export type QueryListTeamsArgs = {
    input: ListTeamInput;
};


export type QueryGetTeamArgs = {
    input: GetTeamInput;
};


export type QueryDescribeOrganizationUsageReportArgs = {
    input: DescribeOrganizationUsageReportRequestInput;
};


export type QueryGetUserNotificationSettingsArgs = {
    input: GetUserNotificationSettingsRequestInput;
};


export type QueryGetPersonArgs = {
    input: GetPersonRequestInput;
};


export type QueryListActiveProjectInvitationsArgs = {
    input: ListActiveProjectInvitationsRequestInput;
};


export type QueryGetProjectInvitationByIdArgs = {
    input: GetProjectInvitationByIdRequestInput;
};


export type QueryListPullRequestCommentsArgs = {
    input: ListPullRequestCommentsInput;
};


export type QueryListRoleMappingsArgs = {
    input: ListRoleMappingInput;
};


export type QueryGetRoleMappingArgs = {
    input: GetRoleMappingInput;
};


export type QueryGetOrganizationRoleMappingArgs = {
    input: GetOrganizationRoleMappingInput;
};


export type QueryGetProjectRoleMappingArgs = {
    input: GetProjectRoleMappingInput;
};


export type QueryListRoleMappingsMigrationArgs = {
    input: ListRoleMappingMigrationInput;
};


export type QueryGetRoleMappingMigrationArgs = {
    input: GetRoleMappingMigrationInput;
};


export type QuerySearchActionLogsArgs = {
    input: SearchActionLogsInput;
};


export type QueryListSourcePullRequestToJiraIssueLinksArgs = {
    input: ListSourcePullRequestToJiraIssueLinkInput;
};


export type QueryGetSshPublicKeyArgs = {
    input: GetSshPublicKeyRequestInput;
};


export type QueryListTestActionsMigrationArgs = {
    input: ListTestActionsMigrationInput;
};


export type QueryGetTestActionMigrationArgs = {
    input: GetTestActionMigrationInput;
};


export type QueryListTestCaseRunResultsArgs = {
    input: ListTestCaseRunResultsInput;
};


export type QueryGetTestCaseRunResultsArgs = {
    input: GetTestCaseRunResultsInput;
};


export type QueryListTestCaseRunResultsStatisticsArgs = {
    input: ListTestCaseRunResultsInput;
};


export type QueryListTestCaseRunResultsMigrationArgs = {
    input: ListTestCaseRunResultsInputMigrationInput;
};


export type QueryGetTestCaseRunResultsMigrationArgs = {
    input: GetTestCaseRunResultsInputMigrationInput;
};


export type QueryListTestCaseRunResultsStatisticsMigrationArgs = {
    input: ListTestCaseRunResultsInputMigrationInput;
};


export type QueryGetAuthenticationRedirectArgs = {
    input: GetAuthenticationRedirectRequestInput;
};


export type QueryGetPersonByUserNameArgs = {
    input: GetPersonByUserNameRequestInput;
};


export type QueryGetUserDetailsArgs = {
    input: GetUserDetailsRequestInput;
};


export type QueryGetSourceRepositoryFileArgs = {
    input?: Maybe<GetSourceRepositoryFileInput>;
};


export type QueryGetSourceRepositoryFolderArgs = {
    input?: Maybe<GetSourceRepositoryFolderInput>;
};


export type QueryGetSourceRepositoryCommitArgs = {
    input?: Maybe<GetSourceRepositoryCommitInput>;
};


export type QueryGetSourceRepositoryCommitHistoryArgs = {
    input?: Maybe<GetSourceRepositoryCommitHistoryInput>;
};


export type QueryGetSourceRepositoryCloneUrlsArgs = {
    input?: Maybe<GetSourceRepositoryCloneUrlsInput>;
};


export type QueryListPullRequestsArgs = {
    input?: Maybe<ListPullRequestsInput>;
};


export type QueryGetSourceRepositoryCommitDifferencesArgs = {
    input?: Maybe<GetSourceRespositoryCommitDifferencesInput>;
};

export type QuestionInformation = {
    __typename?: 'QuestionInformation';
    questionType?: Maybe<Scalars['String']>;
    questionId?: Maybe<Scalars['String']>;
    answers?: Maybe<Array<Maybe<AnswerInformation>>>;
};

export type QuestionInformationInput = {
    questionType?: Maybe<Scalars['String']>;
    questionId?: Maybe<Scalars['String']>;
    answers?: Maybe<Array<Maybe<AnswerInformationInput>>>;
};

export type ReasonTemplateVariable = {
    __typename?: 'ReasonTemplateVariable';
    /**
   * * **Constraints**
   *   * Required
   */
    key: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    value: Scalars['String'];
};

export type ReferenceAstsMap = {
    __typename?: 'ReferenceAstsMap';
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type RelatedLocations = {
    __typename?: 'RelatedLocations';
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
    locations?: Maybe<Array<Maybe<AnalysisFindingLocation>>>;
};

export type RelatedLocationsMigration = {
    __typename?: 'RelatedLocationsMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
    locations?: Maybe<Array<Maybe<AnalysisFindingLocationMigration>>>;
};

export type RemoveUserFromRoleInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type RemoveUserFromRoleMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    userId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleId: Scalars['String'];
};

export type RemoveUserFromRoleMigrationOutput = {
    __typename?: 'RemoveUserFromRoleMigrationOutput';
    friendlyArn?: Maybe<Scalars['String']>;
};

export type RemoveUserFromRoleOutput = {
    __typename?: 'RemoveUserFromRoleOutput';
    friendlyArn?: Maybe<Scalars['String']>;
};

export type RenameOrganizationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    newName: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
};

export type RenameOrganizationOutput = {
    __typename?: 'RenameOrganizationOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type RenameProjectInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    newName: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
};

export type RenameProjectOutput = {
    __typename?: 'RenameProjectOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type RepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName?: Maybe<Scalars['String']>;
};

export type ResourceMap = {
    __typename?: 'ResourceMap';
    key: Scalars['String'];
    value: Scalars['String'];
};

export type ResourceMapInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};

export type ResourceRef = {
    __typename?: 'ResourceRef';
    type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type ResourceRefInput = {
    type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type RetryTestActionTestCasesMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    testId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    testSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `TestActionTestCasesRetryModeMigration`
   * * **Constraints**
   *   * Required
   */
    retryMode: Scalars['String'];
    testCaseNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RetryTestActionTestCasesMigrationOutput = {
    __typename?: 'RetryTestActionTestCasesMigrationOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    status: Scalars['String'];
};

export type RetryTestActionTestCasesOutput = {
    __typename?: 'RetryTestActionTestCasesOutput';
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    status: Scalars['String'];
};

export type RetryTestActionTestCasesRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    testSummaryId: Scalars['String'];
    /**
   * * **Simple Shape:** `TestActionTestCasesRetryMode`
   * * **Constraints**
   *   * Required
   */
    retryMode: Scalars['String'];
    testCaseNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RevokeSessionOutput = {
    __typename?: 'RevokeSessionOutput';
    redirect?: Maybe<Scalars['String']>;
};

export type RevokeSessionRequestInput = {
    callbackUri?: Maybe<Scalars['String']>;
};

export type RoleMappingMemberAssociation = {
    __typename?: 'RoleMappingMemberAssociation';
    roleId?: Maybe<Scalars['String']>;
    associatedIdentities?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoleMappingMemberAssociationInput = {
    roleId?: Maybe<Scalars['String']>;
    associatedIdentities?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoleMappingMemberAssociationMigration = {
    __typename?: 'RoleMappingMemberAssociationMigration';
    roleId?: Maybe<Scalars['String']>;
    associatedIdentities?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoleMappingMemberAssociationMigrationInput = {
    roleId?: Maybe<Scalars['String']>;
    associatedIdentities?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoleMappingObject = {
    __typename?: 'RoleMappingObject';
    id?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    resourceId?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    roleMappings?: Maybe<Array<Maybe<RoleMappingMemberAssociation>>>;
};

export type RoleMappingObjectMigration = {
    __typename?: 'RoleMappingObjectMigration';
    id?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    resourceId?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    roleMappings?: Maybe<Array<Maybe<RoleMappingMemberAssociationMigration>>>;
};

export type SshPublicKeySummary = {
    __typename?: 'SSHPublicKeySummary';
    /**
   * * **Simple Shape:** `SSHPublicKeyIdString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[A-Fa-f0-9]{64}$/`
   */
    SSHPublicKeyId: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyImportDateTimestamp`
   * * **Constraints**
   *   * Required
   */
    importDate: Scalars['String'];
    /**
   * * **Simple Shape:** `SSHPublicKeyBodyString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 5000
   */
    SSHPublicKeyBody: Scalars['String'];
};

export type SavedView = {
    __typename?: 'SavedView';
    /**
   * * **Constraints**
   *   * Required
   */
    viewId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    viewName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 600
   */
    viewData: Scalars['String'];
};

export type SavedViewInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    viewId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 50
   */
    viewName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 600
   */
    viewData: Scalars['String'];
};

export type SearchActionLogEvent = {
    __typename?: 'SearchActionLogEvent';
    timestamp?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    eventId?: Maybe<Scalars['String']>;
};

export type SearchActionLogsInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    workflowId?: Maybe<Scalars['String']>;
    workflowRunId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    searchPattern: Scalars['String'];
    pageSize?: Maybe<Scalars['Int']>;
    nextToken?: Maybe<Scalars['String']>;
};

export type SearchActionLogsOutput = {
    __typename?: 'SearchActionLogsOutput';
    events?: Maybe<Array<Maybe<SearchActionLogEvent>>>;
    nextToken?: Maybe<Scalars['String']>;
};

export type SearchCodeData = {
    __typename?: 'SearchCodeData';
    /**
   * * **Constraints**
   *   * Required
   */
    branch: Scalars['String'];
    code?: Maybe<Array<Maybe<SearchCodeSnippet>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitMessage: Scalars['String'];
    lastUpdatedBy?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedById: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    project?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    projectId: Scalars['String'];
    repo?: Maybe<Scalars['String']>;
    repoId?: Maybe<Scalars['String']>;
    repository?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryId: Scalars['String'];
};

export type SearchCodeSnippet = {
    __typename?: 'SearchCodeSnippet';
    /**
   * * **Constraints**
   *   * Required
   */
    text: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    number: Scalars['Int'];
};

export type SearchData = {
    __typename?: 'SearchData';
    code?: Maybe<SearchCodeData>;
    issue?: Maybe<SearchIssueData>;
    user?: Maybe<SearchUserData>;
    package?: Maybe<SearchPackageData>;
    project?: Maybe<SearchProjectData>;
    pullRequest?: Maybe<SearchPullRequestData>;
};

export type SearchHit = {
    __typename?: 'SearchHit';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    matchedData: SearchData;
    /**
   * * **Constraints**
   *   * Required
   */
    highlightTag: Scalars['String'];
};

export type SearchIssueData = {
    __typename?: 'SearchIssueData';
    archived?: Maybe<Scalars['String']>;
    assignee?: Maybe<Array<Maybe<Scalars['String']>>>;
    assigneeId?: Maybe<Array<Maybe<Scalars['String']>>>;
    blocked?: Maybe<Scalars['String']>;
    createdBy?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    createdById: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    createdTime: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    issueStore?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    issueStoreId: Scalars['String'];
    labelId?: Maybe<Array<Maybe<Scalars['String']>>>;
    lastUpdatedBy?: Maybe<Scalars['String']>;
    lastUpdatedById?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    priority?: Maybe<Scalars['String']>;
    project?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    projectId: Scalars['String'];
    shortId?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    statusId?: Maybe<Scalars['String']>;
    statusValue?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    issueType?: Maybe<Scalars['String']>;
    issueSource?: Maybe<Scalars['String']>;
    providerCanonicalUrl?: Maybe<Scalars['String']>;
};

export type SearchOrderByFieldInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    fieldName: Scalars['String'];
    /** * **Simple Shape:** `SearchOrderByDirection` */
    direction?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SearchOrderByMissingValuePosition` */
    missingValues?: Maybe<Scalars['String']>;
};

export type SearchOrderByInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    fields?: Maybe<Array<Maybe<SearchOrderByFieldInput>>>;
};

export type SearchOutput = {
    __typename?: 'SearchOutput';
    hits?: Maybe<Array<Maybe<SearchHit>>>;
    results?: Maybe<Array<Maybe<SearchResult>>>;
    previousToken?: Maybe<Scalars['String']>;
    nextToken?: Maybe<Scalars['String']>;
    total?: Maybe<Scalars['String']>;
};

export type SearchPackageData = {
    __typename?: 'SearchPackageData';
    description?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    format: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    isCanonicalOrigin: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    isThirdParty: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    latestVersion: Scalars['String'];
    license?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    namespace: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    origin: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    package: Scalars['String'];
    project?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    projectId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    publishedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    readme: Array<Maybe<SearchCodeSnippet>>;
    repo?: Maybe<Scalars['String']>;
    repoId?: Maybe<Scalars['String']>;
    repository?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
};

export type SearchProjectData = {
    __typename?: 'SearchProjectData';
    description?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    project?: Maybe<Scalars['String']>;
    projectPath?: Maybe<Scalars['String']>;
};

export type SearchPullRequestData = {
    __typename?: 'SearchPullRequestData';
    title?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    number: Scalars['String'];
    project?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    projectId: Scalars['String'];
    repository?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    createdBy?: Maybe<Scalars['String']>;
    createdById?: Maybe<Scalars['String']>;
    author?: Maybe<Array<Maybe<Scalars['String']>>>;
    authorId?: Maybe<Array<Maybe<Scalars['String']>>>;
    reviewer?: Maybe<Array<Maybe<Scalars['String']>>>;
    reviewerId?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    sourceBranch: Scalars['String'];
    destinationBranch?: Maybe<Scalars['String']>;
    committer?: Maybe<Scalars['String']>;
    committerId?: Maybe<Scalars['String']>;
    sourceCommitId?: Maybe<Scalars['String']>;
    mergeCommitId?: Maybe<Scalars['String']>;
    commitMessage?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};

export type SearchRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    term: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 2560
   */
    token?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SearchPaginationMode` */
    paginationMode?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 25
   */
    maxResults?: Maybe<Scalars['Int']>;
    eagerRead?: Maybe<Scalars['Boolean']>;
    nearRealTime?: Maybe<Scalars['Boolean']>;
    /** * **Simple Shape:** `SearchReadMode` */
    readMode?: Maybe<Scalars['String']>;
    orderBy?: Maybe<SearchOrderByInput>;
};

export type SearchResult = {
    __typename?: 'SearchResult';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    matchedData: SearchData;
    /**
   * * **Constraints**
   *   * Required
   */
    highlightTag: Scalars['String'];
};

export type SearchUserData = {
    __typename?: 'SearchUserData';
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    displayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    email: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    username: Scalars['String'];
    project?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SecretMetadata = {
    __typename?: 'SecretMetadata';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    referenceId?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
};

export type SendOrganizationInvitationOutput = {
    __typename?: 'SendOrganizationInvitationOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    timestamp: Scalars['String'];
    inviterUserName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeEmailAddress: Scalars['String'];
    inviteeDisplayName?: Maybe<Scalars['String']>;
    signupEmailAddress?: Maybe<Scalars['String']>;
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InvitationStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `OrganizationRoles`
   * * **Constraints**
   *   * Required
   */
    inviteeRole: Scalars['String'];
};

export type SendOrganizationInvitationRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeEmailAddress: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeDisplayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeRole: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/`
   */
    clientToken: Scalars['String'];
    organizationInvitationId?: Maybe<Scalars['String']>;
};

export type SendProjectInvitationOutput = {
    __typename?: 'SendProjectInvitationOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    projectInvitation: ProjectInvitation;
};

export type SendProjectInvitationRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeEmailAddress: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeDisplayName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    inviteeRole: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/`
   */
    clientToken: Scalars['String'];
    projectInvitationId?: Maybe<Scalars['String']>;
};

export type SetSourceRepositoryFileModeInput = {
    filePath: Scalars['String'];
    fileMode: SourceRepositoryFileModeType;
};

export type SetSubscriptionOutput = {
    __typename?: 'SetSubscriptionOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SubscriptionTypeString` */
    subscriptionType?: Maybe<Scalars['String']>;
};

export type SetSubscriptionRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    awsAccountName: Scalars['String'];
    /**
   * * **Simple Shape:** `SubscriptionTypeString`
   * * **Constraints**
   *   * Required
   */
    subscriptionType: Scalars['String'];
};

export type SoftwareCompositionAnalysisDirectoryLevelFinding = {
    __typename?: 'SoftwareCompositionAnalysisDirectoryLevelFinding';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    childDirectories: Array<Maybe<Scalars['String']>>;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryStatistics: SoftwareCompositionAnalysisScanStatistics;
    parent?: Maybe<Scalars['String']>;
};

export type SoftwareCompositionAnalysisDirectoryLevelFindingMigration = {
    __typename?: 'SoftwareCompositionAnalysisDirectoryLevelFindingMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    childDirectories: Array<Maybe<Scalars['String']>>;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryStatistics: SoftwareCompositionAnalysisScanStatisticsMigration;
    parent?: Maybe<Scalars['String']>;
};

export type SoftwareCompositionAnalysisFindingListOutput = {
    __typename?: 'SoftwareCompositionAnalysisFindingListOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    findingId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /** * **Simple Shape:** `AnalysisFindingScore` */
    score?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    severity: AnalysisFindingSeverity;
    recommendation?: Maybe<AnalysisFindingMessage>;
    location?: Maybe<AnalysisFindingLocation>;
    relatedLocations?: Maybe<RelatedLocations>;
    category?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    rule: AnalysisFindingRule;
    message?: Maybe<AnalysisFindingMessage>;
    additionalToolProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
};

export type SoftwareCompositionAnalysisFindingListOutputMigration = {
    __typename?: 'SoftwareCompositionAnalysisFindingListOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    findingId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /** * **Simple Shape:** `AnalysisFindingScoreMigration` */
    score?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    severity: AnalysisFindingSeverityMigration;
    recommendation?: Maybe<AnalysisFindingMessageMigration>;
    location?: Maybe<AnalysisFindingLocationMigration>;
    relatedLocations?: Maybe<RelatedLocationsMigration>;
    category?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    rule: AnalysisFindingRuleMigration;
    message?: Maybe<AnalysisFindingMessageMigration>;
    additionalToolProperties?: Maybe<Array<Maybe<AdditionalPropertyMigration>>>;
};

export type SoftwareCompositionAnalysisFindingOutput = {
    __typename?: 'SoftwareCompositionAnalysisFindingOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    findingId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    severity: AnalysisFindingSeverity;
    /** * **Simple Shape:** `AnalysisFindingScore` */
    score?: Maybe<Scalars['Float']>;
    category?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    rule: AnalysisFindingRule;
    message?: Maybe<AnalysisFindingMessage>;
    recommendation?: Maybe<AnalysisFindingMessage>;
    location?: Maybe<AnalysisFindingLocation>;
    relatedLocations?: Maybe<RelatedLocations>;
    additionalToolProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
};

export type SoftwareCompositionAnalysisFindingOutputMigration = {
    __typename?: 'SoftwareCompositionAnalysisFindingOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    findingId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    severity: AnalysisFindingSeverityMigration;
    /** * **Simple Shape:** `AnalysisFindingScoreMigration` */
    score?: Maybe<Scalars['Float']>;
    category?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    rule: AnalysisFindingRuleMigration;
    message?: Maybe<AnalysisFindingMessageMigration>;
    recommendation?: Maybe<AnalysisFindingMessageMigration>;
    location?: Maybe<AnalysisFindingLocationMigration>;
    relatedLocations?: Maybe<RelatedLocationsMigration>;
    additionalToolProperties?: Maybe<Array<Maybe<AdditionalPropertyMigration>>>;
};

export type SoftwareCompositionAnalysisReportSourceFiles = {
    __typename?: 'SoftwareCompositionAnalysisReportSourceFiles';
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportFiles: Array<Maybe<TestReportFileDetails>>;
};

export type SoftwareCompositionAnalysisReportSourceFilesMigration = {
    __typename?: 'SoftwareCompositionAnalysisReportSourceFilesMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportFiles: Array<Maybe<TestReportFileDetailsMigration>>;
};

export type SoftwareCompositionAnalysisReportSummary = {
    __typename?: 'SoftwareCompositionAnalysisReportSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanRunTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    scanStatistics: SoftwareCompositionAnalysisScanStatistics;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    pullRequestId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    rawReportFiles: SoftwareCompositionAnalysisReportSourceFiles;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryLevelFindings: Array<Maybe<SoftwareCompositionAnalysisDirectoryLevelFinding>>;
    /**
   * * **Constraints**
   *   * Required
   */
    toolDetails: SoftwareCompositionAnalysisToolDetails;
};

export type SoftwareCompositionAnalysisReportSummaryMigration = {
    __typename?: 'SoftwareCompositionAnalysisReportSummaryMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanRunTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    scanStatistics: SoftwareCompositionAnalysisScanStatisticsMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    pullRequestId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    rawReportFiles: SoftwareCompositionAnalysisReportSourceFilesMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryLevelFindings: Array<Maybe<SoftwareCompositionAnalysisDirectoryLevelFindingMigration>>;
    /**
   * * **Constraints**
   *   * Required
   */
    toolDetails: SoftwareCompositionAnalysisToolDetailsMigration;
};

export type SoftwareCompositionAnalysisScanStatistics = {
    __typename?: 'SoftwareCompositionAnalysisScanStatistics';
    /**
   * * **Constraints**
   *   * Required
   */
    totalPackagesScanned: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalFindings: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityCounts: Array<Maybe<AnalysisCounter>>;
    originalSeverityCounts?: Maybe<Array<Maybe<AnalysisCounter>>>;
    categoryCounts?: Maybe<Array<Maybe<AnalysisCounter>>>;
};

export type SoftwareCompositionAnalysisScanStatisticsMigration = {
    __typename?: 'SoftwareCompositionAnalysisScanStatisticsMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    totalPackagesScanned: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    totalFindings: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    mappedSeverityCounts: Array<Maybe<AnalysisCounterMigration>>;
    originalSeverityCounts?: Maybe<Array<Maybe<AnalysisCounterMigration>>>;
    categoryCounts?: Maybe<Array<Maybe<AnalysisCounterMigration>>>;
};

export type SoftwareCompositionAnalysisToolDetails = {
    __typename?: 'SoftwareCompositionAnalysisToolDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    vendorName?: Maybe<Scalars['String']>;
};

export type SoftwareCompositionAnalysisToolDetailsMigration = {
    __typename?: 'SoftwareCompositionAnalysisToolDetailsMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    vendorName?: Maybe<Scalars['String']>;
};

export type SoftwareTestingReportRunDetails = {
    __typename?: 'SoftwareTestingReportRunDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    reportRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastRunAt: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    passingStatus: Scalars['String'];
};

export type SoftwareTestingReportRunDetailsMigration = {
    __typename?: 'SoftwareTestingReportRunDetailsMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    reportRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastRunAt: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    passingStatus: Scalars['String'];
};

export type SoftwareTestingReportSummary = {
    __typename?: 'SoftwareTestingReportSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    latestReportRun: SoftwareTestingReportRunDetails;
};

export type SoftwareTestingReportSummaryMigration = {
    __typename?: 'SoftwareTestingReportSummaryMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    latestReportRun: SoftwareTestingReportRunDetailsMigration;
};

export type SortParamInput = {
    key?: Maybe<Scalars['String']>;
    direction?: Maybe<Scalars['String']>;
};

export type SourceAutoInitializeInput = {
    repositoryTemplateType?: Maybe<Scalars['String']>;
    readmeType?: Maybe<Scalars['String']>;
    gitIgnoreType?: Maybe<Scalars['String']>;
};

export type SourceAutoInitializeSummary = {
    __typename?: 'SourceAutoInitializeSummary';
    repositoryTemplateType?: Maybe<Scalars['String']>;
    readmeType?: Maybe<Scalars['String']>;
    gitIgnoreType?: Maybe<Scalars['String']>;
};

export type SourceBranchSummary = {
    __typename?: 'SourceBranchSummary';
    id?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    branchName?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    headCommitId?: Maybe<Scalars['String']>;
    beforeCommitId?: Maybe<Scalars['String']>;
    beforeDocumentCommitId?: Maybe<Scalars['String']>;
    ordinal?: Maybe<Scalars['Int']>;
};

export type SourceCommitFileMetadataSummary = {
    __typename?: 'SourceCommitFileMetadataSummary';
    absolutePath?: Maybe<Scalars['String']>;
    blobId?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SourceFileMode` */
    fileMode?: Maybe<Scalars['String']>;
};

export type SourceCommitFileModeToSetInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    filePath: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceFileMode`
   * * **Constraints**
   *   * Required
   */
    fileMode: Scalars['String'];
};

export type SourceCommitFileSpecifierInput = {
    filePath?: Maybe<Scalars['String']>;
    isMove?: Maybe<Scalars['Boolean']>;
};

export type SourceCommitFileToDeleteInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    filePath: Scalars['String'];
};

export type SourceCommitFileToPutInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    filePath: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceFileMode`
   * * **Constraints**
   *   * Required
   */
    fileMode: Scalars['String'];
    fileContent?: Maybe<Scalars['String']>;
    sourceFile?: Maybe<SourceCommitFileSpecifierInput>;
};

export type SourceCommitSummary = {
    __typename?: 'SourceCommitSummary';
    title?: Maybe<Scalars['String']>;
    repositoryId?: Maybe<Scalars['String']>;
    sha1?: Maybe<Scalars['String']>;
    treeSha1?: Maybe<Scalars['String']>;
    parentSha1s?: Maybe<Array<Maybe<Scalars['String']>>>;
    message?: Maybe<Scalars['String']>;
    author?: Maybe<Author>;
    committer?: Maybe<Author>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    additionalData?: Maybe<Scalars['String']>;
};

export type SourceDifferenceBlobMetadata = {
    __typename?: 'SourceDifferenceBlobMetadata';
    commitSpecifier?: Maybe<Scalars['String']>;
    blobSha1?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    mode?: Maybe<Scalars['String']>;
};

export type SourceDifferenceMetadataSummary = {
    __typename?: 'SourceDifferenceMetadataSummary';
    title?: Maybe<Scalars['String']>;
    before?: Maybe<SourceDifferenceBlobMetadata>;
    after?: Maybe<SourceDifferenceBlobMetadata>;
    /** * **Simple Shape:** `SourceDifferenceChangeType` */
    changeType?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
};

export type SourceFileMetadataSummary = {
    __typename?: 'SourceFileMetadataSummary';
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    blobSha1?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SourceFileMode` */
    fileMode?: Maybe<Scalars['String']>;
};

export type SourceFileSummary = {
    __typename?: 'SourceFileSummary';
    title?: Maybe<Scalars['String']>;
    commitSha1?: Maybe<Scalars['String']>;
    blobSha1?: Maybe<Scalars['String']>;
    filePath?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    fileSizeInBytes?: Maybe<Scalars['Int']>;
    /** * **Simple Shape:** `SourceFileMode` */
    fileMode?: Maybe<Scalars['String']>;
    fileContent?: Maybe<Scalars['String']>;
};

export type SourceFolderSummary = {
    __typename?: 'SourceFolderSummary';
    title?: Maybe<Scalars['String']>;
    folderPath?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    commitSha1?: Maybe<Scalars['String']>;
    treeSha1?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<SourceFileMetadataSummary>>>;
    subFolders?: Maybe<Array<Maybe<SourceSubFoldersMetadataSummary>>>;
    subModules?: Maybe<Array<Maybe<SourceSubModulesMetadataSummary>>>;
    symbolicLinks?: Maybe<Array<Maybe<SourceSymbolicLinksMetadataSummary>>>;
};

export type SourceMergeRequirements = {
    __typename?: 'SourceMergeRequirements';
    requiredReviewers?: Maybe<Array<Maybe<SourcePullRequestContributor>>>;
};

export type SourcePullRequestContributor = {
    __typename?: 'SourcePullRequestContributor';
    id?: Maybe<GetPersonOutput>;
};

export type SourcePullRequestMergeRequirements = {
    __typename?: 'SourcePullRequestMergeRequirements';
    requiredReviewersApprovalRule?: Maybe<SourcePullRequestRequiredReviewersApprovalRule>;
};

export type SourcePullRequestRequiredReviewersApprovalRule = {
    __typename?: 'SourcePullRequestRequiredReviewersApprovalRule';
    reviewersApproved?: Maybe<Array<Maybe<Scalars['String']>>>;
    reviewersRequired?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SourcePullRequestSummary = {
    __typename?: 'SourcePullRequestSummary';
    id?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SourcePullRequestNumber` */
    number?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourcePullRequestTitle`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   */
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    author?: Maybe<GetPersonOutput>;
    coAuthors?: Maybe<Array<Maybe<SourcePullRequestContributor>>>;
    optionalReviewers?: Maybe<Array<Maybe<SourcePullRequestContributor>>>;
    mergeRequirements?: Maybe<SourceMergeRequirements>;
    repositoryId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    repositoryName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceBranchReference?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    destinationBranchReference?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    creationTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `SourcePullRequestStatus` */
    status?: Maybe<Scalars['String']>;
    revisions?: Maybe<ListSourceRevisionsOutput>;
};


export type SourcePullRequestSummaryRevisionsArgs = {
    nextToken?: Maybe<Scalars['String']>;
    maxResults?: Maybe<Scalars['Int']>;
};

export type SourcePullRequestToJiraIssueLinkSummary = {
    __typename?: 'SourcePullRequestToJiraIssueLinkSummary';
    issue?: Maybe<ExtensionIssueSummary>;
    linkId?: Maybe<Scalars['String']>;
};

export type SourceRepositoryBlobMetadata = {
    __typename?: 'SourceRepositoryBlobMetadata';
    blobId?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    mode?: Maybe<Scalars['String']>;
};

export type SourceRepositoryCloneUrl = {
    __typename?: 'SourceRepositoryCloneUrl';
    name: Scalars['String'];
    url: Scalars['String'];
};

export type SourceRepositoryCommit = {
    __typename?: 'SourceRepositoryCommit';
    additionalData?: Maybe<Scalars['String']>;
    author: SourceRepositoryUserInfo;
    commitId: Scalars['String'];
    committer: SourceRepositoryUserInfo;
    message: Scalars['String'];
    parents: Array<Scalars['String']>;
    treeId: Scalars['String'];
};

export type SourceRepositoryCommitDifference = {
    __typename?: 'SourceRepositoryCommitDifference';
    afterBlob?: Maybe<SourceRepositoryBlobMetadata>;
    beforeBlob?: Maybe<SourceRepositoryBlobMetadata>;
    changeType?: Maybe<Scalars['String']>;
    renderContent?: Maybe<SourceRepositoryDifferenceRenderContent>;
};

export type SourceRepositoryCommitDifferences = {
    __typename?: 'SourceRepositoryCommitDifferences';
    differences: Array<SourceRepositoryCommitDifference>;
    nextToken?: Maybe<Scalars['String']>;
};

export type SourceRepositoryCommitHistoryEntries = {
    __typename?: 'SourceRepositoryCommitHistoryEntries';
    entries: Array<SourceRepositoryCommit>;
    nextToken?: Maybe<Scalars['String']>;
};

export type SourceRepositoryDifferenceRenderContent = {
    __typename?: 'SourceRepositoryDifferenceRenderContent';
    innerHtml?: Maybe<Scalars['String']>;
};

export type SourceRepositoryEndpointSummary = {
    __typename?: 'SourceRepositoryEndpointSummary';
    protocol?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SourceRepositoryFile = {
    __typename?: 'SourceRepositoryFile';
    blobId: Scalars['String'];
    commitId: Scalars['String'];
    fileContent: Scalars['String'];
    fileMode: Scalars['String'];
    filePath: Scalars['String'];
    fileSize: Scalars['String'];
};

export type SourceRepositoryFileMetadata = {
    __typename?: 'SourceRepositoryFileMetadata';
    absolutePath?: Maybe<Scalars['String']>;
    blobId?: Maybe<Scalars['String']>;
    fileMode?: Maybe<SourceRepositoryFileModeType>;
};

export enum SourceRepositoryFileModeType {
    Executable = 'EXECUTABLE',
    Normal = 'NORMAL',
    Symlink = 'SYMLINK'
}

export type SourceRepositoryFileReference = {
    __typename?: 'SourceRepositoryFileReference';
    blobId: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    fileMode?: Maybe<SourceRepositoryFileModeType>;
};

export type SourceRepositoryFileSpecifier = {
    filePath?: Maybe<Scalars['String']>;
    isMove?: Maybe<Scalars['Boolean']>;
};

export type SourceRepositoryFolder = {
    __typename?: 'SourceRepositoryFolder';
    commitId?: Maybe<Scalars['String']>;
    folderPath?: Maybe<Scalars['String']>;
    treeId?: Maybe<Scalars['String']>;
    subFolders?: Maybe<Array<Maybe<SourceRepositoryFolderReference>>>;
    files?: Maybe<Array<Maybe<SourceRepositoryFileReference>>>;
    symbolicLinks?: Maybe<Array<Maybe<SourceRepositoryFileReference>>>;
    subModules?: Maybe<Array<Maybe<SourceRepositorySubModuleReference>>>;
};

export type SourceRepositoryFolderReference = {
    __typename?: 'SourceRepositoryFolderReference';
    treeId: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
};

export type SourceRepositoryLinkableSummary = {
    __typename?: 'SourceRepositoryLinkableSummary';
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `LinkStatus` */
    linkStatus?: Maybe<Scalars['String']>;
    providerCanonicalId?: Maybe<Scalars['String']>;
    providerCanonicalUrl?: Maybe<Scalars['String']>;
};

export type SourceRepositoryMetadataSummary = {
    __typename?: 'SourceRepositoryMetadataSummary';
    providerCanonicalId?: Maybe<Scalars['String']>;
    providerCanonicalUrl?: Maybe<Scalars['String']>;
};

export type SourceRepositorySubModuleReference = {
    __typename?: 'SourceRepositorySubModuleReference';
    commitId: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
};

export type SourceRepositorySummary = {
    __typename?: 'SourceRepositorySummary';
    id?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    name?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    description?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourceRepositoryBranchString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    defaultBranch?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    creationDate?: Maybe<Scalars['String']>;
    autoInitialize?: Maybe<SourceAutoInitializeSummary>;
    metadata?: Maybe<SourceRepositoryMetadataSummary>;
    branches?: Maybe<ListSourceBranchesOutput>;
};


export type SourceRepositorySummaryBranchesArgs = {
    nextToken?: Maybe<Scalars['String']>;
    pageSize?: Maybe<Scalars['Int']>;
};

export type SourceRepositoryUserInfo = {
    __typename?: 'SourceRepositoryUserInfo';
    date: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
};

export type SourceRevisionSummary = {
    __typename?: 'SourceRevisionSummary';
    number?: Maybe<Scalars['Int']>;
    sourceCommitId?: Maybe<Scalars['String']>;
    mergeBaseCommitId?: Maybe<Scalars['String']>;
    pullRequestId?: Maybe<Scalars['String']>;
    approvals?: Maybe<Array<Maybe<Scalars['String']>>>;
    revokedApprovals?: Maybe<Array<Maybe<Scalars['String']>>>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
};

export type SourceSubFoldersMetadataSummary = {
    __typename?: 'SourceSubFoldersMetadataSummary';
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    treeSha1?: Maybe<Scalars['String']>;
};

export type SourceSubModulesMetadataSummary = {
    __typename?: 'SourceSubModulesMetadataSummary';
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    commitSha1?: Maybe<Scalars['String']>;
};

export type SourceSymbolicLinksMetadataSummary = {
    __typename?: 'SourceSymbolicLinksMetadataSummary';
    absolutePath?: Maybe<Scalars['String']>;
    relativePath?: Maybe<Scalars['String']>;
    commitSha1?: Maybe<Scalars['String']>;
};

export type StartDevelopmentWorkspaceOutput = {
    __typename?: 'StartDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `WorkspaceStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
};

export type StartDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
};

export type StartSessionDevelopmentWorkspaceOutput = {
    __typename?: 'StartSessionDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    accessDetails: DevelopmentWorkspaceAccessDetails;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 96
   */
    sessionId?: Maybe<Scalars['String']>;
    sessionConfiguration?: Maybe<DevelopmentWorkspaceSessionConfiguration>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName?: Maybe<Scalars['String']>;
};

export type StartSessionDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    sessionConfiguration: DevelopmentWorkspaceSessionConfigurationInput;
};

export type StartWorkflowRunInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    workflowId: Scalars['String'];
};

export type StartWorkflowRunOutput = {
    __typename?: 'StartWorkflowRunOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    version?: Maybe<Scalars['String']>;
};

export type StaticAnalysisDirectoryLevelFinding = {
    __typename?: 'StaticAnalysisDirectoryLevelFinding';
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    childDirectories: Array<Maybe<Scalars['String']>>;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryStatistics: StaticAnalysisScanStatistics;
    parent?: Maybe<Scalars['String']>;
};

export type StaticAnalysisFindingListItem = {
    __typename?: 'StaticAnalysisFindingListItem';
    /**
   * * **Constraints**
   *   * Required
   */
    findingId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 3000
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 1024
   */
    commitId: Scalars['String'];
    /** * **Simple Shape:** `AnalysisFindingScore` */
    score?: Maybe<Scalars['Float']>;
    /**
   * * **Constraints**
   *   * Required
   */
    severity: AnalysisFindingSeverity;
    recommendation?: Maybe<AnalysisFindingMessage>;
    location?: Maybe<AnalysisFindingLocation>;
    relatedLocations?: Maybe<RelatedLocations>;
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 1024
   */
    category?: Maybe<Scalars['String']>;
    message?: Maybe<AnalysisFindingMessage>;
    /**
   * * **Constraints**
   *   * Required
   */
    rule: AnalysisFindingRule;
    additionalToolProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 256
   */
    status?: Maybe<Scalars['String']>;
    estimate?: Maybe<AnalysisFindingEstimate>;
};

export type StaticAnalysisReportSourceFiles = {
    __typename?: 'StaticAnalysisReportSourceFiles';
    /**
   * * **Constraints**
   *   * Required
   */
    truncated: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportFiles: Array<Maybe<TestReportFileDetails>>;
};

export type StaticAnalysisReportSummary = {
    __typename?: 'StaticAnalysisReportSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    reportId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanRunTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    scanStatistics: StaticAnalysisScanStatistics;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    pullRequestId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    rawReportFiles: StaticAnalysisReportSourceFiles;
    /**
   * * **Constraints**
   *   * Required
   */
    directoryLevelFindings: Array<Maybe<StaticAnalysisDirectoryLevelFinding>>;
    /**
   * * **Constraints**
   *   * Required
   */
    toolDetails: StaticAnalysisToolDetails;
};

export type StaticAnalysisScanStatistics = {
    __typename?: 'StaticAnalysisScanStatistics';
    totalPackagesScanned?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Required
   */
    totalFindings: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    categories: Array<Maybe<Category>>;
};

export type StaticAnalysisToolDetails = {
    __typename?: 'StaticAnalysisToolDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    vendorName?: Maybe<Scalars['String']>;
};

export type StopDevelopmentWorkspaceOutput = {
    __typename?: 'StopDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `WorkspaceStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
};

export type StopDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
};

export type StopSessionDevelopmentWorkspaceOutput = {
    __typename?: 'StopSessionDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 96
   */
    sessionId: Scalars['String'];
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
};

export type StopSessionDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    developmentWorkspaceId: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 96
   */
    sessionId: Scalars['String'];
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
};

export type SynthesizeBlueprintOutput = {
    __typename?: 'SynthesizeBlueprintOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    synthesisId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sessionId: Scalars['String'];
};

export type SynthesizeBlueprintRequestInput = {
    sessionId?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    publisher: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    versionId?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    definition: Scalars['String'];
};

export type TeamMember = {
    __typename?: 'TeamMember';
    member?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TeamMemberRoleString` */
    role?: Maybe<Scalars['String']>;
};

export type TeamMemberInput = {
    member?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TeamMemberRoleString` */
    role?: Maybe<Scalars['String']>;
};

export type TeamObject = {
    __typename?: 'TeamObject';
    id?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    createdTime?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    members?: Maybe<Array<Maybe<TeamMember>>>;
    /** * **Simple Shape:** `TeamManagementString` */
    management?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TeamVisibilityString` */
    visibility?: Maybe<Scalars['String']>;
};

export type TemplateParamsMap = {
    __typename?: 'TemplateParamsMap';
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type TemplateParamsMapInput = {
    key: Scalars['String'];
    value?: Maybe<Scalars['String']>;
};

export type TestActionArtifact = {
    __typename?: 'TestActionArtifact';
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TestActionArtifactMigration = {
    __typename?: 'TestActionArtifactMigration';
    type?: Maybe<Scalars['String']>;
    location?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
    packaging?: Maybe<Scalars['String']>;
};

export type TestActionCommand = {
    __typename?: 'TestActionCommand';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TestActionCommandStatus` */
    status?: Maybe<Scalars['String']>;
};

export type TestActionCommandMigration = {
    __typename?: 'TestActionCommandMigration';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `PhaseTypeMigration` */
    status?: Maybe<Scalars['String']>;
};

export type TestActionComputeDetails = {
    __typename?: 'TestActionComputeDetails';
    /**
   * * **Simple Shape:** `TestActionEnvironmentType`
   * * **Constraints**
   *   * Required
   */
    environmentType: Scalars['String'];
    /**
   * * **Simple Shape:** `TestActionComputeType`
   * * **Constraints**
   *   * Required
   */
    computeType: Scalars['String'];
    computeFleetName?: Maybe<Scalars['String']>;
};

export type TestActionComputeDetailsMigration = {
    __typename?: 'TestActionComputeDetailsMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    environmentType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    computeType: Scalars['String'];
    fleetName?: Maybe<Scalars['String']>;
};

export type TestActionEnvironment = {
    __typename?: 'TestActionEnvironment';
    timeoutInSeconds?: Maybe<Scalars['Int']>;
    variables?: Maybe<Array<Maybe<TestActionEnvironmentVariable>>>;
    containerImage?: Maybe<Scalars['String']>;
};

export type TestActionEnvironmentMigration = {
    __typename?: 'TestActionEnvironmentMigration';
    debugSessionEnabled?: Maybe<Scalars['Boolean']>;
    timeoutInMinutes?: Maybe<Scalars['Int']>;
    variables?: Maybe<Array<Maybe<TestActionVariableMigration>>>;
    containerImage?: Maybe<Scalars['String']>;
};

export type TestActionEnvironmentVariable = {
    __typename?: 'TestActionEnvironmentVariable';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};

export type TestActionMigrationOutput = {
    __typename?: 'TestActionMigrationOutput';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    sources?: Maybe<Array<Maybe<TestActionSourceMigration>>>;
    fleetId?: Maybe<Scalars['String']>;
    currentPhase?: Maybe<Scalars['String']>;
    computeDetails?: Maybe<TestActionComputeDetailsMigration>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    environment?: Maybe<TestActionEnvironmentMigration>;
    artifacts?: Maybe<Array<Maybe<TestActionArtifactMigration>>>;
    reports?: Maybe<Array<Maybe<TestActionReportMigration>>>;
    phases?: Maybe<Array<Maybe<TestActionPhaseMetadataMigration>>>;
};

export type TestActionPhaseContext = {
    __typename?: 'TestActionPhaseContext';
    message?: Maybe<Scalars['String']>;
    statusCode?: Maybe<Scalars['String']>;
};

export type TestActionPhaseContextMigration = {
    __typename?: 'TestActionPhaseContextMigration';
    message?: Maybe<Scalars['String']>;
    statusCode?: Maybe<Scalars['String']>;
};

export type TestActionPhaseMetadata = {
    __typename?: 'TestActionPhaseMetadata';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    durationInSeconds?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    contexts?: Maybe<Array<Maybe<TestActionPhaseContext>>>;
    commands?: Maybe<Array<Maybe<TestActionCommand>>>;
    finallyCommands?: Maybe<Array<Maybe<TestActionCommand>>>;
};

export type TestActionPhaseMetadataMigration = {
    __typename?: 'TestActionPhaseMetadataMigration';
    name?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    durationInSeconds?: Maybe<Scalars['Int']>;
    status?: Maybe<Scalars['String']>;
    contexts?: Maybe<Array<Maybe<TestActionPhaseContextMigration>>>;
    commands?: Maybe<Array<Maybe<TestActionCommandMigration>>>;
    finallyCommands?: Maybe<Array<Maybe<TestActionCommandMigration>>>;
};

export type TestActionReport = {
    __typename?: 'TestActionReport';
    format?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
    successThresholds?: Maybe<TestActionSuccessThresholds>;
};

export type TestActionReportMigration = {
    __typename?: 'TestActionReportMigration';
    type?: Maybe<Scalars['String']>;
    sourceRepo?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    files?: Maybe<Array<Maybe<Scalars['String']>>>;
    successThresholds?: Maybe<Array<Maybe<TestActionSuccessThresholdMigration>>>;
};

export type TestActionRunOutput = {
    __typename?: 'TestActionRunOutput';
    id?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TestActionStatus` */
    status?: Maybe<Scalars['String']>;
    sources?: Maybe<Array<Maybe<TestActionSource>>>;
    computeFleetName?: Maybe<Scalars['String']>;
    currentPhase?: Maybe<Scalars['String']>;
    computeDetails?: Maybe<TestActionComputeDetails>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    environment?: Maybe<TestActionEnvironment>;
    artifacts?: Maybe<Array<Maybe<TestActionArtifact>>>;
    reports?: Maybe<Array<Maybe<TestActionReport>>>;
    phases?: Maybe<Array<Maybe<TestActionPhaseMetadata>>>;
};

export type TestActionRunSummary = {
    __typename?: 'TestActionRunSummary';
    id?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TestActionStatus` */
    status?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    sources?: Maybe<Array<Maybe<TestActionSource>>>;
    computeFleetName?: Maybe<Scalars['String']>;
    currentPhase?: Maybe<Scalars['String']>;
    computeDetails?: Maybe<TestActionComputeDetails>;
    environment?: Maybe<TestActionEnvironment>;
    artifacts?: Maybe<Array<Maybe<TestActionArtifact>>>;
    reports?: Maybe<Array<Maybe<TestActionReport>>>;
    phases?: Maybe<Array<Maybe<TestActionPhaseMetadata>>>;
};

export type TestActionSource = {
    __typename?: 'TestActionSource';
    /** * **Simple Shape:** `TestActionSourceType` */
    type?: Maybe<Scalars['String']>;
    location?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `TestActionSourceRank` */
    rank?: Maybe<Scalars['String']>;
};

export type TestActionSourceMigration = {
    __typename?: 'TestActionSourceMigration';
    sourceType?: Maybe<Scalars['String']>;
    sourceLocation?: Maybe<Scalars['String']>;
    sourceIdentifier?: Maybe<Scalars['String']>;
    sourceVersion?: Maybe<Scalars['String']>;
    sourceRank?: Maybe<Scalars['String']>;
};

export type TestActionSuccessThresholdMigration = {
    __typename?: 'TestActionSuccessThresholdMigration';
    /** * **Simple Shape:** `TestReportThresholdType` */
    thresholdType?: Maybe<Scalars['String']>;
    thresholdValue?: Maybe<Scalars['Float']>;
};

export type TestActionSuccessThresholds = {
    __typename?: 'TestActionSuccessThresholds';
    lineCoverage?: Maybe<Scalars['Float']>;
    branchCoverage?: Maybe<Scalars['Float']>;
    passRate?: Maybe<Scalars['Float']>;
};

export type TestActionVariableMigration = {
    __typename?: 'TestActionVariableMigration';
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
};

export type TestCaseResultCount = {
    __typename?: 'TestCaseResultCount';
    /**
   * * **Constraints**
   *   * Required
   */
    result: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    count: Scalars['Int'];
};

export type TestCaseResultCountMigration = {
    __typename?: 'TestCaseResultCountMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    result: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    count: Scalars['Int'];
};

export type TestCaseRunResultsOutput = {
    __typename?: 'TestCaseRunResultsOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    shortName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    result: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    durationInNanoseconds: Scalars['String'];
    testCaseStartTime?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    isMessageTruncated?: Maybe<Scalars['Boolean']>;
    additionalProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
    testGroupIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    originalResult?: Maybe<Scalars['String']>;
    previousResult?: Maybe<Scalars['String']>;
    previousMessage?: Maybe<Scalars['String']>;
    previousDurationInNanoseconds?: Maybe<Scalars['String']>;
    runNumber?: Maybe<Scalars['Int']>;
    totalRuns?: Maybe<Scalars['Int']>;
};

export type TestCaseRunResultsOutputMigration = {
    __typename?: 'TestCaseRunResultsOutputMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    reportSummaryId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    shortName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    result: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    durationInNanoseconds: Scalars['String'];
    testCaseStartTime?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    isMessageTruncated?: Maybe<Scalars['Boolean']>;
    additionalProperties?: Maybe<Array<Maybe<AdditionalPropertyMigration>>>;
    testGroupIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    originalResult?: Maybe<Scalars['String']>;
    previousResult?: Maybe<Scalars['String']>;
    previousMessage?: Maybe<Scalars['String']>;
    previousDurationInNanoseconds?: Maybe<Scalars['String']>;
    runNumber?: Maybe<Scalars['Int']>;
    totalRuns?: Maybe<Scalars['Int']>;
};

export type TestGroup = {
    __typename?: 'TestGroup';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    shortName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    groupType: Scalars['String'];
    durationInNanoseconds?: Maybe<Scalars['String']>;
    testCaseCount?: Maybe<Scalars['Int']>;
    children?: Maybe<Array<Maybe<Scalars['String']>>>;
    testCaseResultCounts?: Maybe<Array<Maybe<TestCaseResultCount>>>;
    extraProperties?: Maybe<Array<Maybe<AdditionalProperty>>>;
};

export type TestGroupMigration = {
    __typename?: 'TestGroupMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    shortName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    groupType: Scalars['String'];
    durationInNanoseconds?: Maybe<Scalars['String']>;
    testCaseCount?: Maybe<Scalars['Int']>;
    children?: Maybe<Array<Maybe<Scalars['String']>>>;
    testCaseResultCounts?: Maybe<Array<Maybe<TestCaseResultCountMigration>>>;
    extraProperties?: Maybe<Array<Maybe<AdditionalPropertyMigration>>>;
};

export type TestReportFileDetails = {
    __typename?: 'TestReportFileDetails';
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 500
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    errorMessage?: Maybe<Scalars['String']>;
};

export type TestReportFileDetailsMigration = {
    __typename?: 'TestReportFileDetailsMigration';
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 500
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    errorMessage?: Maybe<Scalars['String']>;
};

export type TestReportStatusPhaseDetails = {
    __typename?: 'TestReportStatusPhaseDetails';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    state: Scalars['String'];
    startTime?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
};

export type TestReportStatusPhaseDetailsMigration = {
    __typename?: 'TestReportStatusPhaseDetailsMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    state: Scalars['String'];
    startTime?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
};

export type TestReportStatusSummary = {
    __typename?: 'TestReportStatusSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    lastUpdatedTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    phaseHistory: Array<Maybe<TestReportStatusPhaseDetailsMigration>>;
};

export type TestReportSummary = {
    __typename?: 'TestReportSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    testRunStartTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    durationInNanoseconds: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    parentTestSummaryId?: Maybe<Scalars['String']>;
    runNumber?: Maybe<Scalars['Int']>;
    testSummaryType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    testRunResult: TestRunResult;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetails>>>;
    runCount?: Maybe<Scalars['Int']>;
    testGroups?: Maybe<Array<Maybe<TestGroup>>>;
};

export type TestReportSummaryMigration = {
    __typename?: 'TestReportSummaryMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    testRunStartTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    durationInNanoseconds: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    repositoryName: Scalars['String'];
    sourceRepository?: Maybe<SourceRepositorySummary>;
    parentTestSummaryId?: Maybe<Scalars['String']>;
    runNumber?: Maybe<Scalars['Int']>;
    testSummaryType?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    testRunResult: TestRunResultMigration;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    actionType: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    branchName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commitId: Scalars['String'];
    reportFiles?: Maybe<Array<Maybe<TestReportFileDetailsMigration>>>;
    runCount?: Maybe<Scalars['Int']>;
    testGroups?: Maybe<Array<Maybe<TestGroupMigration>>>;
};

export type TestRunResult = {
    __typename?: 'TestRunResult';
    /**
   * * **Constraints**
   *   * Required
   */
    totalCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    testCaseResultCounts: Array<Maybe<TestCaseResultCount>>;
    threshold?: Maybe<TestSuccessPercentageThreshold>;
};

export type TestRunResultMigration = {
    __typename?: 'TestRunResultMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    totalCount: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    testCaseResultCounts: Array<Maybe<TestCaseResultCountMigration>>;
    threshold?: Maybe<TestSuccessPercentageThresholdMigration>;
};

export type TestSuccessPercentageThreshold = {
    __typename?: 'TestSuccessPercentageThreshold';
    passingStatus?: Maybe<Scalars['Boolean']>;
    /** * **Simple Shape:** `TestPercent` */
    value?: Maybe<Scalars['Float']>;
};

export type TestSuccessPercentageThresholdMigration = {
    __typename?: 'TestSuccessPercentageThresholdMigration';
    passingStatus?: Maybe<Scalars['Boolean']>;
    /** * **Simple Shape:** `TestPercentMigration` */
    value?: Maybe<Scalars['Float']>;
};

export type UnlinkAccountFromEnvironmentOutput = {
    __typename?: 'UnlinkAccountFromEnvironmentOutput';
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type UnlinkAccountFromEnvironmentRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    environmentName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type UnlinkExtensionIssueScopeInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
};

export type UnlinkExtensionIssueScopeOutput = {
    __typename?: 'UnlinkExtensionIssueScopeOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateArtifactPackageOriginConfigurationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    restrictions: ArtifactPackageOriginRestrictionsInput;
};

export type UpdateArtifactPackageOriginConfigurationOutput = {
    __typename?: 'UpdateArtifactPackageOriginConfigurationOutput';
    originConfiguration?: Maybe<ArtifactPackageOriginConfiguration>;
};

export type UpdateArtifactPackageVersionsStatusInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    repositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageFormatString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    format: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    versions: Array<Maybe<Scalars['String']>>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    targetStatus: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactPackageNamespaceString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   *   * Pattern: `/[^!#/\s]+/`
   */
    namespace?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `ArtifactPackageVersionStatusString`
   * * **Constraints**
   *   * Pattern: `/^(Published|Unfinished|Unlisted|Archived|Disposed|Deleted)$/`
   */
    expectedStatus?: Maybe<Scalars['String']>;
    versionRevisions?: Maybe<Array<Maybe<ArtifactPackageVersionRevisionMapInput>>>;
};

export type UpdateArtifactRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name: Scalars['String'];
    /**
   * * **Simple Shape:** `ArtifactRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 1000
   */
    description?: Maybe<Scalars['String']>;
    upstreams?: Maybe<Array<Maybe<UpstreamArtifactRepositoryInput>>>;
};

export type UpdateArtifactRepositoryOutput = {
    __typename?: 'UpdateArtifactRepositoryOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateCommentContentForIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    issueId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commentId: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 30720
   */
    content: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentType`
   * * **Constraints**
   *   * Required
   */
    contentType: Scalars['String'];
};

export type UpdateCommentContentForIssueOutput = {
    __typename?: 'UpdateCommentContentForIssueOutput';
    id?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type UpdateComputeFleetInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 20
   */
    desiredCapacity?: Maybe<Scalars['Int']>;
    /** * **Simple Shape:** `FleetOverflowBehavior` */
    overflowBehavior?: Maybe<Scalars['String']>;
};

export type UpdateComputeFleetOutput = {
    __typename?: 'UpdateComputeFleetOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateDevelopmentWorkspaceOutput = {
    __typename?: 'UpdateDevelopmentWorkspaceOutput';
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `DevelopmentWorkspaceUpdateBehaviour`
   * * **Constraints**
   *   * Required
   */
    updateBehavior: Scalars['String'];
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 128
   */
    alias?: Maybe<Scalars['String']>;
    ides?: Maybe<Array<Maybe<IdeConfiguration>>>;
    /** * **Simple Shape:** `InstanceType` */
    instanceType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InactivityTimeoutMinutes`
   * * **Constraints**
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 1200
   */
    inactivityTimeoutMinutes?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
};

export type UpdateDevelopmentWorkspaceRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `DevelopmentWorkspaceUpdateBehaviour`
   * * **Constraints**
   *   * Required
   */
    updateBehavior: Scalars['String'];
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 128
   */
    alias?: Maybe<Scalars['String']>;
    ides?: Maybe<Array<Maybe<IdeConfigurationInput>>>;
    /** * **Simple Shape:** `InstanceType` */
    instanceType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `InactivityTimeoutMinutes`
   * * **Constraints**
   *   * Minimum value (inclusive): 0
   *   * Maximum value (inclusive): 1200
   */
    inactivityTimeoutMinutes?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `ClientToken`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    clientToken?: Maybe<Scalars['String']>;
};

export type UpdateDummyDataInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
};

export type UpdateDummyDataOutput = {
    __typename?: 'UpdateDummyDataOutput';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type UpdateEnvironmentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 200
   */
    description?: Maybe<Scalars['String']>;
    /** * **Simple Shape:** `EnvironmentType` */
    environmentType?: Maybe<Scalars['String']>;
};

export type UpdateEnvironmentOutput = {
    __typename?: 'UpdateEnvironmentOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateIssueInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 1024
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    versionId: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    statusId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 200000
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    archived: Scalars['Boolean'];
    blocked?: Maybe<Scalars['Boolean']>;
    assigneeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** * **Simple Shape:** `IssuePriority` */
    priority?: Maybe<Scalars['String']>;
    labelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `Estimate`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 99
   */
    estimate?: Maybe<Scalars['Int']>;
    /**
   * * **Constraints**
   *   * Maximum length (inclusive): 50
   */
    customFields?: Maybe<Array<Maybe<IssueCustomFieldInput>>>;
};

export type UpdateIssueOutput = {
    __typename?: 'UpdateIssueOutput';
    changeStatus?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
    shortId?: Maybe<Scalars['String']>;
};

export type UpdateIssueRequestMigrationInput = {
    /**
   * * **Simple Shape:** `IssueId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    title: Scalars['String'];
    versionId?: Maybe<Scalars['Int']>;
    /**
   * * **Simple Shape:** `Uuid`
   * * **Constraints**
   *   * Required
   *   * Pattern: `/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/`
   */
    statusId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Maximum length (inclusive): 32767
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    archived: Scalars['Boolean'];
    blocked?: Maybe<Scalars['Boolean']>;
    assigneeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** * **Simple Shape:** `IssuePriorityMigration` */
    priority?: Maybe<Scalars['String']>;
    labelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
    /**
   * * **Simple Shape:** `EstimateMigration`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    estimate?: Maybe<Scalars['Int']>;
    customFields?: Maybe<Array<Maybe<IssueCustomFieldMigrationInput>>>;
};

export type UpdateIssueResponseMigration = {
    __typename?: 'UpdateIssueResponseMigration';
    /**
   * * **Simple Shape:** `IssueId`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    id: Scalars['String'];
};

export type UpdateIssueStoreInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    issueStoreName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    statuses: Array<Maybe<IssueStoreStatusInput>>;
    /** * **Simple Shape:** `IssueStoreEstimationType` */
    estimationType?: Maybe<Scalars['String']>;
    labels?: Maybe<Array<Maybe<LabelInput>>>;
    savedViews?: Maybe<Array<Maybe<SavedViewInput>>>;
    /**
   * * **Simple Shape:** `MaxAssigneesPerIssue`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    maxAssigneesPerIssue?: Maybe<Scalars['Int']>;
};

export type UpdateIssueStoreOutput = {
    __typename?: 'UpdateIssueStoreOutput';
    identifier?: Maybe<Scalars['String']>;
};

export type UpdateIssueStoreRequestMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `ApmNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 63
   */
    issueStoreName: Scalars['String'];
    /** * **Simple Shape:** `IssueStoreEstimationTypeMigration` */
    estimationType?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `MaxAssigneesPerIssueMigration`
   * * **Constraints**
   *   * Minimum value (inclusive): 1
   *   * Maximum value (inclusive): 10
   */
    maxAssigneesPerIssue?: Maybe<Scalars['Int']>;
};

export type UpdateIssueStoreResponseMigration = {
    __typename?: 'UpdateIssueStoreResponseMigration';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
};

export type UpdateNotificationChannelOutput = {
    __typename?: 'UpdateNotificationChannelOutput';
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    alias: Scalars['String'];
    /**
   * * **Simple Shape:** `NotificationChannelType`
   * * **Constraints**
   *   * Required
   */
    type: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    details: NotificationChannelDetails;
};

export type UpdateNotificationChannelRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    alias?: Maybe<Scalars['String']>;
};

export type UpdateOnboardingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    onboardingId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    submitted: Scalars['Boolean'];
    /**
   * * **Constraints**
   *   * Required
   */
    dismissed: Scalars['Boolean'];
    /**
   * * **Simple Shape:** `NextQuestionString`
   * * **Constraints**
   *   * Required
   */
    nextQuestion: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sections: Array<Maybe<QuestionInformationInput>>;
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
};

export type UpdateOrganizationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    displayName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 200
   */
    description?: Maybe<Scalars['String']>;
    versionId?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationOutput = {
    __typename?: 'UpdateOrganizationOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type UpdatePersonInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    userName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    region?: Maybe<Scalars['String']>;
};

export type UpdatePersonOutput = {
    __typename?: 'UpdatePersonOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateProjectInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 200
   */
    displayName?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 200
   */
    description?: Maybe<Scalars['String']>;
    versionId?: Maybe<Scalars['String']>;
};

export type UpdateProjectOutput = {
    __typename?: 'UpdateProjectOutput';
    versionId?: Maybe<Scalars['String']>;
};

export type UpdatePullRequestCommentContentInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    pullRequestId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    commentId: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 0
   *   * Maximum length (inclusive): 30720
   */
    content: Scalars['String'];
    /**
   * * **Simple Shape:** `CommentContentType`
   * * **Constraints**
   *   * Required
   */
    contentType: Scalars['String'];
};

export type UpdatePullRequestCommentContentOutput = {
    __typename?: 'UpdatePullRequestCommentContentOutput';
    id?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type UpdateRoleMappingInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleMappings: Array<Maybe<RoleMappingMemberAssociationInput>>;
    version?: Maybe<Scalars['String']>;
};

export type UpdateRoleMappingMigrationInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    resourceId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    roleMappings: Array<Maybe<RoleMappingMemberAssociationMigrationInput>>;
    version?: Maybe<Scalars['String']>;
};

export type UpdateRoleMappingMigrationOutput = {
    __typename?: 'UpdateRoleMappingMigrationOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateRoleMappingOutput = {
    __typename?: 'UpdateRoleMappingOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpdateSecretInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    secretValue?: Maybe<Scalars['String']>;
};

export type UpdateSecretOutput = {
    __typename?: 'UpdateSecretOutput';
    version?: Maybe<Scalars['String']>;
    referenceId?: Maybe<Scalars['String']>;
};

export type UpdateSourcePullRequestApprovalStatusInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    revisionNumber: Scalars['String'];
    /**
   * * **Simple Shape:** `SourcePullRequestApprovalStatus`
   * * **Constraints**
   *   * Required
   */
    approvalStatus: Scalars['String'];
};

export type UpdateSourcePullRequestApprovalStatusOutput = {
    __typename?: 'UpdateSourcePullRequestApprovalStatusOutput';
    success?: Maybe<Scalars['Boolean']>;
};

export type UpdateSourcePullRequestInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    /** * **Simple Shape:** `SourcePullRequestStatus` */
    status?: Maybe<Scalars['String']>;
    /**
   * * **Simple Shape:** `SourcePullRequestTitle`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   */
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type UpdateSourcePullRequestOutput = {
    __typename?: 'UpdateSourcePullRequestOutput';
    /** * **Simple Shape:** `SourcePullRequestNumber` */
    number?: Maybe<Scalars['String']>;
};

export type UpdateSourcePullRequestReviewersInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourcePullRequestNumber: Scalars['String'];
    additionalRequiredReviewers?: Maybe<Array<Maybe<Scalars['String']>>>;
    removedRequiredReviewers?: Maybe<Array<Maybe<Scalars['String']>>>;
    additionalOptionalReviewers?: Maybe<Array<Maybe<Scalars['String']>>>;
    removedOptionalReviewers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateSourcePullRequestReviewersOutput = {
    __typename?: 'UpdateSourcePullRequestReviewersOutput';
    success?: Maybe<Scalars['Boolean']>;
};

export type UpdateSourceRepositoryInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryNameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 100
   */
    sourceRepositoryName: Scalars['String'];
    /**
   * * **Simple Shape:** `SourceRepositoryDescriptionString`
   * * **Constraints**
   *   * Minimum length (inclusive): 1
   *   * Maximum length (inclusive): 255
   */
    description?: Maybe<Scalars['String']>;
    autoInitialize?: Maybe<SourceAutoInitializeInput>;
};

export type UpdateSourceRepositoryOutput = {
    __typename?: 'UpdateSourceRepositoryOutput';
    version?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
};

export type UpdateTeamInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    id: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    title: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    description: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    members: Array<Maybe<TeamMemberInput>>;
    /**
   * * **Simple Shape:** `TeamManagementString`
   * * **Constraints**
   *   * Required
   */
    management: Scalars['String'];
    /**
   * * **Simple Shape:** `TeamVisibilityString`
   * * **Constraints**
   *   * Required
   */
    visibility: Scalars['String'];
    version?: Maybe<Scalars['String']>;
};

export type UpdateTeamOutput = {
    __typename?: 'UpdateTeamOutput';
    version?: Maybe<Scalars['String']>;
};

export type UpstreamArtifactRepository = {
    __typename?: 'UpstreamArtifactRepository';
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name?: Maybe<Scalars['String']>;
};

export type UpstreamArtifactRepositoryInput = {
    /**
   * * **Simple Shape:** `ArtifactRepositoryNameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 2
   *   * Maximum length (inclusive): 100
   *   * Pattern: `/^[A-Za-z0-9][A-Za-z0-9-_.]{1,99}$/`
   */
    name?: Maybe<Scalars['String']>;
};

export type UserNotificationSettingsItem = {
    __typename?: 'UserNotificationSettingsItem';
    /**
   * * **Simple Shape:** `UsetNotificationSettingsStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    resourceType: Scalars['String'];
};

export type UserNotificationSettingsItemInput = {
    /**
   * * **Simple Shape:** `UsetNotificationSettingsStatus`
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    resourceType: Scalars['String'];
};

export type ValidateOrganizationNameInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    displayName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
};

export type ValidateOrganizationNameOutput = {
    __typename?: 'ValidateOrganizationNameOutput';
    suggestedName?: Maybe<Scalars['String']>;
    isNameValid?: Maybe<Scalars['Boolean']>;
    isNameTaken?: Maybe<Scalars['Boolean']>;
    message?: Maybe<Scalars['String']>;
};

export type ValidateProjectNameInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    displayName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    name?: Maybe<Scalars['String']>;
};

export type ValidateProjectNameOutput = {
    __typename?: 'ValidateProjectNameOutput';
    suggestedName?: Maybe<Scalars['String']>;
    isNameValid?: Maybe<Scalars['Boolean']>;
    isNameTaken?: Maybe<Scalars['Boolean']>;
    message?: Maybe<Scalars['String']>;
};

export type ValidateWorkflowDefinitionDraftInput = {
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    organizationName: Scalars['String'];
    /**
   * * **Simple Shape:** `NameString`
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 3
   *   * Maximum length (inclusive): 63
   *   * Pattern: `/^[a-zA-Z0-9]+(?:[-_\.][a-zA-Z0-9]+)*$/`
   */
    projectName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    workflowDocumentContent: Scalars['String'];
};

export type ValidateWorkflowDefinitionDraftOutput = {
    __typename?: 'ValidateWorkflowDefinitionDraftOutput';
    reasons?: Maybe<Array<Maybe<WorkflowStatusReason>>>;
};

export type VerifySessionOutput = {
    __typename?: 'VerifySessionOutput';
    identity?: Maybe<Scalars['String']>;
    self?: Maybe<GetPersonOutput>;
};

export type WorkflowActionState = {
    __typename?: 'WorkflowActionState';
    name?: Maybe<Scalars['String']>;
    actionRunId?: Maybe<Scalars['String']>;
    workflowRunId?: Maybe<Scalars['String']>;
    runSummary?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    lastStatusChange?: Maybe<Scalars['String']>;
    lastUpdatedTime?: Maybe<Scalars['String']>;
};

export type WorkflowDefinition = {
    __typename?: 'WorkflowDefinition';
    /**
   * * **Constraints**
   *   * Required
   */
    format: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    path: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    definition: Scalars['String'];
};

export type WorkflowFilterInput = {
    /**
   * * **Constraints**
   *   * Required
   *   * Minimum length (inclusive): 1
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    value: Scalars['String'];
    /**
   * * **Simple Shape:** `WorkflowFilterComparator`
   * * **Constraints**
   *   * Required
   */
    condition: Scalars['String'];
};

export type WorkflowFiltersInput = {
    /**
   * * **Constraints**
   *   * Required
   */
    filters: Array<Maybe<WorkflowFilterInput>>;
    /**
   * * **Simple Shape:** `WorkflowFilterOperation`
   * * **Constraints**
   *   * Required
   */
    operation: Scalars['String'];
};

export type WorkflowRunActionArtifact = {
    __typename?: 'WorkflowRunActionArtifact';
    /**
   * * **Constraints**
   *   * Required
   */
    artifactActionId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    artifactName: Scalars['String'];
};

export type WorkflowRunActionOutputVariable = {
    __typename?: 'WorkflowRunActionOutputVariable';
    /**
   * * **Constraints**
   *   * Required
   */
    name: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    value: Scalars['String'];
};

export type WorkflowRunMetadata = {
    __typename?: 'WorkflowRunMetadata';
    key: Scalars['String'];
    value: Scalars['String'];
};

export type WorkflowRunOrderingInput = {
    /**
   * * **Simple Shape:** `WorkflowRunOrderingKey`
   * * **Constraints**
   *   * Required
   */
    key: Scalars['String'];
    /** * **Simple Shape:** `WorkflowRunOrderingDirection` */
    direction?: Maybe<Scalars['String']>;
};

export type WorkflowRunStatusReason = {
    __typename?: 'WorkflowRunStatusReason';
    /**
   * * **Constraints**
   *   * Required
   */
    statusCode: Scalars['String'];
    statusMessage?: Maybe<Scalars['String']>;
};

export type WorkflowRunSummary = {
    __typename?: 'WorkflowRunSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    workflowRunId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowVersion: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    triggerEventId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    triggerEventType: Scalars['String'];
    triggerEventActor?: Maybe<GetPersonOutput>;
    /**
   * * **Constraints**
   *   * Required
   */
    runMode: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    status: Scalars['String'];
    statusReasons?: Maybe<Array<Maybe<WorkflowRunStatusReason>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    startTime: Scalars['String'];
    endTime?: Maybe<Scalars['String']>;
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    metadata?: Maybe<Array<Maybe<WorkflowRunMetadata>>>;
    /**
   * * **Constraints**
   *   * Required
   */
    workflow: WorkflowSummary;
    /**
   * * **Constraints**
   *   * Required
   */
    actionStates: Array<Maybe<ActionState>>;
};

export type WorkflowStatusReason = {
    __typename?: 'WorkflowStatusReason';
    /**
   * * **Constraints**
   *   * Required
   */
    statusCode: Scalars['String'];
    statusMessage?: Maybe<Scalars['String']>;
    templateVariables?: Maybe<Array<Maybe<ReasonTemplateVariable>>>;
    startMark?: Maybe<WorkflowStatusReasonMark>;
    endMark?: Maybe<WorkflowStatusReasonMark>;
};

export type WorkflowStatusReasonMark = {
    __typename?: 'WorkflowStatusReasonMark';
    /**
   * * **Constraints**
   *   * Required
   */
    lineNumber: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    columnNumber: Scalars['Int'];
};

export type WorkflowSummary = {
    __typename?: 'WorkflowSummary';
    /**
   * * **Constraints**
   *   * Required
   */
    workflowId: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowVersion: Scalars['Int'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowName: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    sourceRepository: SourceRepositorySummary;
    /**
   * * **Constraints**
   *   * Required
   */
    sourceBranch: SourceBranchSummary;
    /**
   * * **Constraints**
   *   * Required
   */
    workflowDefinition: WorkflowDefinition;
    /**
   * * **Constraints**
   *   * Required
   */
    creationTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    lastUpdatedTime: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    runMode: Scalars['String'];
    /**
   * * **Constraints**
   *   * Required
   */
    workflowStatus: Scalars['String'];
    workflowStatusReasons?: Maybe<Array<Maybe<WorkflowStatusReason>>>;
    latestRuns?: Maybe<ListWorkflowRunsOutput>;
};


export type WorkflowSummaryLatestRunsArgs = {
    pageSize?: Maybe<Scalars['Int']>;
};
