// Generics

//A generic function that gives the input value back exactly as it is:
function random <U> (str:U):U{
    return str
}
// Generics with multi types:
console.log(random<string>("ABCDEFG..."));
console.log(random<number>(123456));
console.log(random<boolean>(true));
console.log(random<string[]>(["TypeScript","JavaScript"]));

function random2 <T> (input:T):string{
    return `The value is ${input} and its type is ${typeof(input)}`
}
console.log(random2<string>("python programmong"));
console.log(random2<number>(123));

