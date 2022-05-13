import { handleCommand } from '../../lib/commands/init';
import { ProductInfo } from '../../lib/types/types';
import fs from 'fs';

jest.mock('fs');
const mockFS: jest.Mocked<typeof fs> = <jest.Mocked<typeof fs>>fs;

describe('Init Command Tests', () => {
    describe('Init validation tests', () => {
        it('should fail validation if organization input params are not valid', async () => {
            const productInfo : ProductInfo = {
                organization: undefined,
                project: 'project',
                repository: 'repo',
            };
            mockFS.existsSync
                .mockReturnValueOnce(true) // git
                .mockReturnValueOnce(false);
            await validateWithInput(1, productInfo);
        });

        it('should fail validation if project input params are not valid', async () => {
            const productInfo : ProductInfo = {
                organization: 'org',
                project: undefined,
                repository: 'repo',
            };
            mockFS.existsSync
                .mockReturnValueOnce(true) // git
                .mockReturnValueOnce(false);
            await validateWithInput(1, productInfo);
        });

        it('should fail validation if repository input params are not valid', async () => {
            const productInfo : ProductInfo = {
                organization: 'org',
                project: 'project',
                repository: undefined,
            };
            mockFS.existsSync
                .mockReturnValueOnce(true) // git
                .mockReturnValueOnce(false);
            await validateWithInput(1, productInfo);
        });

        it('should fail validation if not a git connected workspace', async () => {
            const productInfo : ProductInfo = {
                organization: 'test',
                project: 'test',
                repository: 'test',
            };
            mockFS.existsSync
                .mockReturnValueOnce(false) // git
                .mockReturnValueOnce(false);
            await validateWithInput(1, productInfo);
        });

        it('should fail validation if action config is already present', async () => {
            const productInfo : ProductInfo = {
                organization: 'test',
                project: 'test',
                repository: 'test',
            };
            mockFS.existsSync
                .mockReturnValueOnce(true) // git
                .mockReturnValueOnce(true);
            await validateWithInput(1, productInfo);
        });

        it('should fail validation if invalid language is passed', async () => {
            const productInfo : ProductInfo = {
                organization: 'test',
                project: 'test',
                repository: 'test',
            };
            mockFS.existsSync
                .mockReturnValueOnce(false) // git
                .mockReturnValueOnce(true);
            await validateWithInput(1, productInfo, 'test', 'java');
        });

        it('should fail validation if invalid action name is passed', async () => {
            const productInfo : ProductInfo = {
                organization: 'test',
                project: 'test',
                repository: 'test',
            };
            mockFS.existsSync
                .mockReturnValueOnce(true) // git
                .mockReturnValueOnce(false);
            const resp = await handleCommand(productInfo, undefined, 'typescript', false);
            expect(resp).toBe(1);
        });
    });

    describe('Init success tests', () => {
        it('should succeed when all information is passed', async () => {
            mockFS.existsSync
                .mockReturnValueOnce(true) // git
                .mockReturnValueOnce(false);
            await validateWithMockData();
        });

        it('should ignore missing git configuration when disconnected flag is set', async () => {
            mockFS.existsSync
                .mockReturnValueOnce(false) // git
                .mockReturnValueOnce(false);
            await validateWithMockData(true);
        });
    });

    async function validateWithInput(expected: number, productInfo: ProductInfo, action: any = 'test', language: any = 'typescript', disconnected: boolean = false) {
        const resp = await handleCommand(productInfo, action, language, disconnected);
        expect(resp).toBe(expected);
    }

    async function validateWithMockData(disconnected: boolean = false) {
        const productInfo : ProductInfo = {
            organization: 'test',
            project: 'test',
            repository: 'test',
        };
        const action = 'test';
        const language = 'typescript';
        let data = `
      SchemaVersion: 1.0
      Name: '%%action_name%% Action'
      Id: '%%caws_organization%%/%%action_name%%-action'
      Version: '0.0.0'
      Description: 'This Action greets someone and records the time'
      Author: '%%caws_organization%%/%%caws_project%%'
      Configuration:
        WhoToGreet:
          Description: 'Who are we greeting here'
          Required: true
          DisplayName: 'Who to greet'
          Type: string
        HowToGreet:
          Description: 'How to greet the person'
          Required: false
          DisplayName: 'How to greet'
          Type: string
          Default: 'Hello there,'
        WhenToGreet:
          Description: 'How long to wait before greet the person in seconds'
          Required: false
          DisplayName: 'When to greet'
          Type: number
          Default: 1
      Environment:
        Required: true
      Sources:
        Required: true
      Runs:
        Using: '%%node_version%%'
        Main: 'lib/index.js'
    `;

        mockFS.readFileSync.mockReturnValue(data);
        const resp = await handleCommand(productInfo, action, language, disconnected);
        expect(resp).toBe(0);
    }
});
