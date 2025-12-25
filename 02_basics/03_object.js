// Singleton (when we create object by constructor)
// Object.create

// Object Literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Navu",
    [mysym]: "mykey1",
    age: 26,
    location: "Gurgaon",
    email: "navu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday","Wednesday"]
}
// console.log(jsUser);
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(typeof jsUser.email)
// console.log(typeof jsUser["isLoggedIn"])
// console.log(jsUser[mysym])
// console.log(typeof jsUser[mysym])
// console.log(typeof mysym)

jsUser.email ="navratan@google.com"
// Object.freeze(jsUser)
console.log(jsUser)
jsUser.email="navratan@microsoft.com"
// console.log(jsUser.email)

jsUser.greeting = function() { 
    console.log("Hello JS User")

}

jsUser.greetingTwo = function() { 
    console.log(`Hello JS user, ${jsUser.name}`)
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());





