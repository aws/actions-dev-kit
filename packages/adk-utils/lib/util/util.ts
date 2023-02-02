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

export function escape(input?: string): string {
    return input === undefined
        ? ''
        : input
            .replace(/%/g, '%25')
            .replace(/\&/g, '%26')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A')
            .replace(/;/g, '%3B')
            .replace(/,/g, '%2C')
            .replace(/\|/g, '%7C')
            .replace(/>/g, '%3E')
            .replace(/</g, '%3C')
            .replace(/`/g, '%60')
            .replace(/\\/g, '%5C')
            .replace(/!/g, '%21');
}

export function isString(input: any): boolean {
    return typeof input === 'string' || input instanceof String;
}
