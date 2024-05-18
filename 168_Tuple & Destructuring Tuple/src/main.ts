// Tuple
let str_num_array:[string , number] = ["abc",123] // if I put number first instead of "abc" it will throw an error
console.log("Before re-assigning:",str_num_array);

str_num_array = ["def",456] //re-assigned the value in same order as string , number
console.log("After re-assinging:",str_num_array);

// Destructuring Tuple:
let [str,num] = str_num_array;
console.log(`
Destructuring Tuple:
${str}
${num}
`);