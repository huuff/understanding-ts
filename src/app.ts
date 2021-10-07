class AppContainer {
  private readonly mainDiv = document.getElementById("app")! as HTMLDivElement;

  public append(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("afterbegin", element);
  }
}

function createForm(): HTMLFormElement {
  const template = document.getElementById("project-input")! as HTMLTemplateElement;
  const importedNode = document.importNode(template.content, true);
  const form = importedNode.firstElementChild as HTMLFormElement;
  form.id = "user-input";

  return form;
}

const appContainer = new AppContainer();

appContainer.append(createForm());
