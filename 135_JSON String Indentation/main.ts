// Question 135: Explain how you can format a JSON string with proper indentation for readability ?

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string.
// Adding an indent level as the third argument beautifies the output, making it more readable.

// Answer 135:

let java_object = 
{
    name:"Umair",
    age:25,
    roll_no:406009
};

console.log(JSON.stringify(java_object , undefined , 10))