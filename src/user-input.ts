import { Autobind } from "./autobind.js";
import { Project } from "./project.js";
import { App } from "./app.js";
import {InvalidInputError} from "./invalid-input-error.js";

export class UserInput {
  private readonly form: HTMLFormElement;
  private readonly titleInput: HTMLInputElement;
  private readonly descriptionInput: HTMLInputElement;
  private readonly peopleInput: HTMLInputElement;

  constructor(private readonly app: App) {
    this.app = app;
    this.form = this.render();

    this.titleInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById("description")! as HTMLInputElement;
    this.peopleInput = document.getElementById("people")! as HTMLInputElement;

    this.listen();
  }

  private render(): HTMLFormElement {
    const template = document.getElementById("project-input")! as HTMLTemplateElement;
    const importedNode = document.importNode(template.content, true);
    const form = importedNode.firstElementChild as HTMLFormElement;
    form.id = "user-input";

    this.app.prepend(form);

    return form;
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();

    let newProject = Project.fromInput(this.titleInput, this.descriptionInput, this.peopleInput);
    try {
      newProject.validate();
      this.app.addProject(newProject);
      this.form.reset();
    } catch (error) {
      if (error instanceof InvalidInputError) {
        alert("You did something wrong!");
      } else {
        throw error;
      }
    }
  }

  private listen() {
    this.form.addEventListener("submit", this.submitHandler);
  }
}
