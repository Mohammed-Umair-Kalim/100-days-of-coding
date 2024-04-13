// Question 127: Convert a traditional function expression to an arrow function ?

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions.
// They don't have their own bindings to this or super, and should not be used as methods.

// Answer 127:

//Traditional Function:
function ab (a:number , b:number){console.log("\nWith traditional function: " , a+b)}
ab(5,5)

// Arrow Function:
let AB = (A:number , B:number) => {console.log("\nWith arrow function: " , A+B)}
AB(5,5)