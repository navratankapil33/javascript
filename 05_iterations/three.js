// for of

// [" "," ", " "]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
//console.log(num)
}

const greetings = "Welcome to this beautiful world!"

for (const greet of greetings) {
    // (greet == 'e') console.log("Value of greetings is a");
    // console.log(`Value of greetings is ${greet}`);
    
}

// Maps

const map = new Map();

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('USSR',"Russia")
map.set('CHN',"CHina")

//console.log(map);

console.log(map.size)

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key+" :- "+ value);
}
for (const [value] of map) {
    console.log(value)
}