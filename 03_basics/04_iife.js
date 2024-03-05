// Immediately Invoked Funtion Expressions (IIFE)
(function coffee(){ // named iife
  console.log("DB CONNECTED")
})(); // We must add ';' at the end so that function knows where to end otherwise it will never end.

((name) => { // Unnamed iife
  console.log("DB2 CONNECTED", name)
})('john')
