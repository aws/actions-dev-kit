import * as core from "@quokka/adk-core";
import { Organization } from './types/types';

export function getOrganization(): Organization {
  return <Organization> {
    name: getOrganizationName(),
    id: getOrganizationId()
  };
}

function getOrganizationName() {
  const varName = "CAWS_SOURCE_REPO_OWNER";
  const name = core.getInput(varName);
  // const name = "test1-test2-test3";
  const regex = /(.*)-(.*)/;
  return name.match(regex)![1];
}

function getOrganizationId() {
  return getEnv("CAWS_WORKFLOW_ORGANIZATION_ID");
}

function getEnv(varName: string) {
  return core.getInput(varName);
}
