// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-console */

import * as path from 'path'
import * as fs from 'fs';

import { packages } from './packages'
import { findPackageRoot } from './findPackageRoot'
import { isString } from "@aws/codecatalyst-adk-utils/lib";

// This list is not comprehensive, but simply covers the approved licenses
// we're using so far.
const PERMISSIBLE_DISTRIBUTION_LICENSES = ['Apache-2.0', 'MIT', 'ISC', '0BSD', 'BSD-2-Clause', 'BSD-3-Clause', 'Python-2.0']

// Those packages don't have a LICENSE file, but they do have license set in the package.json
const DEPENDENCIES_WITHOUT_LICENSE_FILE = ['consola'];

export function getFullAttributionsText(packageName: string): string {
    const attributions = getAttributions(packageName)
    return `${packageName} includes the following third-party software/licensing:\n\n${attributions}`
}

function getAttributions(
    packageName: string,
    depth = 0,
    seen: Set<string> = new Set(),
): string {
    if (seen.has(packageName)) {
        return ''
    }
    seen.add(packageName)

    const packageRoot = findPackageRoot(packageName)

    const { dependencies, version, licenseId } = loadPackageJsonInfo(packageRoot)

    if (!PERMISSIBLE_DISTRIBUTION_LICENSES.includes(licenseId)) {
        throw new Error(
            `License ${licenseId} for package ${packageName} is not a permissible third-party license for distribution.`,
        )
    }

    const dependencyAttributions = dependencies.map((dependency) => getAttributions(dependency, depth + 1, seen))
    const packageFiles = fs.readdirSync(packageRoot, 'utf-8')
    const licenseFile = packageFiles.find((name) => name?.toLowerCase().includes('license') || name?.toLowerCase().includes('licence'))
    const noticeFile = packageFiles.find((name) => name?.toLowerCase().includes('notice'))

    if (!licenseFile) {
        throw new Error(`No license found for ${packageName}`)
    }

    return [
        getSingleAttribution(
            packageName,
            version,
            licenseId,
            path.join(packageRoot, licenseFile),
            noticeFile? path.join(packageRoot, noticeFile) : undefined,
        ),
        ...dependencyAttributions,
    ].join('')
}

function loadPackageJsonInfo(
    packageRoot: string,
): { dependencies: string[]; version: string; licenseId: string } {
    const packageJsonPath = path.join(packageRoot, 'package.json')
    const packageJson = require(packageJsonPath)
    const license = packageJson.license && isString(packageJson.license)
        ? packageJson.license
        : packageJson.license.type
    return {
        dependencies: Object.keys(packageJson.dependencies || {})
        .filter( (dep) => !DEPENDENCIES_WITHOUT_LICENSE_FILE.includes(dep)),
        version: packageJson.version,
        licenseId: license
    }
}

function getSingleAttribution(
    packageName: string,
    version: string,
    licenseId: string,
    licensePath: string,
    noticePath?: string,
) {
    if (packages.map(({ packageName }) => packageName).includes(packageName)) {
        return ''
    }
    const licenseText = fs.readFileSync(licensePath, 'utf-8')

    // If an Apache-2.0 licensed project includes a NOTICE, it must be included
    // in the attribution file after the license
    const noticeText =
        noticePath && licenseId === 'Apache-2.0' ? fs.readFileSync(noticePath, 'utf-8') : ''

    const noticeAttribution = noticeText
        ? `* For ${packageName}@${version} see also this required NOTICE:\n${indent(noticeText)}`
        : ''

    return [
        `** ${packageName}@${version} - https://npmjs.com/package/${packageName}`,
        licenseText,
        noticeAttribution,
        '----------------\n\n',
    ]
        .filter(Boolean)
        .join('\n')
}

function indent(text: string, width = 4) {
    const indentString = ' '.repeat(width)
    return `${indentString}${text.split('\n').join(`\n${indentString}`)}`
}

function run() {
    return packages.map((packageInfo)  => {
            const attributionsFilePath = path.join(packageInfo.packageRoot, 'THIRD_PARTY_LICENSES')
            console.log(`Writing attribution file for ${packageInfo.packageName}...`)
            try {
                fs.writeFileSync(attributionsFilePath, getFullAttributionsText(packageInfo.packageName))
            } catch (e) {
                console.error(`Failed for ${packageInfo.packageName} (root: ${packageInfo.packageRoot})`)
                throw e
            }
            console.log(`Wrote attribution file to ${attributionsFilePath}`)
        })
}

if (require.main === module) {
    run()
    console.log('Done.')

}