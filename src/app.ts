import { Project } from "./project.js";
import { Observer } from './observer.js';

export class App {
  private readonly mainDiv = document.getElementById("app")! as HTMLDivElement;
  private readonly observers: Observer[] = [];

  private activeProjects: Project[] = [];

  public prepend(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("afterbegin", element);
  }

  public append(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("beforeend", element);
  }

  public addProject(project: Project): void {
    this.activeProjects.push(project);

    console.log(`Added project ${JSON.stringify(project)}`);
    
    for (const observer of this.observers) {
      if (observer.observeNewProject) {
        console.log("This observer can observe!");
        observer.observeNewProject(project);
      }
    }
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }
}
