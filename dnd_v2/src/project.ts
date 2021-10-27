export class Project {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly assignedPeople: number
  ) {}

  toString(): string {
    return JSON.stringify(this);
  }
}
