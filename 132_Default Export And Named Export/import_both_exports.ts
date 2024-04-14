// Question 132: Discuss the difference between default and named exports in JavaScript modules ?

// Explain & TIP: JavaScript provides two main types of exports: default and named.
// A module can have only one default export, but multiple named exports.
// This flexibility supports various use cases in module design.

// Answer 132:

import my_name,{my_age} from "./default_named_export"; // importing both default and named export form other file

console.log(`My name is: ${my_name}
My age is: ${my_age}`)