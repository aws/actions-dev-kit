export function escape(input?: string): string {
    return input === undefined
        ? ''
        : input
            .replace(/%/g, '%25')
            .replace(/&/g, '%26')
            .replace(/\$/g, '%24')
            .replace(/\r/g, '%0D')
            .replace(/\n/g, '%0A')
            .replace(/;/g, '%3B')
            .replace(/:/g, '%3A')
            .replace(/,/g, '%2C');
}