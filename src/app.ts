class AppContainer {
  private readonly mainDiv = document.getElementById("app")! as HTMLDivElement;

  public prepend(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("afterbegin", element);
  }
}

class UserInput {
  private form;
  private titleInput;
  private descriptionInput;
  private peopleInput;

  constructor(appContainer: AppContainer) {
    this.form = this.render(appContainer);

    this.titleInput = document.getElementById("title")! as HTMLInputElement;
    this.descriptionInput = document.getElementById("description")! as HTMLInputElement;
    this.peopleInput = document.getElementById("people")! as HTMLInputElement;

    this.listen();
  }

  private render(appContainer: AppContainer) {
    const template = document.getElementById("project-input")! as HTMLTemplateElement;
    const importedNode = document.importNode(template.content, true);
    const form = importedNode.firstElementChild as HTMLFormElement;
    form.id = "user-input";

    appContainer.prepend(form);

    return form;
  }

  private listen() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Tried to submit!");

    });
  }
}


const appContainer = new AppContainer();
const userInput = new UserInput(appContainer);

