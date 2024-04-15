"use strict";
// Question 134: Take a JSON string and parse it into a JavaScript object ?
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. 
// This is particularly useful when dealing with data received as JSON from a web server or API.
// Answer 134:
let json_string = `{
    "name":"Umair","age":25,"roll_no":406009
}`;
// outputs java object:
console.log(JSON.parse(json_string));
