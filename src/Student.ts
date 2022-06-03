export class Student {
  private name: string;
  private static age?: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  static getInfo(): string {
    return `static ${this.age}`;
  }

  getName(): string {
    // eslint-disable-next-line
    console.log(this.setName());
    return this.name;
  }
  private setName(): boolean {
    return false;
  }
}
