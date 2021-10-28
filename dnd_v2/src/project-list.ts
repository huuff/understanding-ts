import { App } from './app';
import { Component } from './component';
import {ProjectStatus} from './project-status';

export class ProjectList {
  private readonly component: Component<HTMLUListElement>;

  constructor(
    private readonly app: App,
    private readonly projectStatus: ProjectStatus
  ) {
    this.component = new Component("projectListsLocation", "projectListTemplate", `${projectStatus}List`);
    this.component.render(this.addHeader.bind(this));
    console.log(`Created a list for ${projectStatus} projects`)
  }

  public get id() {
    return this.component.element.id;
  }

  private addHeader(elem: HTMLUListElement): HTMLUListElement {
    const listHeader = elem.firstElementChild! as HTMLLIElement;
    listHeader.innerText = `${this.titleCase(this.projectStatus)} projects`;
    return elem;
  }

  private titleCase(string: string): string {
    return string[0].toUpperCase() + string.substr(1);
  }
}
