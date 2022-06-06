import { GetOrganizationInput, GetOrganizationOutput, GetProjectInput, GetProjectOutput } from './fusi';

const X_API_KEY: string = 'CBxZwFn2o0pofwuIE0yR';
export const UsingApiFetchHeaderName = 'X-Using-API-Fetch';
import fetch from 'node-fetch';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const queries = require('./graphql/queries');

export interface FusiQuery<T> {
    query: string;
    variables: Record<string, any>;
    cookie: string;
    deserializer: (arg0: any) => T;
}

export class FusiClient {
    constructor(private endpoint: string, private cookie: string) {
    }

    public async getOrganization(params: GetOrganizationInput): Promise<GetOrganizationOutput> {
        return await this.executeQuery({
            query: queries.getOrganization,
            variables: {
                input: {
                    ...params,
                },
            },
            cookie: this.cookie,
            deserializer: data => this.deserialize(data, 'getOrganization'),
        }, this.endpoint);
    }

    public async getProject(params: GetProjectInput): Promise<GetProjectOutput> {
        return await this.executeQuery({
            query: queries.getProject,
            variables: {
                input: {
                    ...params,
                },
            },
            cookie: this.cookie,
            deserializer: data => this.deserialize(data, 'getProject'),
        }, this.endpoint);
    }

    private deserialize<T>(json: string, prop: string): T {
        const obj = this.parse(json);

        if (obj.error) {
            throw new Error(JSON.stringify(obj.error));
        }

        return obj[prop];
    }

    private parse(json: string): any {
        const parsedJSON = JSON.parse(json);

        if (parsedJSON.errors) {
            throw new Error(parsedJSON.errors[0].message);
        }

        return parsedJSON.data;
    }

    private async executeQuery<T>({ variables, query, cookie, deserializer }: FusiQuery<T>,
        endpoint: string): Promise<T> {
        const response = await fetch(endpoint, {
            headers: {
                'content-type': 'application/json',
                'x-api-key': X_API_KEY,
                [UsingApiFetchHeaderName]: '1',
                'Cookie': `${cookie}`,
            },
            body: JSON.stringify({ variables, query }),
            method: 'POST',
        });

        const responseBody = await response.text();
        return deserializer(responseBody);
    }
}
