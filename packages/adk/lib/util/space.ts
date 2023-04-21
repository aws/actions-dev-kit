import fs from 'fs';
export const ACTION_CONFIG_FILE = '.actionconfig';

export function read_space(): string {
    let result = '';
    if (fs.existsSync(ACTION_CONFIG_FILE)) {
        const actionConfig = fs.readFileSync(ACTION_CONFIG_FILE, 'utf-8');
        if (actionConfig) {
            actionConfig.split(/\r?\n/).forEach(function (line) {
                const space = line.split('codecatalyst_space: ')[1];
                if (space) {
                    result = space;
                }
            });
        }
    }

    return result;
}