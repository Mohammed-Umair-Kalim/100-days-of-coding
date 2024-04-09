// Question 116: Create a switch case that matches several cases to the same code block, representing seasons ?

// Explain & TIP: You can group multiple case statements together when they should execute the same block of code,
// which is handy for categorizing items into broader groups.

// Answer 116:

let seasons:number = 7
switch (seasons)
{
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("\nAutumn")

    case 5:
    case 6:
    case 7:
    case 8:
    console.log("\nSummer")
}