# Installation Guide

### Prerequisites

* [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  * Easiest way to install npm is via [nvm](https://github.com/nvm-sh/nvm)
* Override the @quokka namespace registry
** Steps **
  * Run `npm config --global edit`
  * Add quokka namespace override to the configuration `@quokka:registry=https://npm.artifacts.service.quokka.codes/AEF-Team/ActionsDevKit/ActionsDevKitPackage/`
  * Visit [ADK-Package](https://quokka.codes/organizations/AEF-Team/projects/ActionsDevKit/package-repositories/ActionsDevKitPackage/view) registry and click `Connect to repository` button
  * Choose `npm` as package manager
  * Click `Create Token` to create new personal access token
  * Run `npm set //npm.artifacts.service.quokka.codes/AEF-Team/ActionsDevKit/ActionsDevKitPackage/:_authToken=[user-name]:[personal access token]` command to set the PAT for the registry

### Install ADK

* Run `npm install -g @quokka/adk`
  * Occassionally, npm runs into bug with non-empty cache and switching registry. If you run into issue where certain dependency is not found, either nuke your global npm cache or simply install the dependencies. `npm install -g chalk@4`, `npm install -g @quokka/adk-model-parser` etc.
 
* Validate ADK is running by running the following command `adk help`



