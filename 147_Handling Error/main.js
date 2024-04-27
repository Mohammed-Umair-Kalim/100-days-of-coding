"use strict";
// Question 147: Explain how to handle errors in a callback pattern ?
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as 
// the first argument to the callback.
// This convention allows the callback function to check for errors before proceeding with its execution
// Answer 147:
function data(call_data) {
    let err = new Error("Error occured!");
    let data = "simple string";
    if (err) {
        call_data(err);
    }
    else {
        call_data(null, data);
    }
    return (`${err}  ${data}`);
}
;
data((err, data) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(data);
    }
});
