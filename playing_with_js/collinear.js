function collinearity( x1,y1, x2,y2 ){
  return x2*y1 == y2*x1
}


let result = collinearity(4,0,11,0);
console.log(result)
