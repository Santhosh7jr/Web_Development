// Bindings / Variables
/*let caught = 5 * 5;

let ten = 10;
console.log(ten * ten, "\n");

let mode = "light";
console.log(mode);
mode = "dark";
console.log(mode, "\n");

var name = "guru";
console.log(name, "\n");*/


//Built-in Function
/*console.log(Math.max(4, 2));
console.log(Math.min(2, 5) + 100);*/


//Control Flow
/*let theNumber = Number(prompt("Enter the number: "));
console.log("the number you have entered is: ", theNumber);*/


//Conditional Execution
/*let theNumber = Number(prompt("Enter the number: "));
if (! Number.isNaN(theNumber)) {
    console.log("the number you have entered is: ", theNumber);
}else {
    console.log("you aren't entered the number. your input is not a number");
}*/

// if (1 + 2 == 2) console.log(true); else console.log(false);

/*let theNumber = Number(prompt("enter the number: "))

if (theNumber == 100) {
    console.log("the number is 100");
} else if (theNumber < 100) {
    console.log("the number is less than 100");
} else {
    console.log("the number is greater than 100");
}*/


// While and Do-While loops
/*let number = 0;
while(number <= 12) {
    console.log(number);
    number += 2;
}*/

/*let number = 1;
let count = 0;

while(count < 10) {
    number *= 2;
    count++;
}
console.log(number);
console.log(2 ** 10);*/

/*let yourName;
do {
    yourName = prompt("Enter your Name: ");
} while(! yourName);
console.log("your name is: ", yourName);*/


// For loops
// for (let number = 0; number <= 12; number++) console.log(number);

/*let result = 1;
for (let number = 0; number < 10; number++) result *= 2;
console.log(result);*/

/*for (let current = 20; ; current++) {
    if (! (current % 7)) {
        console.log(current);
        break;
    }
}*/


//Switch statements
switch (prompt("how is the weather today: ")) {

    case "sunny" :
        console.log("dress lightly");
        break;
 
    case "rainy":
        console.log("don't forget to take an umbrella with you");
        break;

    case "snowy":
        console.log("dress heavily");
        break;

    case "cloudy":
        console.log("go outside");
        break;

    default:
        console.log("unknown weather type!");
        
}