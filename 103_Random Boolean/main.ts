// Question 103: Write a function that returns a random boolean value, true or false ?

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random()
// and check if it's above or below 0.5 to decide between true or false

// Answer 103:

let randomNumber = Math.random()

function random_boolean (num:number = 0.5):boolean {

    let random = randomNumber > num
    return random
 }

console.log(random_boolean())

console.log(Math.random())