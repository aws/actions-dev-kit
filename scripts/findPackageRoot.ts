// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-console */
import * as path from 'path'
import * as fs from 'fs';

export function findPackageRoot(packageName: string): string {
    // The package is most likely to be installed at the node_modules top-level,
    // so check there first in case we can exit early

    const topLevelNodeModulesRoot = path.resolve(__dirname, '..', 'node_modules', packageName)
    if (foundPackageJsonWithLicenseInfo(topLevelNodeModulesRoot)) {
        return topLevelNodeModulesRoot
    }

    let packageMain
    try {
        packageMain = require.resolve(packageName)
    } catch {
        try {
            // Packages that don't have "main" fields in package.json
            packageMain = require.resolve(path.join(packageName, 'package.json'))
        } catch (e) {
            // Packages that don't have main and don't have a package.json "exports" entry
            // This is super hacky as it pulls out the package root from the resulting error message
            ;[packageMain] = (e as Error).message.split(' ').reverse()
            console.warn(`WARNING: extracted package main path from error message: ${packageMain}`)
        }
    }
    let packageRoot = path.dirname(packageMain)
    while (!(foundPackageJsonWithLicenseInfo(packageRoot))) {
        packageRoot = path.dirname(packageRoot)
    }
    return packageRoot
}

function foundPackageJsonWithLicenseInfo(directory: string): boolean {
    const packageJsonPath = path.join(directory, 'package.json')
    const foundPackageJson = exists(packageJsonPath)
    if (foundPackageJson) {
        const contents = require(packageJsonPath)
        return Boolean(contents.license)
    }
    return false
}

function exists(path: string): boolean {
    return fs.existsSync(path)
}