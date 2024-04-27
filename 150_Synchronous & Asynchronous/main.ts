// Question 150: Describe how asynchronous callbacks differ from synchronous code execution ?

// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations,
// or set timers without blocking the main thread,
// enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially,
// blocking further execution until the current operation completes.

// Answer 150:

// Synchronous example

let num:number = 7;

for(let i = 0; i < num; i++){console.log(`Synchronous Example: ${i+1}`)}; // executes step by step

// Asynchronous Example:
(setTimeout(() => console.log(`\nAsynchronous Example: ${num}`) , 5000)); // executes after a given time