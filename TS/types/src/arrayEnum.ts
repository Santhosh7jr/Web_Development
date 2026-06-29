const fruits: string[] = ["apple", "grape"];
fruits.push("orange");
// console.log(fruits);

type Info = {
  name : string,
  age : number
}

const students : Info[] = [
  {name : "guru", age : 20}
]
students.push({name : "giri", age : 21});
// console.log(students);

const employees : readonly Info[] = [
  {name : "guru", age : 20}
]
employees.push({name : "giri", age : 21});
// console.log(employees);

const details : [string, number : 20 | 21, boolean?] = ["guru", 20, false];
const details1 : [string, number : 20 | 21, boolean?] = ["giri", 22];
// console.log(details);
// console.log(details1);

enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

console.log(Days.MONDAY);