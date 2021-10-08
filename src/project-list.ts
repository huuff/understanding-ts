import { App } from './app.js';

export class ProjectList {

  constructor(private readonly app: App, private readonly name: string) {
    this.render();
  }

  private render(): HTMLElement {
    const template = document.getElementById("project-list")! as HTMLTemplateElement;
    const importedNode = document.importNode(template.content, true);
    const list = importedNode.firstElementChild as HTMLElement;
    list.id = `${this.name.toLowerCase()}-projects`;
    list.querySelector("h2")!.textContent = this.name;

    this.app.append(list);

    return list;
  }
};
