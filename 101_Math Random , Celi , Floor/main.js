"use strict";
// Question 101: Generate a random integer between 1 and 10 ?
// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in
// combination with Math.floor() or Math.ceil() to ensure the result is an integer.
// Answer 101:
let randomNumber1 = Math.floor(Math.random() * 10 + 1);
let randomNumber2 = Math.ceil(Math.random() * 10);
console.log("\nRandom Number With Math Floor:", randomNumber1);
console.log("\nRandom Number With Math Celi:", randomNumber2);
