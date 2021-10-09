import {Component} from './component.js';
import {Autobind} from './autobind.js';
import {ProjectStatus} from './project-status.js';

export class ProjectList extends Component<HTMLUListElement> {
  constructor(private readonly status: ProjectStatus) {
    super("app", "project-list", ProjectList.getId(status))
    this.addRenderHook(this.setHeader);
    this.addRenderHook(this.setContentsId);
    this.addRenderHook(() => this.element.addEventListener("dragover", this.dragOverHandler))
    this.addRenderHook(() => this.element.addEventListener("drop", this.dropHandler))
    this.addRenderHook(() => this.element.addEventListener("dragleave", this.dragLeaveHandler))
  }

  private static getId(status: ProjectStatus): string {
    return `${status.toLowerCase()}-projects`;
  }

  public static getContentsId(status: ProjectStatus): string {
    return `${ProjectList.getId(status)}-ul`
  }

  @Autobind
  private setHeader(): void {
    this.element.querySelector("h2")!.textContent = this.status;
  }

  @Autobind
  private setContentsId(): void {
    this.element.querySelector("ul")!.id = ProjectList.getContentsId(this.status);
  }

  @Autobind
  private dragOverHandler(_: DragEvent): void {
    this.element.querySelector("ul")!.classList.add("droppable");
  }

  @Autobind
  private dropHandler(event: DragEvent): void {

  }

  @Autobind
  private dragLeaveHandler(_: DragEvent): void {
    this.element.querySelector("ul")!.classList.remove("droppable")
  }
};
