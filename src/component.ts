export abstract class Component<T extends HTMLElement> {
  private readonly template: HTMLTemplateElement;
  private readonly renderHooks: (() => void)[] = [];
  protected element!: T;
  
  constructor(
    private containerId: string, 
    templateId: string,
    private readonly elementId: string) {
    this.template = document.getElementById(templateId)! as HTMLTemplateElement;
  }

  public render(): void {
    if (this.element)
      this.element.remove();

    this.element = document.importNode(this.template.content, true).firstElementChild as T;
    this.element.id = this.elementId;
    document.getElementById(this.containerId)!.appendChild(this.element);
    this.renderHooks.forEach((hook) => hook());
  }

  // TODO: This in constructor? it's a less mutable approach
  public addRenderHook(hook: () => void): void {
    this.renderHooks.push(hook);
  }
}
