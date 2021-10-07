import { App } from './app.js';

export class ProjectList {

  constructor(private app: App) {
    this.render();
  }

  private render(): HTMLElement {
    const template = document.getElementById("project-list")! as HTMLTemplateElement;
    const importedNode = document.importNode(template.content, true);
    const list = importedNode.firstElementChild as HTMLElement;

    this.app.append(list);

    return list;
  }
};
