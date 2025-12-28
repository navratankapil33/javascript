


function sayMyName() {
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2)
// }
function addTwoNumbers(number1, number2) {
    let result = number1+number2
    console.log("Hitesh")
    return result
}
const result = addTwoNumbers(3,5)
console.log("Result: ",result)

function loginusername(username) {
    return `${username} just logged in` 
}

let fetchh = loginusername("hitesh")
console.log(fetchh)

// ---------------------

function calculatePrice(...num1) { //rest operator (spread operator)
    return num1
}

console.log(calculatePrice(200,300,400));

const user = {
    username: "hitesh",
    price: 199
}
 
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


