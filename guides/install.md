# Installation Guide

### Prerequisites

* [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  * Easiest way to install npm is via [nvm](https://github.com/nvm-sh/nvm)
* Override the @codecatalyst namespace registry
** Steps **
  * Run `npm config --global edit`
  * Add codecatalyst namespace override to the configuration `@codecatalyst:registry=https://aef-team-198147706056.d.codeartifact.us-west-2.amazonaws.com/npm/ActionsDevKitPackage/`
  * Visit https://isengard.amazon.com/console-access?filter=198147706056 and copy and temporarily credentials for the ReadOnlyAdkCodeArtifact into working terminal session
    Run `aws codeartifact login --tool npm --repository ActionsDevKitPackage --domain aef-team --domain-owner 198147706056 --region us-west-2`

### Install ADK

* Run `npm install -g @codecatalyst/adk`
  * Occasionally, npm runs into bug with non-empty cache and switching registry. If you run into issue where certain dependency is not found, either nuke your global npm cache or simply install the dependencies. `npm install -g chalk@4`, `npm install -g @codecatalyst/adk-model-parser` etc.
 
* Validate ADK is running by running the following command `adk help`



