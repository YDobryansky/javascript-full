import { Student } from './student.js';

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

// Тести для getTopStudent
const students = [
  new Student(1, 'John', 'Doe', 'A1', 85),
  new Student(2, 'Jane', 'Smith', 'B1', 92),
  new Student(3, 'Alice', 'Johnson', 'A1', 92),
  new Student(4, 'Bob', 'Brown', 'C1', 79),
];

console.log(getTopStudent(students));

students[1].setIsActive(false);
console.log(getTopStudent(students));

students[2].setIsActive(false);
console.log(getTopStudent(students));
