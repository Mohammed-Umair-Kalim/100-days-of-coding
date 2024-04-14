"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance?
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and
// reusability is a cornerstone of modern JavaScript application structure.
// Importing class:
const class_exp_1 = require("./class_exp");
let Umair = new class_exp_1.person("Umair");
Umair.greetings();
