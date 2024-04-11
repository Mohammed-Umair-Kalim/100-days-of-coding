// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel ?

// Explain & TIP: To find a specific character in a string, you can iterate through each character and
// use a condition to check for vowels. The loop can stop once a vowel is found

// Answere 123:

let vowels = "\nfly bees "

for(let vowel of vowels)
    {
        vowel.toLowerCase()
        //loop will stop when first vowel found:
        if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ){break;} console.log(vowel)
    }
