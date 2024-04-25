// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds ?

// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states:
// pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that 
// take some time to complete, like fetching data or timing events.

// Answer 142:

let promise = new Promise<string> ((resolve) => {setTimeout(() => {resolve("Hi World!")} , 4000 )})

promise.then((delay) => console.log(delay)) // this logs with 4 seconds delay
