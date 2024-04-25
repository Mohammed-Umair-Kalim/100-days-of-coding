"use strict";
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection ?
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called
// when a Promise is rejected. Together,
// they provide a powerful and readable way to handle asynchronous success and error scenarios.
// Answer 143:
let then_catch = new Promise((resolve, reject) => {
    let bool = true;
    if (bool) {
        resolve("Resolved!");
    }
    else {
        reject(new Error("Rejected!"));
    }
});
then_catch
    .then((final_output1) => console.log(final_output1))
    .catch((final_output2) => console.log(final_output2));
