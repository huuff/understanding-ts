import { InvalidInputError } from './invalid-input-error.js';
import {ProjectStatus} from './project-status.js';

export class Project {
  constructor(
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {
    if (this.title.length === 0 || this.description.length === 0 || this.people === 0) {
      throw new InvalidInputError();
    }
  }

  public getRendered(): HTMLLIElement {
    const text = `${this.title}: ${this.description}. People: ${this.people}`;

    const listItem = document.createElement("li");
    listItem.textContent = text;

    return listItem;
  }
}
