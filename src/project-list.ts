import { App } from './app.js';
import { Observer } from './observer.js';
import { Project } from './project.js';

export class ProjectList implements Observer {
  private readonly projects: Project[] = [];
  private readonly id: string;

  constructor(private readonly app: App, private readonly name: string) {
    this.id=`${name.toLowerCase()}-projects`;
    app.registerObserver(this);
    this.render();
  }

  private render(): HTMLElement {
    const template = document.getElementById("project-list")! as HTMLTemplateElement;
    const importedNode = document.importNode(template.content, true);
    const listParent = importedNode.firstElementChild as HTMLElement;
    listParent.id = this.id;
    listParent.querySelector("h2")!.textContent = this.name;

    this.renderAllProjects(listParent)

    this.app.append(listParent);

    return listParent;
  }

  private renderAllProjects(element: HTMLElement): void {
    const list: HTMLUListElement = element.querySelector("ul")! as HTMLUListElement;
    
    for (const project of this.projects) {
      let projectElement = document.createElement("li");
      projectElement.textContent = project.title;
      list.appendChild(projectElement)
    }
  }

  private reset(): void {
    document.getElementById(this.id)!.remove();
    this.render();
  }

  public observeNewProject(project: Project): void {
    this.projects.push(project); 
    this.reset()
    console.log(`${this.id} is observed ${JSON.stringify(project)}`);
  }
};
