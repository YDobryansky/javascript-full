'use strict';

export const studentsBirthDays = students => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const groupedStudents = {};

  students.forEach(student => {
    //choose name & birthDate
    const { name, birthDate } = student;
    //create date from birthday
    const date = new Date(birthDate);
    //get month from birthday and write month name + get day
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    //check if month isn't already in the groupedStudents object
    if (!groupedStudents[month]) {
      groupedStudents[month] = [];
    }
    //add the student to the month
    groupedStudents[month].push({ name, day });
  });
  //sort students
  Object.keys(groupedStudents).forEach(month => {
    groupedStudents[month].sort((a, b) => a.day - b.day);
  });

  const result = {};
  //Convert students into required format
  Object.keys(groupedStudents).forEach(month => {
    //write students name into month arr
    result[month] = groupedStudents[month].map(student => student.name);
  });

  return result;
};

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];
studentsBirthDays(students);
