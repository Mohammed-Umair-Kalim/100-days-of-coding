"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules ?
Object.defineProperty(exports, "__esModule", { value: true });
exports.my_age = void 0;
// Explain & TIP: JavaScript provides two main types of exports: default and named.
// A module can have only one default export, but multiple named exports.
// This flexibility supports various use cases in module design.
// Answer 132:
let my_name = "Mohammed Umair";
exports.default = my_name;
exports.my_age = 25;
