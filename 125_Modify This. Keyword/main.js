"use strict";
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object ?
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object,
// providing a cohesive way to manipulate internal data.
let mobile = {
    screen_size: 6.15,
    screen_type: "Super Amoled",
    edges: 1.15,
    mobile_function: function () {
        return this.screen_size - this.edges;
    }
};
console.log(mobile.mobile_function());
