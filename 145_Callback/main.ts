// Question 145: Create a function that accepts a callback and invokes it with some arguments ?

// Explain & TIP: Callbacks are functions passed as arguments to another function.
// This design pattern is very common in JavaScript for asynchronous operations,
// event listeners, or to customize the behavior of a function with custom actions.

// Answer 145:

function callback (call_back:(para1:number , para2:number) => any , para1:number , para2:number) {call_back(para1,para2)}

let CB = (num1:number , num2:number) => {console.log(num1 * num2)}

callback(CB,2,2) // outputs 4 because it multiplies two arguments
