const fs = require('fs');
const path = require('path');

module.exports.createAccessToken = fs.readFileSync(path.join(__dirname, 'createAccessToken.gql'), 'utf8');
module.exports.deleteAccessToken = fs.readFileSync(path.join(__dirname, 'deleteAccessToken.gql'), 'utf8');
module.exports.createCommentForIssue = fs.readFileSync(path.join(__dirname, 'createCommentForIssue.gql'), 'utf8');
module.exports.updateCommentContentForIssue = fs.readFileSync(path.join(__dirname, 'updateCommentContentForIssue.gql'), 'utf8');
module.exports.deleteCommentContentForIssue = fs.readFileSync(path.join(__dirname, 'deleteCommentContentForIssue.gql'), 'utf8');
module.exports.createConnection = fs.readFileSync(path.join(__dirname, 'createConnection.gql'), 'utf8');
module.exports.deleteConnection = fs.readFileSync(path.join(__dirname, 'deleteConnection.gql'), 'utf8');
module.exports.createExtensionInstallation = fs.readFileSync(path.join(__dirname, 'createExtensionInstallation.gql'), 'utf8');
module.exports.deleteExtensionInstallation = fs.readFileSync(path.join(__dirname, 'deleteExtensionInstallation.gql'), 'utf8');
module.exports.createOrganization = fs.readFileSync(path.join(__dirname, 'createOrganization.gql'), 'utf8');
module.exports.deleteOrganization = fs.readFileSync(path.join(__dirname, 'deleteOrganization.gql'), 'utf8');
module.exports.updateOrganization = fs.readFileSync(path.join(__dirname, 'updateOrganization.gql'), 'utf8');
module.exports.renameOrganization = fs.readFileSync(path.join(__dirname, 'renameOrganization.gql'), 'utf8');
module.exports.connectAwsAccount = fs.readFileSync(path.join(__dirname, 'connectAwsAccount.gql'), 'utf8');
module.exports.deleteAwsAccount = fs.readFileSync(path.join(__dirname, 'deleteAwsAccount.gql'), 'utf8');
module.exports.linkAccountToEnvironment = fs.readFileSync(path.join(__dirname, 'linkAccountToEnvironment.gql'), 'utf8');
module.exports.unlinkAccountFromEnvironment = fs.readFileSync(path.join(__dirname, 'unlinkAccountFromEnvironment.gql'), 'utf8');
module.exports.createBar = fs.readFileSync(path.join(__dirname, 'createBar.gql'), 'utf8');
module.exports.createBlueprintUploadUrl = fs.readFileSync(path.join(__dirname, 'createBlueprintUploadUrl.gql'), 'utf8');
module.exports.deployBlueprint = fs.readFileSync(path.join(__dirname, 'deployBlueprint.gql'), 'utf8');
module.exports.synthesizeBlueprint = fs.readFileSync(path.join(__dirname, 'synthesizeBlueprint.gql'), 'utf8');
module.exports.createDummyData = fs.readFileSync(path.join(__dirname, 'createDummyData.gql'), 'utf8');
module.exports.deleteDummyData = fs.readFileSync(path.join(__dirname, 'deleteDummyData.gql'), 'utf8');
module.exports.updateDummyData = fs.readFileSync(path.join(__dirname, 'updateDummyData.gql'), 'utf8');
module.exports.createLink = fs.readFileSync(path.join(__dirname, 'createLink.gql'), 'utf8');
module.exports.deleteLink = fs.readFileSync(path.join(__dirname, 'deleteLink.gql'), 'utf8');
module.exports.createOnboarding = fs.readFileSync(path.join(__dirname, 'createOnboarding.gql'), 'utf8');
module.exports.updateOnboarding = fs.readFileSync(path.join(__dirname, 'updateOnboarding.gql'), 'utf8');
module.exports.sendOrganizationInvitation = fs.readFileSync(path.join(__dirname, 'sendOrganizationInvitation.gql'), 'utf8');
module.exports.acceptOrganizationInvitation = fs.readFileSync(path.join(__dirname, 'acceptOrganizationInvitation.gql'), 'utf8');
module.exports.createProject = fs.readFileSync(path.join(__dirname, 'createProject.gql'), 'utf8');
module.exports.deleteProject = fs.readFileSync(path.join(__dirname, 'deleteProject.gql'), 'utf8');
module.exports.updateProject = fs.readFileSync(path.join(__dirname, 'updateProject.gql'), 'utf8');
module.exports.renameProject = fs.readFileSync(path.join(__dirname, 'renameProject.gql'), 'utf8');
module.exports.createArtifactRepository = fs.readFileSync(path.join(__dirname, 'createArtifactRepository.gql'), 'utf8');
module.exports.deleteArtifactRepository = fs.readFileSync(path.join(__dirname, 'deleteArtifactRepository.gql'), 'utf8');
module.exports.updateArtifactRepository = fs.readFileSync(path.join(__dirname, 'updateArtifactRepository.gql'), 'utf8');
module.exports.updateArtifactPackageOriginConfiguration = fs.readFileSync(path.join(__dirname, 'updateArtifactPackageOriginConfiguration.gql'), 'utf8');
module.exports.deleteArtifactPackageVersions = fs.readFileSync(path.join(__dirname, 'deleteArtifactPackageVersions.gql'), 'utf8');
module.exports.disposeArtifactPackageVersions = fs.readFileSync(path.join(__dirname, 'disposeArtifactPackageVersions.gql'), 'utf8');
module.exports.updateArtifactPackageVersionsStatus = fs.readFileSync(path.join(__dirname, 'updateArtifactPackageVersionsStatus.gql'), 'utf8');
module.exports.createComputeFleet = fs.readFileSync(path.join(__dirname, 'createComputeFleet.gql'), 'utf8');
module.exports.deleteComputeFleet = fs.readFileSync(path.join(__dirname, 'deleteComputeFleet.gql'), 'utf8');
module.exports.updateComputeFleet = fs.readFileSync(path.join(__dirname, 'updateComputeFleet.gql'), 'utf8');
module.exports.createDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'createDevelopmentWorkspace.gql'), 'utf8');
module.exports.deleteDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'deleteDevelopmentWorkspace.gql'), 'utf8');
module.exports.updateDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'updateDevelopmentWorkspace.gql'), 'utf8');
module.exports.startDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'startDevelopmentWorkspace.gql'), 'utf8');
module.exports.startSessionDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'startSessionDevelopmentWorkspace.gql'), 'utf8');
module.exports.stopDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'stopDevelopmentWorkspace.gql'), 'utf8');
module.exports.stopSessionDevelopmentWorkspace = fs.readFileSync(path.join(__dirname, 'stopSessionDevelopmentWorkspace.gql'), 'utf8');
module.exports.createEnvironment = fs.readFileSync(path.join(__dirname, 'createEnvironment.gql'), 'utf8');
module.exports.deleteEnvironment = fs.readFileSync(path.join(__dirname, 'deleteEnvironment.gql'), 'utf8');
module.exports.updateEnvironment = fs.readFileSync(path.join(__dirname, 'updateEnvironment.gql'), 'utf8');
module.exports.linkExtensionIssueScope = fs.readFileSync(path.join(__dirname, 'linkExtensionIssueScope.gql'), 'utf8');
module.exports.unlinkExtensionIssueScope = fs.readFileSync(path.join(__dirname, 'unlinkExtensionIssueScope.gql'), 'utf8');
module.exports.createExternalArtifactRepository = fs.readFileSync(path.join(__dirname, 'createExternalArtifactRepository.gql'), 'utf8');
module.exports.updateIssueStore = fs.readFileSync(path.join(__dirname, 'updateIssueStore.gql'), 'utf8');
module.exports.createIssue = fs.readFileSync(path.join(__dirname, 'createIssue.gql'), 'utf8');
module.exports.updateIssue = fs.readFileSync(path.join(__dirname, 'updateIssue.gql'), 'utf8');
module.exports.createIssueStoreLabel = fs.readFileSync(path.join(__dirname, 'createIssueStoreLabel.gql'), 'utf8');
module.exports.batchUpdateIssueStoreLabels = fs.readFileSync(path.join(__dirname, 'batchUpdateIssueStoreLabels.gql'), 'utf8');
module.exports.createIssueStoreSavedView = fs.readFileSync(path.join(__dirname, 'createIssueStoreSavedView.gql'), 'utf8');
module.exports.deleteIssueStoreSavedView = fs.readFileSync(path.join(__dirname, 'deleteIssueStoreSavedView.gql'), 'utf8');
module.exports.batchUpdateIssueStoreSavedViews = fs.readFileSync(path.join(__dirname, 'batchUpdateIssueStoreSavedViews.gql'), 'utf8');
module.exports.createIssueStoreStatus = fs.readFileSync(path.join(__dirname, 'createIssueStoreStatus.gql'), 'utf8');
module.exports.batchUpdateIssueStoreStatuses = fs.readFileSync(path.join(__dirname, 'batchUpdateIssueStoreStatuses.gql'), 'utf8');
module.exports.updateIssueStoreMigration = fs.readFileSync(path.join(__dirname, 'updateIssueStoreMigration.gql'), 'utf8');
module.exports.createIssueMigration = fs.readFileSync(path.join(__dirname, 'createIssueMigration.gql'), 'utf8');
module.exports.updateIssueMigration = fs.readFileSync(path.join(__dirname, 'updateIssueMigration.gql'), 'utf8');
module.exports.createNotificationChannel = fs.readFileSync(path.join(__dirname, 'createNotificationChannel.gql'), 'utf8');
module.exports.deleteNotificationChannel = fs.readFileSync(path.join(__dirname, 'deleteNotificationChannel.gql'), 'utf8');
module.exports.updateNotificationChannel = fs.readFileSync(path.join(__dirname, 'updateNotificationChannel.gql'), 'utf8');
module.exports.createNotificationClient = fs.readFileSync(path.join(__dirname, 'createNotificationClient.gql'), 'utf8');
module.exports.deleteNotificationClient = fs.readFileSync(path.join(__dirname, 'deleteNotificationClient.gql'), 'utf8');
module.exports.createNotificationClientMigration = fs.readFileSync(path.join(__dirname, 'createNotificationClientMigration.gql'), 'utf8');
module.exports.deleteNotificationClientMigration = fs.readFileSync(path.join(__dirname, 'deleteNotificationClientMigration.gql'), 'utf8');
module.exports.putProjectNotificationSettings = fs.readFileSync(path.join(__dirname, 'putProjectNotificationSettings.gql'), 'utf8');
module.exports.createSecret = fs.readFileSync(path.join(__dirname, 'createSecret.gql'), 'utf8');
module.exports.deleteSecret = fs.readFileSync(path.join(__dirname, 'deleteSecret.gql'), 'utf8');
module.exports.updateSecret = fs.readFileSync(path.join(__dirname, 'updateSecret.gql'), 'utf8');
module.exports.createSourcePullRequest = fs.readFileSync(path.join(__dirname, 'createSourcePullRequest.gql'), 'utf8');
module.exports.updateSourcePullRequest = fs.readFileSync(path.join(__dirname, 'updateSourcePullRequest.gql'), 'utf8');
module.exports.mergeSourcePullRequestByFastForward = fs.readFileSync(path.join(__dirname, 'mergeSourcePullRequestByFastForward.gql'), 'utf8');
module.exports.mergeSourcePullRequestBySquash = fs.readFileSync(path.join(__dirname, 'mergeSourcePullRequestBySquash.gql'), 'utf8');
module.exports.updateSourcePullRequestApprovalStatus = fs.readFileSync(path.join(__dirname, 'updateSourcePullRequestApprovalStatus.gql'), 'utf8');
module.exports.updateSourcePullRequestReviewers = fs.readFileSync(path.join(__dirname, 'updateSourcePullRequestReviewers.gql'), 'utf8');
module.exports.createSourceRepository = fs.readFileSync(path.join(__dirname, 'createSourceRepository.gql'), 'utf8');
module.exports.deleteSourceRepository = fs.readFileSync(path.join(__dirname, 'deleteSourceRepository.gql'), 'utf8');
module.exports.updateSourceRepository = fs.readFileSync(path.join(__dirname, 'updateSourceRepository.gql'), 'utf8');
module.exports.linkSourceRepository = fs.readFileSync(path.join(__dirname, 'linkSourceRepository.gql'), 'utf8');
module.exports.createSourceBranch = fs.readFileSync(path.join(__dirname, 'createSourceBranch.gql'), 'utf8');
module.exports.deleteSourceBranch = fs.readFileSync(path.join(__dirname, 'deleteSourceBranch.gql'), 'utf8');
module.exports.createSourceCommit = fs.readFileSync(path.join(__dirname, 'createSourceCommit.gql'), 'utf8');
module.exports.retryTestActionTestCases = fs.readFileSync(path.join(__dirname, 'retryTestActionTestCases.gql'), 'utf8');
module.exports.startWorkflowRun = fs.readFileSync(path.join(__dirname, 'startWorkflowRun.gql'), 'utf8');
module.exports.setSubscription = fs.readFileSync(path.join(__dirname, 'setSubscription.gql'), 'utf8');
module.exports.updateTeam = fs.readFileSync(path.join(__dirname, 'updateTeam.gql'), 'utf8');
module.exports.putUserNotificationSettings = fs.readFileSync(path.join(__dirname, 'putUserNotificationSettings.gql'), 'utf8');
module.exports.updatePerson = fs.readFileSync(path.join(__dirname, 'updatePerson.gql'), 'utf8');
module.exports.createUserDetails = fs.readFileSync(path.join(__dirname, 'createUserDetails.gql'), 'utf8');
module.exports.sendProjectInvitation = fs.readFileSync(path.join(__dirname, 'sendProjectInvitation.gql'), 'utf8');
module.exports.acceptProjectInvitation = fs.readFileSync(path.join(__dirname, 'acceptProjectInvitation.gql'), 'utf8');
module.exports.createPullRequestComment = fs.readFileSync(path.join(__dirname, 'createPullRequestComment.gql'), 'utf8');
module.exports.updatePullRequestCommentContent = fs.readFileSync(path.join(__dirname, 'updatePullRequestCommentContent.gql'), 'utf8');
module.exports.deletePullRequestCommentContent = fs.readFileSync(path.join(__dirname, 'deletePullRequestCommentContent.gql'), 'utf8');
module.exports.updateRoleMapping = fs.readFileSync(path.join(__dirname, 'updateRoleMapping.gql'), 'utf8');
module.exports.addUserToRole = fs.readFileSync(path.join(__dirname, 'addUserToRole.gql'), 'utf8');
module.exports.removeUserFromRole = fs.readFileSync(path.join(__dirname, 'removeUserFromRole.gql'), 'utf8');
module.exports.addUserToRoleMigration = fs.readFileSync(path.join(__dirname, 'addUserToRoleMigration.gql'), 'utf8');
module.exports.removeUserFromRoleMigration = fs.readFileSync(path.join(__dirname, 'removeUserFromRoleMigration.gql'), 'utf8');
module.exports.updateRoleMappingMigration = fs.readFileSync(path.join(__dirname, 'updateRoleMappingMigration.gql'), 'utf8');
module.exports.createSourcePullRequestToJiraIssueLink = fs.readFileSync(path.join(__dirname, 'createSourcePullRequestToJiraIssueLink.gql'), 'utf8');
module.exports.deleteSourcePullRequestToJiraIssueLink = fs.readFileSync(path.join(__dirname, 'deleteSourcePullRequestToJiraIssueLink.gql'), 'utf8');
module.exports.importSSHPublicKey = fs.readFileSync(path.join(__dirname, 'importSSHPublicKey.gql'), 'utf8');
module.exports.deleteSSHPublicKey = fs.readFileSync(path.join(__dirname, 'deleteSSHPublicKey.gql'), 'utf8');
module.exports.retryTestActionTestCasesMigration = fs.readFileSync(path.join(__dirname, 'retryTestActionTestCasesMigration.gql'), 'utf8');
module.exports.validateWorkflowDefinitionDraft = fs.readFileSync(path.join(__dirname, 'validateWorkflowDefinitionDraft.gql'), 'utf8');
module.exports.createSession = fs.readFileSync(path.join(__dirname, 'createSession.gql'), 'utf8');
module.exports.revokeSession = fs.readFileSync(path.join(__dirname, 'revokeSession.gql'), 'utf8');
module.exports.createSourceRepositoryCommit = fs.readFileSync(path.join(__dirname, 'createSourceRepositoryCommit.gql'), 'utf8');