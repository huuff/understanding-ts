import { App } from './app.js';
import { Project } from './project.js';
import {Component} from './component.js';
import {Autobind} from './autobind.js';

export class ProjectList extends Component<HTMLUListElement> {
  constructor(private readonly app: App, private readonly name: string) {
    super("app", "project-list", `${name.toLowerCase()}-projects`)
    this.addRenderHook(this.renderProjects)
  }

  @Autobind
  public renderProjects(): void {
    this.element.querySelector("h2")!.textContent = this.name;

    // TODO: This in the project component render method
    for (const project of this.app.projects) {
      this.element.appendChild(project.getRendered());
    }
  }
};
