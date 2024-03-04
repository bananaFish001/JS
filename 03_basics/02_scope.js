let a = 300

if(true){
  let a = 10
  const b = 20
  var c = 30
  console.log(`Inner a: ${a}`)
}

console.log(a)
// console.log(b)
// console.log(c) // only c will give output cuz var can be accessed out of scope
