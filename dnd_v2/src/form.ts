import { App } from "./app";
import { Project } from "./project";
import { Component } from "./component";
import {Autobind} from "./autobind";

export class Form {
  private readonly component: Component<HTMLFormElement>;

  constructor(private readonly app: App) {
    this.component = new Component("userInputLocation", "userInputTemplate", "userInput");
    
    this.component.render(this.addSubmitListener)
  }

  @Autobind
  private addSubmitListener(element: HTMLFormElement): HTMLFormElement {
    element.addEventListener("submit", this.submit.bind(this))
    return element;
  }

  private submit(e: Event): void {
    e.preventDefault();
    const projectNameElement = this.component.element.elements.namedItem("name") as HTMLInputElement;
    const descriptionElement = this.component.element.elements.namedItem("description") as HTMLTextAreaElement;
    const assignedPeopleElement = this.component.element.elements.namedItem("people") as HTMLInputElement;

    const project = new Project(
      this.app,
      projectNameElement.value,
      descriptionElement.value,
      +assignedPeopleElement.value
    );

    this.app.addProject(project)
    this.component.element.reset();
  }
}

