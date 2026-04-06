const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 5, 6, 7, 8];

// console.log(arr1);
// console.log(arr2);

const fullName = {
    fName : "Abhishek",
    lName : "Rajputh"
}

const Person = {
    ...fullName,
    age : 21,
    country : 'India'
}

// console.log(fullName);
// console.log(Person);

const student = {
    ...fullName,
    ['fName'] : 'RajKumar'
}

console.log(fullName);
console.log(student);