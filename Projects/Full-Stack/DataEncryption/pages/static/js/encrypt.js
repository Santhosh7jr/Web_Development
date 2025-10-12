let contentBox = document.querySelector(".content-box");
let submitButton = document.querySelector(".submit-button");
let asciiArray = [];
let isConverted = false;

contentBox.addEventListener("click", () => {
    contentBox.value = "";
}, {once : true});

submitButton.addEventListener('click',() => {

    if (contentBox.value.length == 0) {
        alert("sorry, No Data Found!");  
        return;
    } 

    if(submitButton.innerText != "Encrypt") {
        
        isConverted = true;

        contentBox.value = convertToBinaryArray(asciiArray);

    } else{

        let data = contentBox.value;

        contentBox.value = encryptData(data);
        submitButton.innerText = "Convert to Binary Array";

    }

    if (isConverted) {
        submitButton.remove();
        return;
    }
    
});

const encryptData = (data) => {

    let randomNumber = Math.round(Math.random()*100) ;
    let result = `${String.fromCharCode(randomNumber ^ data.length)}`;

    asciiArray.push(result.charCodeAt(0));

    for (let char of data) {
        result += String.fromCharCode(char.charCodeAt(0) ^ randomNumber);
        asciiArray.push(char.charCodeAt(0) ^ randomNumber);
    }

    console.log(asciiArray);
    return result;

}

const convertToBinaryArray = (asciiArray) => {

    let binaryStringArray = [];

    for (let value of asciiArray) {
        binaryStringArray.push(convertToBinary(value));
    }

    console.log(binaryStringArray);
    return binaryStringArray;

}

const convertToBinary = (num) => {

    let binaryString = "";

    while (num > 0) {
        binaryString += (num & 1);
        num >>= 1;
    }

    return binaryString;

}