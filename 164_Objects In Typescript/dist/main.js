"use strict";
// Objects with anonymous & type alias:
Object.defineProperty(exports, "__esModule", { value: true });
//Object with anonymous type:
let person = {
    firstName: "Asharib",
    lastName: "Ali",
    age: 25
};
console.log(person.firstName); // Using dot notation to pick specific value from object
console.log(person.lastName);
console.log(person.age);
let person2 = {
    firstName: "Bilal",
    lastName: "Khan",
    age: 20
};
console.log(person2["firstName"]); // Using squuare notation to pick specific value from object
console.log(person2["lastName"]);
console.log(person2["age"]);
