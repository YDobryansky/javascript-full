import { User } from './user.js';
import { Student } from './student.js';

function getTopStudent(students) {
  const { id, firstName, lastName } = students
    .filter(student => student.isActive)
    .reduce((prevStudent, currentStudent) => {
      return currentStudent.points > prevStudent.points ? currentStudent : prevStudent;
    });

  return { id, firstName, lastName };
}

const students = [
  new Student(1, 'John', 'Doe', 'A1', 85),
  new Student(2, 'Jane', 'Smith', 'B1', 92),
  new Student(3, 'Alice', 'Johnson', 'A1', 92),
  new Student(4, 'Bob', 'Brown', 'C1', 79),
];

console.log(getTopStudent(students));
students[1].isActive = false;
console.log(getTopStudent(students));
students[2].isActive = false;
console.log(getTopStudent(students));

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());

const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85);
const student2 = new Student(2, 'Bob', 'Smith', 'Physics', 92);
const student3 = new Student(3, 'Carol', 'Williams', 'Chemistry', 78);

student2.isActive = false;
const studentsList = [student1, student2, student3];

console.log(getTopStudent(studentsList));
