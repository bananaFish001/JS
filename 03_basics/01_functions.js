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
  // console.log("Hello")
}

//const result = addNums(3,4);
// console.log(result) // It will print undefined cuz function is not returning anything

function userLogin(user ="Sammy"){ // Sammy here is a default value
  if(!user){
    console.log("Please enter some value")
    return
  }
  return `${user} just logged in!`
}

// console.log(userLogin()) // If you don't pass in any value it will return undefined


function calculateCartPrice(...num1){ // 
  return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500));

const userName = {
  username : "Kyuren",
  price: "free"
}

function userHandle(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// userHandle(userName);
userHandle({
  username: "PulPul",
  price: "Still Free"
})

const newArray = [200, 300, 600]

function returnArray(getArray){
  return getArray[2]
}

// console.log(returnArray(newArray))
console.log(returnArray([100, 400, 800]))
