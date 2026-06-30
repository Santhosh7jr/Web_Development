class Student {

  name : string;
  age : number;

  constructor(name : string, age : number) {
    this.name = name;
    this.age = age;
  }

}

const student = new Student("guru", 21);
// console.log(student);
// console.log("Name: ", student.name);
// console.log("Age: ", student.age);

class StaffInfo{

  public name : string;
  private salary : number;

  constructor(name : string, salary : number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

}

const staff = new StaffInfo("giri", 100000);
// console.log(staff);
// console.log(staff.name);
// // console.log(staff.salary);
// console.log(staff.getSalary());

class Demo {
  static population : string = '8.3B';
}

console.log(Demo.population);