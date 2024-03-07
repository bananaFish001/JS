// let newArr = [1, 2, 3, 4, 5, 6]
for(let i = 0; i < 10; i++){
  // console.log(newArr[index]);
  const element = i;
  if(element == 4){
    console.log(`Hexagon is the bestagon!`)
  }
  console.log(element);
}
/*
for(let i = 0; i <= 10; i++){
  console.log(`Outer Loop: ${i}`);
  for(let j = 0; j <= 10; j++){
    console.log(`Inner Loop: ${j} and Outer Loop: ${i}`)
  }
}
*/
let myArray = ["Thorfinn", "Denji", "Musashi"]
for(let index = 0; index < myArray.length; index++){
  const element = myArray[index];
  console.log(element);
}

for(let index = 0; index <= 20; index++){
  if(index == 5){
    console.log(`5 detected`);
    // break
    continue
  }
  console.log(`Value of index is ${index}`);
}
