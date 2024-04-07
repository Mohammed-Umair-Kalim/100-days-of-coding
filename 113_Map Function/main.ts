
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists ?

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve
// its value with the .get() method

// Answer 113:

let countries = new Map <string,string>();

countries.set("Palestine" , "Gaza")
// countries.set("Canada" , "Ottawa")

function map (country:Map <string , string>){

    if(country.has("Canada")){console.log(country.get("Canada"))}

    else{console.log("Canada is not in the map")}
}

map(countries)


