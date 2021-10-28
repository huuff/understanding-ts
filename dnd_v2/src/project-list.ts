import { App } from './app';
import {Autobind} from './autobind';
import { Component } from './component';
import {ProjectStatus} from './project-status';

export class ProjectList {
  private readonly component: Component<HTMLUListElement>;

  constructor(
    private readonly app: App,
    private readonly projectStatus: ProjectStatus
  ) {
    this.component = new Component("projectListsLocation", "projectListTemplate", `${projectStatus}List`);
    this.component.render(this.addHeader);
    console.log(`Created a list for ${projectStatus} projects`)
  }

  public get id() {
    return this.component.element.id;
  }

  @Autobind
  private addHeader(elem: HTMLUListElement): HTMLUListElement {
    const listHeader = elem.firstElementChild! as HTMLLIElement;
    listHeader.innerText = `${this.titleCase(this.projectStatus)} projects`;
    return elem;
  }

  private titleCase(string: string): string {
    return string[0].toUpperCase() + string.substr(1);
  }
}
