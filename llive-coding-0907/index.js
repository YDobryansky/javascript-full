import { Student } from './student.js';
import { User } from './user.js';

function getTopStudent(students) {
  const topStudent = students
    .filter(student => student.getIsActive())
    .reduce((topStudent, currentStudent) => {
      if (!topStudent || currentStudent.points > topStudent.points) {
        return currentStudent;
      }
      return topStudent;
    });

  return {
    id: topStudent.id,
    firstName: topStudent.firstName,
    lastName: topStudent.lastName,
  };
}

//examples

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName()); // ===> John Doe
console.log(user2.getFullName()); // ===> Jane Doe
console.log(user3.getFullName()); // ===> Jim Beam

const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85);
const student2 = new Student(2, 'Bob', 'Smith', 'Physics', 92);
const student3 = new Student(3, 'Carol', 'Williams', 'Chemistry', 78);

student2.getIsActive = false;
const students = [student1, student2, student3];

console.log(getTopStudent(students)); // ===> { id: 1, firstName: 'Alice', lastName: 'Johnson' }
