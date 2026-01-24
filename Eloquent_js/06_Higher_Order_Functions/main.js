//higher order functions
/*function repeat(n, action) {
    for (let i = 0; i < n; i++) action(i);
}

// repeat(5, console.log);

let labels = [];
repeat(5, i => {
    labels.push(`unit ${i + 1}`);
});
console.log(labels);*/


/*function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(18));
console.log(greaterThan(10)(18));*/


/*
function noicy(f) {

    return (...args) => {
        return f(...args);
    }

}

console.log(noicy(Math.min)(5, 8, 6));
console.log(noicy(Math.min));*/


/*function repeat(n, func) {
    for (let i = 0; i < n; i++) func(i);
}

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
   unless(n % 2 === 1, () => {
      console.log(n, " is Even");
   });
});*/


// ['a', 'b', 'c'].forEach(l => console.log(l));


/*// Mapping, Filtering and reducing Arrays
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.filter(n => n < 5));
console.log(arr.map(n => n * n));
console.log(arr.reduce((a, b) => a+b));*/


/*function filterr(callback, arr) {

    let result = [];

    for (let element of arr) if (callback(element)) result.push(element);

    return result;

}

function mapp(callback, arr) {

    for (let i = 0; i < arr.length; i++) arr[i] = callback(arr[i]);

    return arr;

}

function reducee(callback, arr) {

    let result = 0;

    for (let element of arr) result = callback(result, element);

    return result;

}

console.log(filterr(n => n > 10, [1, 20, 3, 40, 5, 60, 7, 80]));
console.log(mapp(n => n * n, [1, 20, 3, 40, 5, 60, 7, 80]));
console.log((reducee((a, b) => a+b, [1, 2, 3, 4, 5])));*/


// Recognizing text


