const myObject = {
  py: "Python",
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby"
}

for (const key in myObject) {
  console.log(`${key} is key for ${myObject[key]}`)
}

let arr = ["chainsaw man", "vagabond", "holyland", "monster", "kingdom"]

for (const index in arr) {
  console.log(index) // It will print the keys of the array
}

for(const index in arr){
  console.log(arr[index])
}
