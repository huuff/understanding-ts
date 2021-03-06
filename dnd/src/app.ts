import {Component} from "./component";
import {ProjectStatus} from "./project-status";
import {Project} from "./project";

export class App {
  private components: Component<any>[] = [];

  public addComponent(component: Component<any>) {
    this.components.push(component);
    this.render();
  }

  public render(): void {
    this.components.forEach(component => component.render())  
  }

  public setProjectStatus(projectId: string, newStatus: ProjectStatus): void {
    for (const component of this.components) {
      if (component instanceof Project && component.elementId === projectId) {
        component.setStatus(newStatus);
        this.render();
        return;
      }
    }
    throw new Error(`Project of id ${projectId} not found!`);
  }
}
