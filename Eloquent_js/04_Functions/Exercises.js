// Minimum
/*const minimum = (x, y) => {
    if (x < y) return x; 
    return y;
}
console.log(minimum(4, 3.9));*/


// Recursion
/*const isEven = n => {
    if (n == 0) return true;
    if (n == 1) return false;
    return (n < 0) ? isEven(n + 2) : isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));*/


// Bean Counting 
/*const countB = str => {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'B') count++;
    }

    return count;

}
console.log(countB("helloBB"));*/

const countChar = (str, ch) => {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) count++;
    }

    return count;

}
console.log(countChar("hello", 'l'));
