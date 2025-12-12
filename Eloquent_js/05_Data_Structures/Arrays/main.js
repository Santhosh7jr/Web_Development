// Intro 
/*let array = [2, 3, 5, 6, 7, 11];
console.log(array[2]);
console.log(array[0]);
console.log(array[5 - 4]);*/

// Methods
/*let str = "doh";
console.log(typeof str.toUpperCase);
console.log(str.toUpperCase());*/

/*let numbers = [1, 4, 5, 7, 8, 3];
console.log(typeof numbers);

console.log(numbers.push(30));
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);*/


/*let toDoList = [];

const remember = task => toDoList.push(task);
const getTask = () => { return toDoList.shift()};
const rememberUgrently = task => toDoList.unshift(task);

remember("wash dishes");
console.log(toDoList);
remember("clean the room");
console.log(toDoList);
remember("do homework");
console.log(toDoList);

console.log(getTask());
console.log(toDoList);

rememberUgrently("cook food");
console.log(toDoList);*/


/*let array = [1, 2, 4, 5, 3, 2, 2, 9, 8, 1];
console.log(array);
console.log(array.indexOf(2));
console.log(array.lastIndexOf(2));
console.log(array.indexOf(2, 4));*/


/*let array = [1, 4, 6, 7, 4, 3, 5];
console.log(array);
console.log(array.slice(1, 4));
console.log(array.slice(1));
console.log(array.slice());*/


/*let arr = [1, 4, 7, 9, 5, 3];
console.log(arr);
console.log(arr.splice(1, 3));
console.log(arr);

console.log(arr.splice(1));
console.log(arr);*/


/*const removeElement = (array, index) => {
    return array.slice(0, index).concat(array.slice(index + 1));
}

let array = ['a', 'b', 'c', 'd', 'e'];
console.log(array);
console.log(removeElement(array, 2));*/


// Rest parameter
/*const max = (...parameters) => {

    let max = -Infinity;

    for (let num of parameters) {
        if (num > max) max = num;
    }

    return max;

}

console.log(max(2, 3, 8, 7, 5));
console.log(max(...[1, 2, 7, 9, 8, 5, 4]));*/


// Destructuring
/*function fn([n0, n1]) {
    return n0 + n1;
}

console.log(fn([5, 5]));*/