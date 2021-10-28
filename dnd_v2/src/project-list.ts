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
    this.component.render(this.initialize);
    console.log(`Created a list for ${projectStatus} projects`)
  }

  public get id() {
    return this.component.element.id;
  }

  @Autobind
  private initialize(elem: HTMLUListElement): HTMLUListElement {
    const listHeader = elem.firstElementChild! as HTMLLIElement;
    listHeader.innerText = `${this.titleCase(this.projectStatus)} projects`;

    elem.addEventListener("dragover", this.dragOverHandler);
    elem.addEventListener("dragleave", this.dragLeaveHandler);
    elem.addEventListener("drop", this.dropHandler);
    return elem;
  }

  @Autobind
  private dragLeaveHandler(_: DragEvent): void {
    this.component.element.classList.remove("drag-over");
  }

  @Autobind
  private dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      this.component.element.classList.add("drag-over");
    }
  }

  @Autobind
  private dropHandler(event: DragEvent): void {
    event.preventDefault();
    const droppedProjectId = event.dataTransfer!.getData("text/plain");
    console.log(`Dropped ${droppedProjectId} in ${this.projectStatus} list`)
    this.component.element.classList.remove("drag-over");
  }

  private titleCase(string: string): string {
    return string[0].toUpperCase() + string.substr(1);
  }
}
