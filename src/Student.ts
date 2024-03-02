export class Student {
  private readonly name: string;
  private static age?: number = 10;

  // overload
  public constructor(name: string);
  public constructor(name: number);
  public constructor(name: string | number) {
    if (typeof name === 'string') {
      this.name = 'String Type constructor';
    } else {
      this.name = 'Number Type constructor';
    }
  }

  // rest parameters
  static aboutRestParameters(info: string, ...params: string[]) {
    return `${info}, ${params.length}`;
  }

  static getInfo(student: Student): string {
    return `info: ${student.name}`;
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
