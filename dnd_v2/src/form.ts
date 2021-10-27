export class Form {
  private readonly element: HTMLFormElement;

  constructor(id: string) {
    this.element = document.querySelector(`#${id}`) as HTMLFormElement;

    
    // TODO: autobind
    this.element.addEventListener("submit", this.submit.bind(this));
  }

  submit(e: Event): void {
    e.preventDefault();
    const projectNameElement: HTMLInputElement = this.element.elements.namedItem("name") as HTMLInputElement;
    const projectName = projectNameElement.value;

    console.log(`Created project ${projectName}`)

    this.element.reset();
  }
}

