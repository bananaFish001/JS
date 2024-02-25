let score = NaN

console.log(typeof score)
console.log((typeof(score)))

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))

// Type Conversion:
// "33" to number equals 33
// "33abc" to number equals NaN
// "true" to number equals 1 and false to number equals 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

let isHere = ""
let booleanIsHere = Boolean(isHere)

console.log(booleanIsHere)


// ***********OPERATIONS***********

let value = 3
let negValue = -value

console.log(negValue)


console.log(2+2)
console.log(2-2)
console.log(2**3)
console.log(2*3)
console.log(2%3)
console.log(2/3)



// String OPERATIONS

let str1 = "Raj"
let str2 = "Singh"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")

// prefix and postfix

let x = 3
const y = x++
console.log(`x: ${x}, y: ${y}`)

