const myarr = [0,1,2,3,4,5]

// console.log(myarr)

const newarr = myarr
// newarr.shift()
// console.log("Newarr" ,newarr)
// console.log("Myarr" ,myarr)

myarr.push(9)
myarr.push(10)
myarr.push(11,12)
//console.log(myarr)

myarr.pop()
console.log("A",myarr)

const noarr = myarr.slice(1,3)
console.log("Slice",noarr)
console.log("B",myarr)

const sparr = myarr.splice(1,3) // It manipulates the array and it includes the last index
console.log("Splice",sparr)
console.log("C",myarr)


