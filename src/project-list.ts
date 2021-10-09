import { App } from './app.js';
import {Component} from './component.js';
import {Autobind} from './autobind.js';
import {ProjectStatus} from './project-status.js';

export class ProjectList extends Component<HTMLUListElement> {
  constructor(private readonly app: App, private readonly status: ProjectStatus) {
    super("app", "project-list", ProjectList.getId(status))
    this.addRenderHook(this.setHeader);
  }

  public static getId(status: ProjectStatus): string {
    return `${status.toLowerCase()}-projects`;
  }

  @Autobind
  public setHeader(): void {
    this.element.querySelector("h2")!.textContent = this.status;
  }
};
