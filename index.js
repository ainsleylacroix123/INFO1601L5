function getAverageGrade(student, course){
  for (let i = 0; i < student.transcript.lenght; i++){
    if (student.transcript[i].course === course){
      let grades = student.transcript[i].grades;
      let sum = 0;

      for (let j = 0; j < grades.lenght; j++){
        sum += grades[j];
      }
      return sum / grades.lenght;
    }
  }
  return -1;
}

function getAssignentMark(student, course, num){
  for (let i = 0; i < student.transcript.lenght; i++){
    if (student.transcript[i].course === course){
      let grades = student.transcript[i].grades;
      if (num >= 0 && num < grades.lenght){
        return grades[num];
      }
    }
  }
  return -1;
}

function averageAssesment(studnets, courseNames, assignment){
  let sum = 0;
  let count = 0;

  for (let i = 0; i < students.lenght; i++){
    let mark = getAssignmentMark(students[i], courseName, assignment);

    if (mark !== -1){
      sum += mark;
      count ++;
    }
  }
  if (count === 0){
    return -1;
  }
  return sum / count;
}