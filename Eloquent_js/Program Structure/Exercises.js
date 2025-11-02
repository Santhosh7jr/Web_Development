//First Exercise: Looping a triangle
for (let i = 0; i < 5; i++) {

    let hash = "";

    for (let j = 0; j <= i; j++) {
        hash += "# ";
    }

    console.log(hash);

}

//Second Exercise: Fizz-Buzz
for (let i = 0; i <= 100; i++) {
    if(i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

//Third Exercise: Chessboard
for (let i = 0; i < 8; i++) {

    let row = "";

    for (let j = 0; j < 8; j++) {
        if(i % 2 == 0) row += " #";
        else row += "# ";
    }

    console.log(row);

}