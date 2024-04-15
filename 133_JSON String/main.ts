// Question 133: Write a JavaScript object and convert it into a JSON string ?

// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It's easy for humans to read and write and for machines to parse and generate.
// Converting a JavaScript object into a JSON string can be done using JSON.stringify()

// Answer 133:

let java_object = 
{
    name:"Umair",
    age:25,
    roll_no:406009
};

console.log(JSON.stringify(java_object))
