// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3 ?

// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder.
// A number divisible by both 2 and 3 without a remainder is also divisible by 6

let num:number = 6;
if(num % 2 === 0 && num % 3 === 0) {console.log("\n",num,"is divisible by 2 & 3")}
else{console.log(num,"is not divisible by 2 & 3")}