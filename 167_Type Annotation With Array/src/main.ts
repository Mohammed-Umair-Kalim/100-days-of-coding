// Type Annotation With Array

//string type array:
let fruits_array:string[] = ["Mango","Pomegranate","Orange","Pineapple"];
console.log("String Type Array:",fruits_array);

//number type array:
let num:number[] = [1,2,3,4,5]
console.log("Number Type Array:",num);

//Multiple type array:
let mixed_array:(string | number | boolean)[] = ["Mango",10,true]
console.log("Multidimensional Array",mixed_array);