import { State } from "./state";
import { Project } from "./project";

export class Form {
  private readonly element: HTMLFormElement;

  constructor(private readonly state: State, id: string) {
    this.element = document.querySelector(`#${id}`) as HTMLFormElement;
    
    // TODO: autobind
    this.element.addEventListener("submit", this.submit.bind(this));
  }

  submit(e: Event): void {
    e.preventDefault();
    const projectNameElement: HTMLInputElement = this.element.elements.namedItem("name") as HTMLInputElement;
    const project = new Project(projectNameElement.value, null, null);

    this.state.addProject(project)

    this.element.reset();
  }
}

