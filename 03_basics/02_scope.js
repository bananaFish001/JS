let a = 300

if(true){
  let a = 10
  const b = 20
  var c = 30
  //console.log(`Inner a: ${a}`)
}

//console.log(a)
// console.log(b)
// console.log(c) // only c will give output cuz var can be accessed out of scope


// Nested scope
function one(){
  const userName = "kyuren"


  function two(){ // This function can access the values from it's parent function but not vice versa
    const website = "Uthube"
    console.log(userName) 
  }
  //console.log(website)

  two()
}

one()

if(true){
  const newUser = "PulPul"
  if(newUser === "PulPul"){
    const website = "only fans"
    console.log(newUser +" " + website)
  }
}
// ++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
  return num + 1
}

addTwo(5) // Cannot be accessed by addTwo function
function addTwo(num){
  return num + 2
}
