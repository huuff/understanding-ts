import { Autobind } from "./autobind.js";
import { Project } from "./project.js";
import { App } from "./app.js";

export class UserInput {
  // TODO: Can these be readonly?
  private app;
  private form;
  private titleInput: HTMLInputElement;
  private descriptionInput: HTMLInputElement;
  private peopleInput: HTMLInputElement;

  constructor(app: App) {
    this.app = app;
    this.form = this.render();

    this.titleInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById("description")! as HTMLInputElement;
    this.peopleInput = document.getElementById("people")! as HTMLInputElement;

    this.listen();
  }

  private render() {
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
    console.log(`Tried to submit ${this.titleInput.value}`);

    let newProject = Project.fromInput(this.titleInput, this.descriptionInput, this.peopleInput);
    try {
      newProject.validate();
      this.app.addProject(newProject);
    } catch (error) {
      alert("You did something wrong!");
    }
  }

  private listen() {
    this.form.addEventListener("submit", this.submitHandler);
  }
}
