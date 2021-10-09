import {Component} from "./component.js";
import { Project } from "./project.js";

export class App {
  private components: Component<any>[] = [];
  projects: Project[] = [];

  public addProject(project: Project): void {
    this.projects.push(project);

    console.log(`Added project ${JSON.stringify(project)}`);
    this.components.forEach(component => component.render())  
  }

  public addComponent(component: Component<any>) {
    this.components.push(component);
  }
}
