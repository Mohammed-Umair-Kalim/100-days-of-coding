"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance?
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and
// reusability is a cornerstone of modern JavaScript application structure.
// Answer 131:
// Exporting class:
class person {
    constructor(name) {
        this.name = name;
    }
    greetings() {
        console.log(`Hi, My Name Is ${this.name}`);
    }
}
exports.person = person;
