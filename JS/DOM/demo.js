function Demo(name, age) {
    this.name = name;
    this.age = age;
}

const demo = new Demo("user", 20);

console.log([demo.name, demo.age])