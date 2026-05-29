// Methods for normal functions

/*function methodDemo() {
    console.log(`my name is: ${this.name} \nand my age is: ${this.age}`);
}

let obj = {name : "human", age : 23, methodDemo};
obj.methodDemo();*/


// Methods for arrow functions

/*let obj = {
    find(arr) {
        return arr.some(v => v === this.value);
    },
    value : 5
};

console.log(obj.find([7, 4, 6, 3, 5]));*/


// Prototypes

/*let empty = {};
console.log(empty.toString);
console.log(empty.toString());*/

// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf(Math.max) ==Function.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
    speak(line) {
        console.log(`the ${this.type} rabbit says ${line}`);
    },
    type : "dark"
};

let obj = Object.create(protoRabbit);
obj.type = "black";
obj.speak("I am fear and darkness");
console.log(obj);