// Flattening
/*const reducee = (arr, callback) => {

    let result = [];

    for (let row of arr) result.push(callback(row));

    return result;

}

let arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [11, 12, 13, 14], [15, 16, 17, 18, 19]];
console.log(reducee(arr, row => {

    let result = 0;

    for (let num of row) result += num;

    return result;

}));*/


// Your own loop
/*const myOwnLoop = (value, testFn, updateFn, bodyFn) => {

    for (let i = 0; testFn(i, value); i = updateFn(i)) bodyFn(i);

}

myOwnLoop(5, (val1, val2) => val1 < val2, n => n + 1, console.log);*/


// Everything
const everyLoop = (arr, callback) => {

    for (let i = 0; i < arr.length; i++) {
        if (! callback(i)) return false;
    }

    return true;

}

console.log(everyLoop([1, 2, 3, 4, 5], n => n < 10));
console.log([1, 2, 3, 4, 5].every(n => n < 10));
