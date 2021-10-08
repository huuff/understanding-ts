export function importTemplate<T extends HTMLElement>(id: string, withId: string): T {
  const template = document.getElementById(id)! as HTMLTemplateElement;
  const importedNode = document.importNode(template.content, true);
  const resultElement = importedNode.firstElementChild as T;
  resultElement.id = withId;

  return resultElement;
}
