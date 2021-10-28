import { ProjectStatus } from './project-status';
import { Component } from './component';
import {App} from './app';
import {Autobind} from './autobind';

export class Project {
  private status: ProjectStatus;
  private component: Component<HTMLLIElement>;
  public readonly id: string;

  constructor(
    private readonly app: App,
    private readonly name: string,
    private readonly description: string,
    private readonly assignedPeople: number
  ) {
    this.status = ProjectStatus.ACTIVE;
    this.id = this.randomId();
    this.component = new Component(
      this.app.getProjectList(this.status).id,
      "projectTemplate",
      this.id
    )
    this.component.render(this.initialize);
  }

  public setStatus(newStatus: ProjectStatus): void {
    this.status = newStatus;
    this.component.parentId = this.app.getProjectList(newStatus).id;
    this.component.render(this.initialize);
  }

  @Autobind
  private initialize(element: HTMLLIElement): HTMLLIElement {
    element.querySelector("h2")!.innerText = this.name;
    element.querySelector("h3")!.innerText = `${this.assignedPeople} assigned`
    element.querySelector("p")!.innerText = this.description;
    element.addEventListener("dragstart", this.dragStartHandler)
    return element;
  }

  @Autobind
  private dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.id);
    event.dataTransfer!.effectAllowed = "move";
    console.log(`Started dragging ${this.name}`);
  }

  private randomId() {
    return "project" + Math.floor(Math.random() * 1000000).toString();
  }

  toString(): string {
    return `${this.name}: ${this.description} - ${this.assignedPeople}`;
  }
}
