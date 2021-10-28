import { Project } from './project';

export class App {
  private readonly projects: Project[] = [];
  
  public addProject(project: Project) {
    this.projects.push(project);
    console.log(`Added project ${project}`);
  }
}
