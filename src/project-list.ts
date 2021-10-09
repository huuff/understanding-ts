import { App } from './app.js';
import { Project } from './project.js';
import {Component} from './component.js';
import {Autobind} from './autobind.js';
import {ProjectStatus} from './project-status.js';

export class ProjectList extends Component<HTMLUListElement> {
  constructor(private readonly app: App, private readonly status: ProjectStatus) {
    super("app", "project-list", `${status.toLowerCase()}-projects`)
    this.addRenderHook(this.renderProjects)
  }

  @Autobind
  public renderProjects(): void {
    this.element.querySelector("h2")!.textContent = this.status;

    // TODO: This in the project component render method
    this.app.projects.filter(project => project.status === this.status).forEach((project) => {
      this.element.querySelector("ul")?.appendChild(project.getRendered());
    })
  }
};
