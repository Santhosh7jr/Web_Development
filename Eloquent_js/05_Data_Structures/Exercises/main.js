// the sum of a range 
/*const range = (start, stop, step = 1) => {

    let array = [];
    let flag = true;

    if (start > stop && step === 1) step = -1;
    if (step == 0) return array;
    if ((start < stop && step < 0) || (start > stop && step > 0)) return array;
    if (step < 0) flag = false;

    if (flag) {
        for (let i = start; i <= stop; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= stop; i += step) {
            array.push(i);
        }
    }
    
    return array;

}

const sum = (array) => {

    let result = 0;

    for (let num of array) result += num;

    return result;

}

console.log(sum(range(1, 10)));*/


// Reversing an array

/*const isEmpty = (array) => {
    return (array.length === 0) ? true : false;
};

const reverseArray = (array) => {

    let newArray = [];

    while (! isEmpty(array)) newArray.push(array.pop());

    return newArray;

}

const reverseArrayInPlace = (array) => {

    let end = array.length - 1;

    for (let start = 0; start < end; start++, end--) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
    }

    return array;

};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));*/


//A List
const arrayToList = (array, idx = 1, list = {value : (array.length > 0) ? array[0] : null}, next = list) => {

    if (idx == array.length) return list;

    next.rest = {value : array[idx], rest : null};

    arrayToList(array, idx + 1, list, next.rest);

    return list;

};

const listToArray = (list) => {

    let array = [];
    let node = list;
    array.push(node.value);

    while (node.rest != null) {
        node = node.rest;
        array.push(node.value);
    }

    return array;

};

let list = arrayToList([1, 2, 3, 4, 5, 6, 7]);
console.log(list);
let array = listToArray(list);
console.log(array);

console.log(listToArray(arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9])));