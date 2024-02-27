console.log(2 == 1)
console.log(2 != 1)
console.log(2 > 1)
console.log(2 < 1)
console.log(2 >= 1)
console.log(2 <= 1)

/* We can compare two completly different datatypes but,
it is not encouraged to do so as it may give some unexpected/unpredicable result result.
*/

console.log("2" > 1)
console.log("02" > 1)

// Some of the confusing aspects of comparing two different datatypes.
console.log(null > 0) // output = false
console.log(null == 0) // output = false
console.log(null >= 0) // output = true

// Last output is unexpected as comparision operators are different from equality check operators.

// Strict check (comparing both value and datatypes)
console.log("2" === 2) // output = false
