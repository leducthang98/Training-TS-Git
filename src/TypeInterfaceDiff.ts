interface A {
  name: string;
}
interface B {
  age: number;
}
export interface C extends A, B {
  gender: string;
  display: (name: string) => void;
}

export type D =
  | A
  | {
      name: number;
      display: (name: string) => void;
    };
