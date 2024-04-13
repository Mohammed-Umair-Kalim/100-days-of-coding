// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions ?

// Explain & TIP: In traditional functions, this refers to the object that called the function,
// which can vary depending on the context. In arrow functions, this is lexically bound,
// meaning it uses this from the code that contains the arrow function.

// Answer 129:

let Traditional = 
{
    key:"value", val:function(){console.log(this.key)},
    
    // Arrow:() => {console.log(this.key)} // Throws Error because of the scope.

}

Traditional.val()