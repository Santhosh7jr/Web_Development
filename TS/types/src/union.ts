let data : number | string = 10; //Union
data = "10M";

let result : "pass" | "fail" = "fail";
result = "pass";

let arr : string[] = ["10", "20", "30", "40"];

let value : string | undefined;

for (let str of arr) {

  if (str === "20") {
    value = str;
    break;
  }

}

console.log(value);
console.log(arr);