import chalk from 'chalk';
import { ProductInfo } from '../types/types';
import { applyTemplate } from '../util/template';
import fs from 'fs';
import yaml from 'js-yaml';


const validations: Array<(productInfo: ProductInfo, action: any, language: any, disconnected: boolean) => boolean | Promise<boolean>> = [
    validateQuokkaInputs,
    validateGitDirectory,
    validateNoExistingADKConfigFile,
    validateLanguage,
];

const GIT_DIR_NAME = '.git';
const ADK_ACTION_CONFIG_FILE_NAME = '.actionconfig';
const ADK_ACTION_DEFINITION_FILE_NAME = 'action.yml';
const SUPPORTED_LANGUAGES = new Set(['typescript']);
const NODE_VERSION = 'node12';

export async function handleCommand(productInfo: ProductInfo, action: any, language: any, disconnected: boolean): Promise<number> {
    const preReqValidationStatus = validatePrerequisites(productInfo, action, language, disconnected);
    if (await preReqValidationStatus) {
        console.log(chalk.red('Initialize command failed'));
        return preReqValidationStatus;
    }
    console.log(chalk.green(`Product Info ${Object.values(productInfo)}, language: ${language}, action: ${action}, disconnected: ${disconnected}`));
    writeActionConfiguration(productInfo, action, language);
    writeActionDefinitionYaml(productInfo, action, language);
    return preReqValidationStatus;
}

async function validatePrerequisites(productInfo: ProductInfo, action: any, language: any, disconnected: boolean) {
    // 1. validate .git directory exists
    let validationStatus = 0;
    for (const validation of validations) {
        if (!await validation(productInfo, action, language, disconnected)) {
            validationStatus = 1;
        }
    }
    return validationStatus;
}

function writeActionConfiguration(productInfo: ProductInfo, action: any, language: any) {
    let data = {
        caws_organization: `${productInfo.organization}`,
        caws_project: `${productInfo.project}`,
        caws_repository: `${productInfo.repository}`,
        action_language: `${language}`,
        action_name: `${action}`,
    };
    let yamlStr = yaml.dump(data);
    fs.writeFileSync(ADK_ACTION_CONFIG_FILE_NAME, yamlStr, 'utf8');
}

function writeActionDefinitionYaml(productInfo: ProductInfo, action: any, language: any) {
    let templateKeys: { [key: string]: string } = {
        node_version: `${NODE_VERSION}`,
        action_name: `${action}`,
        caws_organization: `${productInfo.organization}`,
        caws_project: `${productInfo.project}`,
    };
    const templateContents = fs.readFileSync(`${__dirname}/../../templates/definition/hello-world/${language}/action.yml`, 'utf-8');
    const finalContents = applyTemplate(templateContents, templateKeys);
    fs.writeFileSync(ADK_ACTION_DEFINITION_FILE_NAME, finalContents, 'utf8');
}

function validateLanguage(productInfo: ProductInfo, action: any, language: any, disconnected: boolean) {
    if (!SUPPORTED_LANGUAGES.has(language)) {
        console.log(chalk.red(`
      Language ${language} is not supported currently in ADK.
      Only ${[...SUPPORTED_LANGUAGES]} are supported.
    `));
        return false;
    }
    return true;
}

function validateGitDirectory(productInfo: ProductInfo, action: any, language: any, disconnected: boolean) {
    if (!disconnected && !fs.existsSync(GIT_DIR_NAME)) {
        console.log(chalk.red(`
      Current directory does not look like git workspace.
      Please run 'git clone <URL> prior to running the initialize command.'
    `));
        return false;
    }
    return true;
}

function validateNoExistingADKConfigFile(productInfo: ProductInfo, action: any, language: any, disconnected: boolean) {
    if (fs.existsSync(ADK_ACTION_CONFIG_FILE_NAME)) {
        console.log(chalk.red(`
      Current directory has ${ADK_ACTION_CONFIG_FILE_NAME} present.
      Please delete the file and try again.
    `));
        return false;
    }
    return true;
}

function validateQuokkaInputs(productInfo: ProductInfo, action: any, language: any, disconnected: boolean) {
    return (isDefined(productInfo.organization, 'organization') &&
        isDefined(productInfo.project, 'project') &&
        isDefined(productInfo.repository, 'repository') &&
        isDefined(action, 'action name'));
}

function isDefined(varName: any, errorVar: any) {
    if (varName == undefined) {
        console.log(chalk.red(`Parameter ${errorVar} needs to be defined with the command.`));
        return false;
    }
    return true;
}
