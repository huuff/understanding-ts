export class Project {
  private status: ("active" | "finished");

  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly assignedPeople: number
  ) {
    this.status = "active";
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
