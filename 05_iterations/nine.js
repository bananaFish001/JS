const nums = [1, 2, 3]
/*
const myTotal = nums.reduce(function(accumulator, currentValue){
  console.log(`Accumulator is ${accumulator} and CurrrentValue is ${currentValue}`);
  return accumulator + currentValue
}, 0) // 0 here denote the initial value of the accumulator
*/
const myTotal = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const newTotal = shoppingCart.reduce(function(acc, course) {
  return acc + course.price
}, 0)

console.log(newTotal)
