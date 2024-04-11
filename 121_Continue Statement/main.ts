// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement ?

// Explain & TIP: The continue statement can be used to skip over an iteration in a loop.
// It's particularly handy when you want to ignore specific cases without stopping the entire loop.

// Answer 121:

let nums = 11;

for(let i = 1; i < nums; i++)
    {
        //Skipping Number 5:
        if(i === 5){continue}

        console.log(i)
    }
