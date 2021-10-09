import {Component} from './component.js';
import { InvalidInputError } from './invalid-input-error.js';
import {ProjectStatus} from './project-status.js';
import { ProjectList } from './project-list.js';
import {Autobind} from './autobind.js';

// TODO: Showing 1 person assigned when only 1

export class Project extends Component<HTMLLIElement> {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly people: number,
    public status: ProjectStatus
  ) {
    super(ProjectList.getContentsId(status), "single-project", Math.random().toString());
    if (this.title.length === 0 || this.description.length === 0 || this.people === 0) {
      throw new InvalidInputError();
    }

    this.addRenderHook(this.setContents);
  }

  @Autobind
  private setContents(): void {
    this.element.querySelector("h2")!.textContent = this.title;
    this.element.querySelector("h3")!.textContent = `${this.people.toString()} Persons assigned`;
    this.element.querySelector("p")!.textContent = this.description;
  }
}
