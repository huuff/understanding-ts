import {Component} from "./component.js";

export class App {
  private components: Component<any>[] = [];

  public addComponent(component: Component<any>) {
    this.components.push(component);
    this.render();
  }

  public render(): void {
    this.components.forEach(component => component.render())  
  }
}
