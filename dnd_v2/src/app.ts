import { Project } from './project';
import {ProjectList} from './project-list';
import { ProjectStatus } from './project-status';

export class App {
  private readonly projects: Project[] = [];
  private readonly projectLists: Map<ProjectStatus, ProjectList> = new Map();

  constructor() {
    for (let status of Object.values(ProjectStatus)) {
      this.projectLists[status] = new ProjectList(this, status);
    }
  }
  
  public addProject(project: Project) {
    this.projects.push(project);
    console.log(`Added project ${project}`);
  }

  public getProjectList(status: ProjectStatus) {
    return this.projectLists[status];
  }
}
