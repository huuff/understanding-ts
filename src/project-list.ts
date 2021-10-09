import { App } from './app.js';
import { Observer } from './observer.js';
import { Project } from './project.js';
import {Component} from './component.js';

export class ProjectList extends Component<HTMLUListElement> implements Observer {
  private readonly projects: Project[] = [];
 
  constructor(private readonly app: App, private readonly name: string) {
    super("app", "project-list", `${name.toLowerCase()}-projects`)
    app.registerObserver(this);
    this.addRenderHook(this.renderProjects.bind(this))
  }

  public observeNewProject(project: Project): void {
    this.projects.push(project); 
    this.render();
  }

  public renderProjects(): void {
    console.log("hi")
    this.element.querySelector("h2")!.textContent = this.name;

    // TODO: This in the project component render method
    for (const project of this.projects) {
      this.element.appendChild(project.getRendered());
    }
  }
};
