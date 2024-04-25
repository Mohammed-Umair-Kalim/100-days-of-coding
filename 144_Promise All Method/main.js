"use strict";
// Question 144: Explain the use of the Promise.all() method with an example ?
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves
// when all of the Promises in the iterable have resolved or when the iterable contains no Promises.
// It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of
// multiple promises.
// Answer 144:
let a = "Umair";
let b = 25;
let c = new Promise((resolve) => {
    setTimeout(() => resolve("Student"), 4000);
});
Promise.all([a, b, c]).then((val) => { console.log(val); });
