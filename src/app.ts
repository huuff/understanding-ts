export class App {
  private readonly mainDiv = document.getElementById("app")! as HTMLDivElement;

  public prepend(element: HTMLElement) {
    this.mainDiv.insertAdjacentElement("afterbegin", element);
  }
}
