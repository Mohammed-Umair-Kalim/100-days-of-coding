// Question 130: Explain how to export a function from one JavaScript file and import it into another file ?

// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable.
// You can export functions, objects, or primitives from one file and import them into another.

// Answer 130:

export function export_import(num1:number , num2:number) // This will export the function
{
    return num1 + num2
}

console.log(export_import(2 , 2)) 