import { Project } from "./project.js";

export class App {
  private readonly mainDiv = document.getElementById("app")! as HTMLDivElement;

  private projects: Project[] = [];

  public prepend(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("afterbegin", element);
  }

  public append(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("beforeend", element);
  }

  public addProject(project: Project): void {
    this.projects.push(project);

    console.log(`Added project ${JSON.stringify(project)}`);
  }
}
