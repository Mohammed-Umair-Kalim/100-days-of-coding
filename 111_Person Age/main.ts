// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult) ?

// Explain & TIP: Age groups can typically be categorized by specific ranges.
// For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult

// Answer 111:

let age:number = 20;

if(age < 13) {console.log("Child")}

else if(age >= 13 && age < 20) {console.log("Teenager")}

else if(age >= 20) {console.log("Adult")}

else {console.log("Invalid Age")}