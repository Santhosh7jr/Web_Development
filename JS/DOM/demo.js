// Flattening

const reducee = (arr, callback) => {

    let result = [];

    for (let row of arr) result.push(callback(row));

    return result;

}

let arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9], [11, 12, 13, 14], [15, 16, 17, 18, 19]];
console.log(arr, row => {

    let result = 0;

    for (let num of row) result += num;

    return result;

});