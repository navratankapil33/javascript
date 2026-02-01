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
    console.log(key);
}
for (const key in myObject) {
    console.log(myObject[key]);
}

const programming = ["js","ruby","java","py","cpp"]
for (const key in programming) {
    console.log(key);
}
for (const key in programming) {
    console.log(programming[key]);
}