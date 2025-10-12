//displaying numbers 0 to 9
// for(let i=0;i<10;i++){
//     console.log(i);
// }


//displaying array elements
// let array=[10,20,30,40,50,60];
// array.forEach(element => {
//     console.log(element);
// });


//displaying string elements
// let str="hello world";
// for (const element of str) {
//     console.log(element);
// }



//pattern
// for(let i=0;i<7;i++){
//     let str2="";
//     for(let j=0;j<=i;j++){
//         str2+="#";
//     }
//     console.log(str2);
// }


//fizzbuzz
// let number=11;

// if(number%5==0 && number%3==0){
//     console.log("fizzbuzz");
// }else if(number%3==0){
//     console.log("fizz");
// }else if(number%5==0){
//     console.log("buzz");
// }else{
//     console.log("no fizz, no buzz");
// }


//chessboard
for(let i=0;i<8;i++){
    let str="";
    for(let j=0;j<8;j++){
        if(i%2==0){
            str+="  #";
        }else{
            str+="#  ";
        }
    }
    console.log(str);
}