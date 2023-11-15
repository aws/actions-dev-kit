/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PullRequestEventType = "DRAFT" | "OPEN" | "CLOSED" | "MERGED" | "REVISION";

export interface PullRequestTrigger {
  Type: "PULLREQUEST";
  Events: [PullRequestEventType];
  Branches?: string[];
  FilesChanged?: string[];
}
