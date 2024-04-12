// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method ?

// Explain & TIP: When 'this' is used inside a nested function within an object's method,
// it does not refer to the object itself but to the global object (in a browser, window).
// This behavior often requires workarounds like assigning 'this' to another variable in the outer function.

// Answer 126:

let object = 
{
  name: "Mohammed Umair",

  obj_function1:function()
  {
    console.log(this.name)

    let obj_function2 = () =>
      {
        console.log(this.name)
      }

    obj_function2()

  }

}

object.obj_function1()