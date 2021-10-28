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
    this.component.render(x => x);
    console.log(`Created a list for ${projectStatus} projects`)
  }

  public get id() {
    return this.component.element.id;
  }
}
