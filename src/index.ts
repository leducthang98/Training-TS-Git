import { Student } from './Student';

// const hello: string = 'Hello'
const student: Student = new Student(1);
console.log(student.getName());
console.log(Student.getInfo(student));
console.log(Student.aboutRestParameters('rest','a','b','c'));
