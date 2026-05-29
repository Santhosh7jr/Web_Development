import React from "react";
import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

console.log(numbers.map((num) => {
    return num * 2;
}));

console.log(numbers.filter((num) => {
    return num < 10;
}));

console.log(numbers.reduce((prev, curr) => {
    return prev + curr;
}));

console.log(numbers.find(
    (val) => {
        return val > 10;
    }
));

console.log(numbers.findIndex((val) => {
    return val > 10;
}));

let str = "";

console.log(emojipedia.map((elem) => {
    str += elem.meaning;

    if (str.length >= 100) {
        let newStr = str.substring(0, 100);
        str = str.substring(100);
        return newStr;
    } 

    return str;

}));