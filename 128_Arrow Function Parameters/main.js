"use strict";
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters ?
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters,
// you enclose them in parentheses
// Answer 128:
let para = (...parameter) => { console.log(parameter.reduce((a, b) => a * b)); };
para(4, 2, 6); // Outputs 48
