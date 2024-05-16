// Objects with anonymous & type alias:

//Object with anonymous type:
let person : {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: "Asharib",
    lastName: "Ali",
    age: 25
}

console.log(person.firstName); // Using dot notation to pick specific value from object
console.log(person.lastName);
console.log(person.age);

//Object with type alias:
type Person = {
    firstName: string,
    lastName: string,
    age: number
} //here type alias is defined and it can be used with multiple object

let person2 : Person = {
    firstName: "Bilal",
    lastName: "Khan",
    age: 20
}

console.log(person2["firstName"]); // Using squuare notation to pick specific value from object
console.log(person2["lastName"]);
console.log(person2["age"]);