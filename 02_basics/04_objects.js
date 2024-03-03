// Singleton Object
// const twitterUser = new Object()

const twitterUser = {} // non-singleton object

twitterUser.id = "123abc"
twitterUser.name = "Titus Andronicus"
twitterUser.isLoggedIn = false

console.log(twitterUser)
console.log(Object.keys(twitterUser))
console.log(Object.values(twitterUser))
console.log(Object.entries(twitterUser))
console.log(twitterUser.hasOwnProperty('isLoggedIn'))


const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userLocation: {
      city: "NewYork",
      country: "Finland"
    }
  }
}

//console.log(regularUser.fullName.userLocation.country)
//combing objects:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4)

const user = [
  {
    id: 1,
    email: "a@gmail.com"
  },
  {
    id: 2,
    email: "r@gmail.com"
  },
  {
    id: 3,
    email: "k@gmail.com"
  }
]

//console.log(user[1].email)
