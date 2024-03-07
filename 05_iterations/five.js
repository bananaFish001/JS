const coding = ["js", "dart", "python", "cpp", "java"]

coding.forEach(function (langs){ // For each loop syntax
  // console.log(langs)
})

// Same code as above using arrow function 
/*
coding.forEach((langs) => {
  console.log(langs)
})
*/
/*
function printMe(item){
  console.log(item)
}

coding.forEach(printMe)
*/

coding.forEach((langs, serialNum, names_in_array) => {
  console.log(langs, serialNum, names_in_array)
})

const myCoding = [
  {
    langName: "C++",
    langFileName: "cpp"
  },
  {
    langName: "python",
    langFileName: "py"
  },
  {
    langName: "JavaScript",
    langFileName: "js"
  }
]

myCoding.forEach((items) => {
  console.log(items.langName)
} )
