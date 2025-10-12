// function fn(){
//     console.log("hello world!");
// }

// fn();

// function fn2(a,b){
//     return a+b;
// }

// console.log(fn2(5,5));

// const fun= function(){
//     console.log("hello world");
// }

// fun()

//finding squares
// function square(x){
//     return x*x;
// }

// const Square=(x) =>{
//     return x*x;
// }

// console.log(`the square of 5 is (Normal function): ${square(5)}`)
// console.log(`the square of 6 is (Arrow function): ${Square(6)}`)

// function wrapValue(n) {
// let local = n;
// return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// // → 1
// console.log(wrap2());
// → 2

// function multiplier(factor) {
//   return (number) => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));
// // → 10


//find min
// const minimum=(x,y) =>{
//     return Math.min(x,y);
// }

// console.log(minimum(9,9));


//get exponent
// const findPower=(base,exponent) =>{
//     if(exponent==0){
//         return 1;
//     }
//     return base* findPower(base,exponent-1);
// }

// console.log(findPower(2,3));


//higher order functions
const sum=(x,y) =>{
    return x+y;
}

const difference=(x,y) =>{
    return x-y;
}

const product=(x,y) =>{
    return x*y;
}

const quotient=(x,y) =>{
    return x/y;
}

const calculate=(x,y,operation)=>{
    return operation(x,y);
}

console.log(`sum of 5 and 5 is: ${calculate(5,5,sum)}`);
console.log(`difference of 5 and 5 is: ${calculate(5,5,difference)}`);
console.log(`product of 5 and 5 is: ${calculate(5,5,product)}`);
console.log(`quotient of 5 and 5 is: ${calculate(5,5,quotient)}`);
