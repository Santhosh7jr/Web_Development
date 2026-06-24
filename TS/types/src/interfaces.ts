interface result {
  outcome : "Passed" | "Failed";
}

class ResultPortal implements result {
  outcome: "Passed" | "Failed" = "Failed";
}

type strResult = {result : "Passed" | "Failed"};
type numResult = {cgpa : number};

const finalResult : strResult & numResult = {
  result : "Passed",
  cgpa : 9.7
}

console.log(finalResult);