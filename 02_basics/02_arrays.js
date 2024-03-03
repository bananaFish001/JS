const newGen = ["chainsaw man", "jujutsu kaisen", "hell's paradise"]
const oldGen = ["one piece", "naruto", "bleach"]

/*push adds one or more elements at the end of an array and returns the modified array.

newGen.push(oldGen)
console.log(newGen)
console.log(newGen[3])
*/

/*concat elements of one string to the calling string and returns a new array.


const allGen = newGen.concat(oldGen)
console.log(allGen)
*/

// Using spread(...) operator to join to arrays.
//const allGen = [...newGen, ...oldGen]
//console.log(allGen)

const weirdArray = [1, 2, 3, [4, 5, 6], 8, [9, 7, [4, 5]]]
const nonWeirdArray = weirdArray.flat(Infinity)
console.log("hello",nonWeirdArray)


console.log(Array.isArray("RajShekharSingh")) // Tells us that string insde is not an array which is obvious
console.log(Array.from("RajShekharSingh")) // from is an array method to convert iterable elements in an array
console.log(Array.from({name: "RajShekharSingh"})) // returns an empty array which is interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // of is array method to make distinct elements into an array
