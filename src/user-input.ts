import { Autobind } from "./autobind.js";
import { Project } from "./project.js";
import { App } from "./app.js";
import { InvalidInputError } from "./invalid-input-error.js";
import {Component} from "./component.js";

export class UserInput extends Component<HTMLFormElement> {
  constructor(private readonly app: App) {
    super("app", "project-input", "user-input");
    this.app = app;

    this.addRenderHook(this.listen.bind(this))
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();

    try {
    let newProject = new Project(
      (this.element.querySelector("#title")! as HTMLInputElement).value, 
      (this.element.querySelector("#description")! as HTMLInputElement).value,
      +(this.element.querySelector("#people")! as HTMLInputElement).value,
      "active"
    );
      console.log(`New project ${JSON.stringify(newProject)}`)
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

  @Autobind
  private listen() {
    this.element?.addEventListener("submit", this.submitHandler);
  }
}
