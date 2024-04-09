"use strict";
// Question 117: Implement a switch statement that evaluates an expression and uses the default case
// if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of
// the other case labels match the expression's value.
// Answer 117:
let laptop = "";
switch (laptop) {
    case "Dell":
        console.log("Dell Laptop");
        break;
    case "Hp":
        console.log("Hp Laptop");
        break;
    default: console.log("\nLenovo Not Avaliable");
}
