import { Issue, QuokkaIssueProvider } from '@quokka/issue/lib/issue';
import { Credential } from '@quokka/adk-client/dist/fusi-client';
import { info, setFailed } from './utils/adkcore-util';
import { ValidationError } from './errors/validation-error';
import { CreateIssueOutput } from '@quokka/adk-client';

export async function runAction(endpoint: string, cred: Credential, title: string, description: string): Promise<CreateIssueOutput> {
    const fusiClient = new QuokkaIssueProvider(endpoint, cred);
    const issue = new Issue(fusiClient);
    console.log(`creating issue for endpoint: ${endpoint}, title: ${title}`);
    return issue.createIssueInBacklog(
        { name: 'TestOrganizationFranchen', id: 'test' },
        {
            id: 'test',
            name: 'TestProject',
        },
        title,
        description,
    );
}
