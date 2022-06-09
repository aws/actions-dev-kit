import { ClientUtils, Credential, FusiClientBase, GraphQLQueryBuilder } from '@quokka/adk-client/dist/fusi-client';
import {
    CreateCommentForIssueInput,
    CreateCommentForIssueOutput,
    CreateIssueInput,
    CreateIssueOutput,
    GetIssueInput,
    GetIssueOutput,
    ListIssuesInput,
    ListIssuesOutput,
    ListIssueStoreStatusesOutput,
    ListIssueStoreStatusesRequestInput,
} from '@quokka/adk-client/dist/fusi';
import { Organization } from '@quokka/organization/lib';
import { Project } from '@quokka/project/lib';

export interface IssueProvider {
    listIssues(input: ListIssuesInput): Promise<ListIssuesOutput>;

    getIssue(input: GetIssueInput): Promise<GetIssueOutput>;

    createIssue(input: CreateIssueInput): Promise<CreateIssueOutput>;

    createCommentForIssue(input: CreateCommentForIssueInput): Promise<CreateCommentForIssueOutput>;

    listIssueStoreStatuses(input: ListIssueStoreStatusesRequestInput): Promise<ListIssueStoreStatusesOutput>;
}

export const DEFAULT_ISSUE_STORE_NAME = 'default';
export const BACKLOG = 'Backlog';

export class Issue {
    constructor(private provider: IssueProvider) {
    }

    public getIssueProvider = () => this.provider;

    public async getIssue(organization: Organization, project: Project, shortId: string): Promise<GetIssueOutput | undefined> {
        const listIssuesOutput = await this.provider.listIssues({
            organizationName: organization.name,
            projectName: project.name,
            issueStoreName: DEFAULT_ISSUE_STORE_NAME,
        });
        const id = listIssuesOutput.issues.filter(i => i.shortId == shortId).map(i => i.id).pop();
        return id != undefined ?
            this.provider.getIssue({
                id: id,
                organizationName: organization.name,
                projectName: project.name,
                issueStoreName: DEFAULT_ISSUE_STORE_NAME,
            }) :
            undefined;
    }

    public async createIssueInBacklog(organization: Organization, project: Project, title: string, description: string = '', priority: string = 'low') {
        let projectName = project.name;
        let organizationName = organization.name;
        let listIssueStoreStatusesOutput = await this.provider.listIssueStoreStatuses({
            organizationName: organizationName,
            projectName: projectName,
            issueStoreName: DEFAULT_ISSUE_STORE_NAME,
        });
        let backlogStatus = listIssueStoreStatusesOutput.items.filter(i => i.name == BACKLOG).pop();
        if (backlogStatus == undefined) {
            throw new Error("can't find the backlog status");
        }
        return this.provider.createIssue({
            organizationName: organizationName,
            projectName: projectName,
            issueStoreName: DEFAULT_ISSUE_STORE_NAME,
            description: description,
            title: title,
            archived: false,
            statusId: backlogStatus.id,
            priority: priority,
        });
    }
}

export class QuokkaIssueProvider extends FusiClientBase implements IssueProvider {
    constructor(protected endpoint: string, protected cred: Credential) {
        super(endpoint, cred);
    }

    public async listIssues(input: ListIssuesInput): Promise<ListIssuesOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('listIssues', input).build(this.endpoint, this.cred));
    }

    public async getIssue(input: GetIssueInput): Promise<GetIssueOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('getIssue', input).build(this.endpoint, this.cred));
    }

    public async createIssue(input: CreateIssueInput): Promise<CreateIssueOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('createIssue', input).build(this.endpoint, this.cred));
    }

    public async createCommentForIssue(input: CreateCommentForIssueInput): Promise<CreateCommentForIssueOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('createCommentForIssue', input).build(this.endpoint, this.cred));
    }

    public async listIssueStoreStatuses(input: ListIssueStoreStatusesRequestInput): Promise<ListIssueStoreStatusesOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('listIssueStoreStatuses', input).build(this.endpoint, this.cred));
    }
}