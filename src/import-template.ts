export function importTemplate<T extends HTMLElement>(id: string): T {
  const template = document.getElementById(id)! as HTMLTemplateElement;
  const importedNode = document.importNode(template.content, true);
  return importedNode.firstElementChild as T;
}
