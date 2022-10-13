const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Benard",
  "Takes",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  let candidat = [];
  for (let i = 0; i < arr.length; i++) {
    candidat.push(arr[i]);
  }
  const group = [];
  for (let j = 1; j * 3 <= arr.length; j++) {
    group.push(candidat.splice(0, 3));
  }
  if (candidat.length === 0) {
    candidat = "-";
  } else {
    candidat = candidat.join(", ");
  }
  group.push(`Оставшиеся студенты: ${candidat}`);
  console.log(group, arr, arr.length);
  return group;
}

console.log(sortStudentsByGroups(students));
