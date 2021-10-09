import {Component} from './component.js';
import { InvalidInputError } from './invalid-input-error.js';
import {ProjectStatus} from './project-status.js';
import { ProjectList } from './project-list.js';
import {Autobind} from './autobind.js';

// TODO: Showing 1 person assigned when only 1
// TODO: telling exactly what's wrong in the error

export class Project extends Component<HTMLLIElement> {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly people: number,
    public status: ProjectStatus
  ) {
    super(ProjectList.getContentsId(status), "single-project", Math.random().toString());
    if (this.title.length === 0 || this.description.length === 0 || this.people === 0) {
      throw new InvalidInputError();
    }

    this.addRenderHook(this.setContents);
    this.addRenderHook(() => this.element.addEventListener("dragstart", this.dragStartHandler));
    this.addRenderHook(() => this.element.addEventListener("dragend", this.dragEndHandler));
  }

  public setStatus(newStatus: ProjectStatus): void {
    this.status = newStatus;
    this.containerId = ProjectList.getContentsId(newStatus);
  }

  @Autobind
  private setContents(): void {
    this.element.querySelector("h2")!.textContent = this.title;
    this.element.querySelector("h3")!.textContent = `${this.people.toString()} Persons assigned`;
    this.element.querySelector("p")!.textContent = this.description;
  }

  @Autobind
  private dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.elementId);
    event.dataTransfer!.effectAllowed = 'move';
  }

  @Autobind
  private dragEndHandler(event: DragEvent): void {
    console.log(event);
  }
}
