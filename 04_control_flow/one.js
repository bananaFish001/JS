const temperature = 27

if(temperature < 50){
  console.log("temperature is less than 50")
}else{
  console.log("temperature is more than 50")
}

const score = 500
/*
if(score > 100){
  const power = "fly"
  console.log(`User can: ${power}`)
}
*/
const balance = 1000
// if(balance > 500) console.log("test-1 done"), console.log("test-2 done");

if(balance < 500){
  console.log("less than 500")
}else if(balance < 750){
  console.log("less than 750")
}else if(balance < 900){
  console.log("less than 900")
}else{
  console.log("less than 1200")
}

const hasLoggedIn = true
const hasDebitCard = true
const googleLogIn = false
const emailLogIn = true
if(hasLoggedIn && hasDebitCard){
  console.log("you can buy the course");
}

if(googleLogIn || emailLogIn){
  console.log("User has logged in.")
}
