const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
//     const element = object[key];
// }

for (const key in myObject) {
    //console.log(key);
}
for (const key in myObject) {
    //console.log(myObject[key]);
}

const programming = ["js","ruby","java","py","cpp"]
for (const key in programming) {
    //console.log(key);
}
for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map();

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('USSR',"Russia")
map.set('CHN',"CHina")

for (const key in map) {
    console.log(key);
}