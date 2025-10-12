let contentBox = document.querySelector(".content-box");
let submitButton = document.querySelector(".submit-button");
let isDecrypted = false;

contentBox.addEventListener("click", () => {
    contentBox.value = "";
}, {once : true});

submitButton.addEventListener('click', () => {

    if (contentBox.value == "") {
        alert("please first input the binary array");
        return;
    }

    if ((! /^[0-1]+(,[0-1]+)*$/.test(contentBox.value)) && (submitButton.innerText == "Convert to String")) {
        alert("the array format is wrong!");
        return;
    }

    if (submitButton.innerText == "Convert to String") {

        contentBox.value = convertToString(contentBox.value);
        submitButton.innerText = "Decrypt";

    } else {

        isDecrypted = true;
        contentBox.value = decrypt(contentBox.value);

    }

    if (isDecrypted) {
        submitButton.remove();
    }

});

const convertToString = (array) => {
    
    let binArr = array.split(',');
    let result = "";

    for (let element of binArr) {
        result += String.fromCharCode(convert(element));
    }

    return result;

}

const convert = (str) => {

    let power = 0;
    let result = 0;

    for (let i = 0; i < str.length ; i++) {
        if(str.charAt(i) == '1') {
            result += Math.pow(2, power);
        }
        power++;
    }

    return result;

}

const decrypt = (str) => {

    let randomNumber =str.charAt(0).charCodeAt(0) ^ (str.length - 1);
    let result = "";

    for (let i = 1; i < str.length; i++) {
        result += String.fromCharCode(str.charAt(i).charCodeAt(0) ^ randomNumber);
    }

    return result;
    
}