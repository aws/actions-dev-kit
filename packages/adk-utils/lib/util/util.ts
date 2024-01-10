import fs from 'fs';

export const outputVariableNamePattern = new RegExp(/^[A-Za-z0-9@\-_]+$/);

/**
 * Sanitizes (escapes) special characters in the command and its arguments.
 * @param cmd The command to be sanitized.
 * @param args The command arguments to be sanitized.
 * @param sanitizeInput If true, all the input is sanitized.
 * @return The sanitized and concatenated command with arguments.
 */
export function sanitizeCommand(cmd: string, sanitizeInput: boolean = true, args?: string[]): string {
    const sanitizedCommand = cmd == undefined ? '' : sanitizeInput ? escape(cmd.trim()) : cmd.trim();
    if (sanitizedCommand === '' || !args || args.length === 0 || !Array.isArray(args)) {
        return sanitizedCommand;
    }
    const sanitizedArguments = args.filter((arg) => arg)
        .map((arg) => sanitizeInput? escape(arg.trim()) : arg.trim())
        .join(' ');

    return sanitizedCommand + ' ' + sanitizedArguments;
}

/**
 * Sanitizes (escapes) special characters in the input.
 * @param input The input to be sanitized.
 * @return The sanitized and input or empty string if the input is undefined.
 */
export function escape(input?: string): string {
    return input === undefined
        ? ''
        : input
            .replace(/%/g, '%25')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A');
}

/**
 * Checks if the input is a string.
 * @param input The input to be checked.
 * @return Returns true if the given input is a string.
 */
export function isString(input: any): boolean {
    return typeof input === 'string' || input instanceof String;
}

/**
 * Checks if the input is a string.
 * @param input The input to be checked.
 * @return Returns the input as a string or undefined.
 */
export function unknownToStringOrUndefined(input: unknown): string | undefined {
    return (typeof input === 'string') ? input as string : undefined;
}

/**
 * Checks if the input is a boolean.
 * @param input The input to be checked.
 * @return Returns the input as a boolean or undefined.
 */
export function unknownToBooleanOrFalse(input: unknown): boolean {
    return (typeof input === 'boolean') ? input as boolean : false;
}

/**
 * Copies from source to a destination file. Overrides the destination file if it exists and override flag is set to true.
 * @param src The source file.
 * @param dest The destination file.
 * @param overrideDest Override destination file if it already exists.
 */
export function copyToFileSync(src: string, dest: string, overrideDest?: boolean) {
    if (!fs.existsSync(dest) || (fs.existsSync(dest) && overrideDest)) {
        fs.copyFileSync(src, dest);
    }
}

/**
 * Writes content to a destination file. Overrides the destination file if it exists and override flag is set to true.
 * @param dest The destination file.
 * @param content The content to be written.
 * @param overrideDest Override destination file if it already exists.
 */
export function writeContentToFileSync(dest: string, content: string, overrideDest?: boolean) {
    if (!fs.existsSync(dest) || (fs.existsSync(dest) && overrideDest)) {
        fs.writeFileSync(dest, content, 'utf8');
    }
}

/**
 * Validates if the output variable name is valid by checking against this pattern - https://github.com/aws/actions-dev-kit/blob/main/packages/adk/templates/codecatalyst_model_schema.json#L94
 * @param varName The destination file.
 */
export function isValidOutputVariableName(varName: string): boolean {
    if (!varName || varName.length < 1 || varName.length > 255) {
        return false;
    }
    return outputVariableNamePattern.test(varName);
}
