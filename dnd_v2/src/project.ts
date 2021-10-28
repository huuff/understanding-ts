import { ProjectStatus } from './project-status';
import { Component } from './component';
import {App} from './app';

export class Project {
  private status: ProjectStatus;
  private component: Component<HTMLLIElement>;

  constructor(
    private readonly app: App,
    private readonly name: string,
    private readonly description: string,
    private readonly assignedPeople: number
  ) {
    this.status = ProjectStatus.ACTIVE;
    this.component = new Component(
      this.app.getProjectList(this.status).id,
      "projectTemplate",
      this.randomId()
    )
    this.component.render(this.initializeProjectElement.bind(this));
  }

  private initializeProjectElement(element: HTMLLIElement): HTMLLIElement {
    element.querySelector("h2")!.innerText = this.name;
    element.querySelector("h3")!.innerText = `${this.assignedPeople} assigned`
    element.querySelector("p")!.innerText = this.description;
    return element;
  }

  private randomId() {
    return "project" + Math.floor(Math.random() * 1000000).toString();
  }

  toString(): string {
    return `${this.name}: ${this.description} - ${this.assignedPeople}`;
  }
}
