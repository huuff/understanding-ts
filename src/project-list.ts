import {Component} from './component.js';
import {Autobind} from './autobind.js';
import {ProjectStatus} from './project-status.js';

export class ProjectList extends Component<HTMLUListElement> {
  constructor(private readonly status: ProjectStatus) {
    super("app", "project-list", ProjectList.getId(status))
    this.addRenderHook(this.setHeader);
    this.addRenderHook(this.setContentsId);
  }

  private static getId(status: ProjectStatus): string {
    return `${status.toLowerCase()}-projects`;
  }

  public static getContentsId(status: ProjectStatus): string {
    return `${ProjectList.getId(status)}-ul`
  }

  // TODO: can these be private?
  @Autobind
  public setHeader(): void {
    this.element.querySelector("h2")!.textContent = this.status;
  }

  @Autobind
  public setContentsId(): void {
    this.element.querySelector("ul")!.id = ProjectList.getContentsId(this.status);
  }
};
