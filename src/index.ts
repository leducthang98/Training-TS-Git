import { AnimalAction, Dog } from './Animal';
import { Student } from './Student';
import { C, D } from './TypeInterfaceDiff';

// const hello: string = 'Hello'
const student: Student = new Student(1);
console.log(student.getName());
console.log(Student.getInfo(student));
console.log(Student.aboutRestParameters('rest', 'a', 'b', 'c'));

// interface
const animalActionSample: AnimalAction = {
  display: (): void => {
    console.log('anonymous instance which impl from AnimalAction');
  },
}; // anonymous instance which impl from AnimalAction
animalActionSample.display();

// extend, super
const dog: Dog = new Dog('DOG', 'Luffy');
dog.customDisplay();
dog.display();
console.log(dog.getMe());
console.log(dog.getReadOnlySample());
console.log('END');
// interface vs type

// interface
const interfaceSample: C = {
  age: 24,
  name: 'Thang',
  gender: 'Male',
  display: (name: string) => {
    console.log(name);
  },
};

interfaceSample.display('INTERFACE SAMPLE');
console.log(interfaceSample);

// type
const typeSample: D = {
  name: 1,
  display: (name: string) => {
    console.log(name);
  },
};
console.log(typeSample);
typeSample.display('TYPE SAMPLE');

type Data = {
  name?: string;
};

const dataSample: Data = {
  name: 'a',
};

const nameA: string = dataSample.name!;
console.log('aa', nameA);

console.log("Thang")
console.log("Commit1")
console.log("Commit2")
console.log("Commit3")
console.log("Commit4")
console.log("mastera")
