import { App } from './app';
import { Component } from './component';

export class ProjectList {
  private readonly component: Component<HTMLUListElement>;

  constructor(
    private readonly app: App,
    id: string
  ) {
    this.component = new Component("projectListsLocation", "projectListTemplate", id);
    this.component.render(x => x);
  }
}
