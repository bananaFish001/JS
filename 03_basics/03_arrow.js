const user = {
  username: "maqia",
  price: 999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to the city.`),
    console.log(this) // 'this' can only be used inside of an object
  }
}

user.welcomeMessage()
user.username = "Ariel"
user.welcomeMessage()
console.log(this)
/*
function coffee(){
  let username = "Shakuni"
  console.log(this.username) 
}

coffee()
*/

const coffee = () => {
  let username = "Bhism";
  console.log(this)
}

coffee()

//const addTwoNums = (num1, num2) => num1 + num2
const addTwoNums = (num1, num2) => (num1 + num2) // Wrapping what function will return is done automatically or you can do it here.   

console.log(addTwoNums(7, 11))
