import { GeneratorProps } from '../../lib/bootstrap/model';
import { SchemaType } from '../../lib/validation/model';
import fs from 'fs';
import { LicenseGenerator } from '../../lib/bootstrap/generators/license';

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    writeFileSync: jest.fn(),
    mkdirSync: jest.fn(),
    copyFileSync: jest.fn(),
    readFileSync: jest.fn(),
    existsSync: jest.fn(),
}));
const mockFS: jest.Mocked<typeof fs> = <jest.Mocked<typeof fs>>fs;

it('test license generator', async () => {
    const actionFileContent = `
            codecatalyst_space: MySpace
            codecatalyst_project: MyProject
            codecatalyst_repository: 
            action_language: typescript
            action_name: MyAction
        `;

    const props: GeneratorProps = {
        file: 'dummy',
        schemaType: SchemaType.CodeCatalyst,
        templateBasePath: `${__dirname}/../..`,
        language: 'typescript',
        overrideFiles: true,
    };

    mockFS.readFileSync.mockReturnValueOnce(actionFileContent);
    mockFS.existsSync.mockReturnValueOnce(true);

    const licenseGen = new LicenseGenerator();
    licenseGen.generate({ SchemaVersion: '1.0' }, props);
});