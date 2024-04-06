"use strict";
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM ?
// Explain & TIP: You can get the current hour using the Date object and its getHours() method.
// Remember, hours are in 24-hour format, so 12 PM is 12.
// Answer 109:
let current_time = new Date().getHours();
if (current_time < 12) {
    console.log("\nGood Morning!");
}
else {
    console.log("\nGood Night!");
}
console.log("Current Time:", current_time, "(Time is in 24 format)");
