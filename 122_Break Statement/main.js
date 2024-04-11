"use strict";
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5 ?
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: The break statement terminates the loop immediately. 
// This is useful for stopping a loop when a certain condition is met,
// even if the loop's original termination condition hasn't been reached yet
// Answer 122:
let num = 10;
console.log("\n");
while (num >= 1) {
    console.log(num);
    if (num === 5) {
        break;
    }
    num--;
}
