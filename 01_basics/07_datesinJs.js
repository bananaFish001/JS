let myDate = new Date()
/*
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
*/
// How to create a date
//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 7)
let myCreatedDate = new Date("01-04-2005")
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
/*
console.log(myTimeStamp) // This will give value in millseconds
console.log(myCreatedDate.getTime())
console.log(Math.round(myTimeStamp/1000))
*/

let newDate = new Date
/*
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
*/
console.log(newDate.toLocaleString('default',{
  weekday: "long"
}))
