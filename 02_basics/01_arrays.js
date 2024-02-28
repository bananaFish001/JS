const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Abdul Kalam", "Sarabhai"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0])

// Array methods:
/*
myArr.push(6) // push() is a method used to add elements at the end of an array;
myArr.push(7)

myArr.pop() // pop() is a method for array to remove last array
*/

//myArr.unshift(9) // method adds an element at the start of the array by shifting the existing elements;
//myArr.shift() // method deletes the element at the start of the array;
/*
console.log(myArr.includes(9))
console.log(myArr.indexOf(98))
console.log(myArr)
*/
/*
const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr)
*/

// slice and splice ;

console.log("A: ",  myArr)

const myNewArray = myArr.slice(1, 3)
console.log("After slicing", myNewArray)

console.log("B", myArr)


const myNewArray2 = myArr.splice(1, 3)
console.log("After splicing", myNewArray2)

console.log("Resultant array after slice operation: ", myNewArray)
console.log("Resultant array after splice operation: ", myNewArray2)
