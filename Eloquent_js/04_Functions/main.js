// Scoping
/*let a = 10; //global scope
{
    let b = 20; //local scope
    var c = 30;//global scope
}
console.log(a, b, c);//throws error*/


//Functions
/*const square = function(x) {
    return x * x;
}
console.log(square(5));*/

/*const makeNoice = function() {
    console.log("pling");
}
makeNoice();*/

/*const roundTo = function(num, steps) {
    let remainder = num % steps;
    return num - remainder + ((remainder < steps / 2) ? 0 : steps);
}
console.log(roundTo(25, 10));*/


// Declaration notation
/*console.log(`the future says: ${future()}`);
function future() {
    return "hello, from future!";
}*/


//Arrow functions
/*const square1 = (x) => {return x * x;}
const square2 = x => x * x;*/


//the call-stack
/*function fn() {
    console.log("hello");
}
fn();
console.log("world");*/

/*function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + "came first!");*/


//optional arguments
/*function square(x) {return x * x;}
console.log(square(5, "hello", 3.14));*/

/*function multiply(n=1, x) {return x * n;}
console.log(multiply());

function multiply2(n=1, x=3) {return x * n;}
console.log(multiply2());*/


// Closure
/*function wrapValue(x) {
    let local = x;
    return () => local;
} 
let wrap = wrapValue(5);
console.log(wrap);
console.log(wrap());*/

/*function twice(x = 2) {
    return n => x * n;
}

let multiply = twice();
console.log(multiply(5));*/


// Recursion
/*function power(base, exponent) {
    if (exponent == 0) return 1;
    return base * power(base, exponent - 1);
}
console.log(power(2, 4));*/

/*function findSolution(n) {
    function find(result = 1, path = "1") {
        if(result == n) return path;
        if(result > n) return null;
        return find(result + 5, `(${path} + 5)`) ?? find(result * 3, `(${path} * 3)`);
    }
    return find();
}
console.log(findSolution(3));*/


// Growing Functions
/*function printFarmInventory(cows, chickens) {

    let cowString = String(cows);
    let chickenString = String(chickens);

    while (cowString.length < 3) cowString = "0" + cowString;
    while (chickenString.length < 3) chickenString = "0" + chickenString;

    console.log(`${cowString} cows`);
    console.log(`${chickenString} chickens`);

}

printFarmInventory(7, 11);*/

function zeroPad(number) {
    let string = String(number);
    while(string.length < 3) string = "0" + string;
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows)} cows`);
    console.log(`${zeroPad(chickens)} chickens`);
    console.log(`${zeroPad(pigs)} pigs`);
}

printFarmInventory(7, 11, 3);
