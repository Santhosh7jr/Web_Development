/*function getResult(result : string | number) {

  if (typeof result === 'string') return `you have ${result}`;
  return `your cgpa is: ${result}`;

}

console.log(getResult("Passed"));
console.log(getResult(9.7));*/

/*const getResult = (result? : number) => {
  if (result) return `Your CGPA is: ${result}`;
  return `You have'nt provided any data!`;
}

console.log(getResult());
console.log(getResult(9.5));*/

/*const getResult = (result : "Passed" | "Failed" | number) => {
  if (typeof result === "string") {
    return `You have ${result}`;
  }
  return `Your CGPA is: ${result}`;
}

console.log(getResult("Failed"));
console.log(getResult(9.4));*/

/*class StringResult {
  result() {
    return `You Have Passed`;
  }
}

class NumberResult {
  result() {
    return `Your CGPA is: ${9.8}`;
  }
}

const getResult = (result : StringResult | NumberResult) => {
  if (result instanceof StringResult) return result.result();
  return `We can't provide your CGPA directly!`;
}

console.log(getResult(new NumberResult()));
console.log(getResult(new StringResult()));*/

type Result = {
  verdict : string;
  CGPA : number;
}

const getResult = (result : any) : result is Result => {
  if (typeof result === "object" && result !== null) {
    if (typeof result.verdict === 'string' && typeof result.CGPA === 'number') return result;
  }

  result.verdict = null;
  result.CGPA = undefined;

  return result;

} 

const result1 : Result = { 
  verdict : "Failed",
  CGPA : ""
}

const result2 : Result = { 
  verdict : "Passed",
  CGPA : 9.9
}

console.log(getResult(result1));
console.log(getResult(result2));