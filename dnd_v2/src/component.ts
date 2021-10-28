type InitializeElement<ElementType> = (baseElement: ElementType) => ElementType;

export class Component<ElementType extends HTMLElement> {

  constructor(
    public parentId: string,
    private readonly templateId: string,
    private readonly elementId: string
  ) {
  }
  
  public get element(): ElementType {
    return document.querySelector(`#${this.elementId}`) as ElementType;
  }

  public render(initializeFunction: InitializeElement<ElementType>): void {
    this.remove();
    this.add(initializeFunction);
  }

  private remove(): void {
    document.querySelector(`#${this.elementId}`)?.remove();
  }

  private add(initializeFunction: InitializeElement<ElementType>): void {
    const templateElement = <HTMLTemplateElement>document.querySelector(`#${this.templateId}`)!;

    let newElement: ElementType = document.importNode(templateElement.content, true).firstElementChild as ElementType;
    newElement = initializeFunction(newElement);
    newElement.id = this.elementId;

    document.querySelector(`#${this.parentId}`)?.appendChild(newElement);
  }

}
