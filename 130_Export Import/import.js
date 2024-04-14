"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file ?
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable.
// You can export functions, objects, or primitives from one file and import them into another.
// Answer 130:
// importing function from other file
const export_1 = require("./export");
export_1.export_import;
