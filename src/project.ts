import { InvalidInputError } from './invalid-input-error.js';

export class Project {
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
      throw new InvalidInputError();
    }
  };
}
