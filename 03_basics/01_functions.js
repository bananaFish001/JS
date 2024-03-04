function sayMyName(){
  console.log("B")
  console.log("A") 
  console.log("N") 
  console.log("A") 
  console.log("N") 
  console.log("A") 
}

sayMyName()

function addNums(num1, num2){
  //console.log(num1 + num2)
  let result = num1 + num2
  return result
  console.log("Hello")
}

const result = addNums(3,4);
// console.log(result) // It will print undefined cuz function is not returning anything

function userLogin(user ="Sammy"){ // Sammy here is a default value
  if(!user){
    console.log("Please enter some value")
    return
  }
  return `${user} just logged in!`
}

console.log(userLogin()) // If you don't pass in any value it will return undefined

