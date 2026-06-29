const getTotalBill = (itemCount : number[], itemPrice : number[]) : number => {
  let total = 0;

  if (itemCount && itemPrice) for (let i = 0; i < itemCount.length; i++) total += (itemCount[i] * itemPrice[i]);

  return total;
}

// console.log(`Total Bill: ${getTotalBill([1, 2, 3], [50, 76, 24])}`);

function sayHello(name : string) : void {
  console.log(`Hello ${name}!`);
}

// sayHello("Guru");

const countSum = (arr ?: number[]) : number => {

  let sum = 0;

  if (arr) for (let num of arr) sum += num;

  return (sum == 0) ? -1 : sum;

}

console.log(countSum([1, 2, 3, 4, 5]));
console.log(countSum([]));
console.log(countSum());