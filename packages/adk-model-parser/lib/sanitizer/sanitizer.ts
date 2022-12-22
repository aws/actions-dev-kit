const defaultSkipPrefixes = ['- run', '- Run'];

export function sanitizeFile(file: string): string {
    let sanitizedModelFile = '';
    file.split(/\r?\n/).forEach(line => {
        let skipLine = defaultSkipPrefixes?.some(prefix => {
            return (line.trim().startsWith(prefix));
        });
        sanitizedModelFile += skipLine ? line : sanitizeLine(line);
    });
    return sanitizedModelFile;
};

function sanitizeLine(text: string): string {
    return text
        .replace(/;/g, '')
        .replace(/&/g, '')
        .replace(/$/g, '')
        .replace(/\\n/g, '')
        .replace(/\\r/g, '') + '\n';
};
