"use strict";
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword ?
// Explain & TIP: The this keyword in an object's method refers to the object itself,
// making it straightforward to access its properties from within its methods.
// Answer 124:
let this_keyword = {
    name: "\nMy name is Mohammed Umair",
    function_object: function () {
        return this.name;
    }
};
console.log(this_keyword.function_object());
