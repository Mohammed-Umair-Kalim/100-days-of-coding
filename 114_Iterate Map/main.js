"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console ?
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop,
// providing access to each key-value pair
// Answer 114:
let map = new Map();
map.set(406009, "Umair");
map.set(123456, "Saad");
map.set(987654, "Samir");
map.forEach((name, ID) => console.log(`Student Name: ${name},`, "Stdent ID:", ID));
