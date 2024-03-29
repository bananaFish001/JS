// Symbol is used to make a variable unique amd thus id and anotherOne are not the same.
let id = Symbol('123')
let anotherOne = Symbol('123')

console.log(id)
console.log(anotherOne)
console.log(id == anotherOne)

// Representing bigNumbers
const bigNumbers = 12345678910111213n // Adding n at the end of a big number to make it's datatype vigInt
console.log(bigNumbers)

// Representing arrays:,
const mangas = ['Chainsaw Man', 'Vagabond', 'Berserk']

let myObj = {
  name: "Denji",
  age: 16,
  job: "Devil Hunter"
}

console.log(mangas[1])
console.log(myObj.name)


const myFunction = function(){
  console.log('Chainsaw Man is the Goooaaaat')
}

myFunction();

console.log(typeof bigNumbers)

let years = 45
console.log(typeof years)

// Stack(Primitive) and Heap(Non-Primitive) memory 
// Example of Stack(Primitive) memory.
// Changes made here are not refleced in original storage like myManga.
let myManga = "Vinland Saga"
anotherManga = myManga
anotherManga = "HolyLand"

console.log(myManga)
console.log(anotherManga)

// Example of Heap or Non-Primitive memory.
// The changes taking place here are refleced in the original storage like userOne object

let userOne = {
  name: "Miyamoto",
  eMail: "musashi@gmail.com"
}

let userTwo = userOne

userTwo.eMail = "greatest@gmail.com"

console.log(userOne.eMail)
