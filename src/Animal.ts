interface AnimalAction {
  type?: string;
  display(): void;
}

abstract class Animal {
  type?: string;

  constructor(type: string) {
    console.log('animal constructor');
    this.type = type;
  }

  display(): void {
    console.log('this is an animal');
  }

  getMe(): Animal {
    return this;
  }

  abstract customDisplay(): void;
} // abs class

class Dog extends Animal {
  public name: string;
  private readonly readonlySample?: string;
  constructor(type: string, name: string) {
    super(type);
    this.name = name;
    this.readonlySample = 'readonly sample';
  }

  getReadOnlySample(): string | undefined {
    return this.readonlySample;
  }

  display(): void {
    console.log('this is a dog');
  }

  customDisplay(): void {
    console.log('Dog custom display');
  }
}

export { Animal, AnimalAction, Dog };
