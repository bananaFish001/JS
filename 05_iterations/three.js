const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
  console.log(val)
}

const greeting = "Hello World"

for(const greet of greeting){
  console.log(`Each character is ${greet}`)
}

// Maps = Each key value pair is unique
const map1 = new Map()
map1.set('IN', "India")
map1.set('TV', "Tuvalu")
map1.set('FR', "France")

// console.log(map1)

for (const [key, value] of map1) {
  console.log(`${key} :- ${value}`)
}

const myObject = {
  game1: "Nier:Automata",
  game2: "Elden Ring"
}

for (const [key, value] of myObject) {
  console.log(`${key} :- ${value}`); // Objects are not iterable with forof loop, there are other methods of doing so
}

