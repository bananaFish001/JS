const name = "Denji"
const repoCount = 12

//This is old way of writing not used now-a-days.
//console.log(name + repoCount + " value")
//console.log(`${name}${repoCount} value`) // Using backticks is better as it let's us use string interpolationa

// Declaring string:
const gameName = new String("Doctor John Elden Ring")
/*
console.log(gameName) // Each symbol in string behaves as key value pair and has a number associated with it.
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(8))
console.log(gameName.indexOf('t'))
*/
const newString = gameName.substring(0, 4)
//console.log(newString)

const anotherString = gameName.slice(0, 4);
console.log(anotherString)
console.log(gameName.slice(-9, 5))

const str = new String("               Sekiro")
console.log(str)
console.log(str.trim())


const url = "https://rajsingh.com/shekhar%20sekijo"
console.log(url.replace('%20', '-'))
console.log(url.includes('com'))

// Splitting and convrting string to an array
console.log(gameName.split(' '))
