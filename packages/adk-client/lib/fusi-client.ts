import { GetOrganizationInput, GetOrganizationOutput, GetProjectInput, GetProjectOutput } from './fusi';
import fetch from 'node-fetch';

const X_API_KEY: string = 'CBxZwFn2o0pofwuIE0yR';
export const UsingApiFetchHeaderName = 'X-Using-API-Fetch';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const queries = require('./graphql/queries');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mutations = require('./graphql/mutations');

export interface GraphQLQuery<T> {
    query: string;
    endpoint: string;
    variables: Record<string, any>;
    cookie: string;
    responseDeserializer: (data: any) => T;
}

export class GraphQLQueryBuilder {
    constructor(private operation: string, private input: object) {
    }

    public build(endpoint: string, cookie: string): GraphQLQuery<any> {
        return {
            query: queries[this.operation] ?? mutations[this.operation],
            endpoint: endpoint,
            variables: {
                input: {
                    ...this.input,
                },
            },
            cookie: cookie,
            responseDeserializer: data => ClientUtils.parseJson(data, this.operation),
        };
    }
}

export class ClientUtils {
    public static async executeQuery<T>({ query, endpoint, variables, cookie, responseDeserializer }: GraphQLQuery<T>): Promise<T> {
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
        return responseDeserializer(responseBody);
    }

    public static parseJson<T>(json: string, prop: string): T {
        const obj = ClientUtils.parse(json);
        if (obj == undefined) {
            throw new Error('An internal server error has occurred');
        }

        if (obj.error) {
            throw new Error(JSON.stringify(obj.error));
        }

        return obj[prop];
    }

    public static parse(json: string): any {
        const result = JSON.parse(json);

        if (result.errors) {
            throw new Error(result.errors[0].message);
        }

        return result.data;
    }
}

export class FusiClientBase {

    constructor(protected endpoint: string, protected cookie: string) {
    }

    public async getOrganization(input: GetOrganizationInput): Promise<GetOrganizationOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('getOrganization', input).build(this.endpoint, this.cookie));
    }

    public async getProject(input: GetProjectInput): Promise<GetProjectOutput> {
        return await ClientUtils.executeQuery(new GraphQLQueryBuilder('getProject', input).build(this.endpoint, this.cookie));
    }
}
