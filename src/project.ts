import {Component} from './component.js';
import { InvalidInputError } from './invalid-input-error.js';
import {ProjectStatus} from './project-status.js';
import { ProjectList } from './project-list.js';
import {Autobind} from './autobind.js';

export class Project extends Component<HTMLLIElement> {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly people: number,
    public status: ProjectStatus
  ) {
    super(ProjectList.getId(status), "single-project", Math.random().toString());
    if (this.title.length === 0 || this.description.length === 0 || this.people === 0) {
      throw new InvalidInputError();
    }

    this.addRenderHook(() => this.element.textContent = this.getContent() );
  }

  @Autobind
  private getContent(): string {
    return `${this.title}: ${this.description}. People: ${this.people}`;
  }
}
