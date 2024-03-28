function arrayDiff(a, b){
  const result = []
  for(let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
      result.push(a[i])
    }
  }
  return result
}

console.log(arrayDiff([1, 2], [1])); // Output: [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // Output: [1, 3]
