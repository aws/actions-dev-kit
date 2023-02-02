/**
 * Sanitizes (escapes) special characters in the command and its arguments.
 * @param cmd The command to be sanitized.
 * @param args The command arguments to be sanitized.
 * @return The sanitized and concatenated command with arguments.
 */
export function sanitizeCommand(cmd: string, args?: string[]): string {
    const sanitizedCommand = cmd == undefined ? '' : escape(cmd.trim());
    if (sanitizedCommand === '' || !args || args.length === 0 || !Array.isArray(args)) {
        return sanitizedCommand;
    }
    const sanitizedArguments = args.filter((arg) => arg)
        .map((arg) => escape(arg.trim()))
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
            .replace(/\&/g, '%26')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A')
            .replace(/;/g, '%3B')
            .replace(/,/g, '%2C');
}

/**
 * Checks if the input is a string.
 * @param input The input to be checked.
 * @return Returns true if the given input is a string.
 */
export function isString(input: any): boolean {
    return typeof input === 'string' || input instanceof String;
}
