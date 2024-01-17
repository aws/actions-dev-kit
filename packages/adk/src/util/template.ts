export function applyTemplate(templateContents: string, templateParam: { [key: string]: string }): string {
  for (let key in templateParam) {
    let value = templateParam[key];
    let keyReplace = new RegExp(`%%${key}%%`, 'gi');
    templateContents = templateContents.replace(keyReplace, value);
  }
  return templateContents;
}
