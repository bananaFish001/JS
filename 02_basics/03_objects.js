const mySym = Symbol("key1") // Declaration of a symbol

const jsUser = {
  name: "Musashi",
  "full name": "Miyamoto Musashi", // This object cannot be accessed by the '.' operator.
  age: "25",
  [mySym]: "mySym1", // Square brackets are used to denote it as symbol
  location: "kyoto",
  email: "musashi@vagabond.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}
/*
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
*/
// Changing values of the objects within the symbol.
jsUser.email = "strongest@heaven.com"
//Object.freeze(jsUser)
jsUser.email = "musashi@swordSaint.com"
console.log(jsUser)

jsUser.greeting = (setTimeout(function(){
  console.log("Hello JS user");
}), 2000);

jsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greetingTwo());

// to access objects always use '.' operator unless it is not working then use square brackets
