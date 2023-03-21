export function applyTemplate(templateContents: string, templateParam: { [key: string]: string }): string {
    for (let key in templateParam) {
        let value = templateParam[key];
        let searchKey = `%%${key}%%`;
        let keyReplace = new RegExp(searchKey, 'gi');
        templateContents = templateContents.replace(keyReplace, value);
    }
    return templateContents;
}
