const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
    
}

// falsy values

//false, 0, -0, BigInt -> 0n, "", null, undefined, NaN

// truthy values

// "0",'false', true,[],{}, function() {}

if (userEmail.length == 0) {
    console.log("Array is empty");
}

const empObj = {}

if (Object.keys(empObj).length == 0) {
    console.log("Object is empty");
    
}

// Nullish coalescing operator(??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10


console.log(val1);

// Ternary operator

const price = 90
price <=70 ? console.log("less than 70"): console.log("greater than 70");

