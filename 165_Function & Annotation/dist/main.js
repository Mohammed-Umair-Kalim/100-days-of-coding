"use strict";
// // Function:
// function sum () {
//     console.log("Result of Function:",5 + 2);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// sum() // Invoking function, Outputs 7
// // Function with parameters and annotation:
// function adding (a:number , b:number) {
//     console.log("Result of Function with parameters & annotation:",a + b);
// }
// adding(5 , 5); // Invoking function, Outputs 10
// // Default parameters:
// function food (item1:string = "Pizza" , item2:string = "Ketchup" ) //Assigning default values to parameters
// {
//     console.log(`Bring ${item1} with ${item2}`)
// }
// food() //If no arguments is passed, it outputs default values stored in parameters
// Optional parameter:
function person(name, age) {
    console.log(`A person's name is: ${name} and person's age is: ${age}`);
}
person("Umair"); //age will be undefined
//Anonymous Function or Function Expressions:
let car = function (brand, model, doors) {
    console.log(`The car brand is: ${brand} and the model name is: ${model} and it has ${doors} doors`);
};
car("Toyota", "Corolla", 4);
//Arrow Function:
let mobile = (os, storage) => { console.log(`The operating system of my smartphone is: ${os} & it has a stroage of ${storage}gb`); };
mobile("Android", 256);
