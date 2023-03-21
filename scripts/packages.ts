// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-console */

import * as fs from 'fs'
import * as path from 'path'

const PACKAGES_DIR = path.join(__dirname, '..', 'packages')
const CONSTRUCT_PACKAGES_DIR = path.join(__dirname, '..', 'packages', 'codecatalyst-entities')

export interface PackageInfo {
    packageJson: any,
    packageRoot: string,
    packageName: string
}

export const packages = readAllPackages();

function readAllPackages(): PackageInfo[]{
    const sourcePackages: PackageInfo[] = [];

    fs.readdirSync(PACKAGES_DIR).forEach(packagePath => {
        const packageRoot = path.join(PACKAGES_DIR, packagePath);
        const packageJsonPath = path.join(PACKAGES_DIR, packagePath, 'package.json');
        if (fs.existsSync(packageJsonPath)){
            sourcePackages.push(getPackageData(packageRoot, packageJsonPath));
        }
    })

    fs.readdirSync(CONSTRUCT_PACKAGES_DIR).forEach(packagePath => {
        const packageRoot = path.join(CONSTRUCT_PACKAGES_DIR, packagePath);
        const packageJsonPath = path.join(CONSTRUCT_PACKAGES_DIR, packagePath, 'package.json');
        if (fs.existsSync(packageJsonPath)){
            sourcePackages.push(getPackageData(packageRoot, packageJsonPath));
        }
    })

    return sourcePackages;
}

function getPackageData(packageRoot: string, packageJsonPath: string): PackageInfo{
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
    return {
        packageJson,
        packageRoot,
        packageName: packageJson.name,
    }
}

