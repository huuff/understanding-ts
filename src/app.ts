class AppContainer {
  private readonly mainDiv = document.getElementById("app")! as HTMLDivElement;

  public prepend(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("afterbegin", element);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  return {
    configurable: true,
    get() {
      const boundFunction = descriptor.value.bind(this);
      return boundFunction;
    }
  };
}

class Project {
  
  constructor(
    public title: string,
    public description: string,
    public people: number
  ) {}

  public static fromInput(
    titleInput: HTMLInputElement,
    descriptionInput: HTMLInputElement,
    peopleInput: HTMLInputElement
  ) {
    return new Project(titleInput.value, descriptionInput.value, +peopleInput.value);
  }

  public validate(): void {
    if (this.title.length === 0 || this.description.length === 0 || this.people === 0) {
      throw new Error();
    }
  };
}

class UserInput {
  private form;
  private titleInput: HTMLInputElement;
  private descriptionInput: HTMLInputElement;
  private peopleInput: HTMLInputElement;

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

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(`Tried to submit ${this.titleInput.value}`);

    let newProject = Project.fromInput(this.titleInput, this.descriptionInput, this.peopleInput);
    try {
      newProject.validate();
    } catch (error) {
      alert("You did something wrong!");
    }
  }

  private listen() {
    this.form.addEventListener("submit", this.submitHandler);
  }
}


const appContainer = new AppContainer();
const userInput = new UserInput(appContainer);

