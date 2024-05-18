// Union Type:
let alpha_num:string|number;
alpha_num = 123;
alpha_num = "abc" //re-assigned with string
// alpha_num = true //gives error because the variable is not type boolean

// Union Literal type:
let traffic_lights: "red" | "yellow" | "green";
traffic_lights = "green";
traffic_lights = "yellow";
traffic_lights = "red";
// traffic_lights = "blue"; // gives error because only "red" , "yellow" or "green" is assignable to traffic_light variable

// Null type:
let user:string|null = "Umair";

if (user === "Umair") 
    {
        console.log(`Welcome to our web site ${user}!`);
    }
    
else{console.log(`Welcome guest user`)}
