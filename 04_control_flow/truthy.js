const userEmail = [] // An array is truthy value
if(userEmail){
  console.log("Got user email");
}else{
  console.log("Don't have ")
}

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Everything else is truthy value

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log(`Object is empty`);
}

// Terniary Operator:
const coffeePrice = 2
coffeePrice > 2 ? console.log("Coffee is getting expensive") : console.log("Coffee is same as ever");

