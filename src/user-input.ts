import { Autobind } from "./autobind.js";
import { Project } from "./project.js";
import { App } from "./app.js";
import { InvalidInputError } from "./invalid-input-error.js";
import {Component} from "./component.js";

export class UserInput extends Component<HTMLFormElement> {
  private readonly titleInput: HTMLInputElement;
  private readonly descriptionInput: HTMLInputElement;
  private readonly peopleInput: HTMLInputElement;

  constructor(private readonly app: App) {
    super("app", "project-input", "user-input");
    this.app = app;

    this.titleInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById("description")! as HTMLInputElement;
    this.peopleInput = document.getElementById("people")! as HTMLInputElement;

    this.listen();
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();

    let newProject = Project.fromInput(this.titleInput, this.descriptionInput, this.peopleInput);
    try {
      newProject.validate();
      this.app.addProject(newProject);
      this.element?.reset();
    } catch (error) {
      if (error instanceof InvalidInputError) {
        alert("You did something wrong!");
      } else {
        throw error;
      }
    }
  }

  // TODO: Inline in constructor
  private listen() {
    this.element?.addEventListener("submit", this.submitHandler);
  }
}
