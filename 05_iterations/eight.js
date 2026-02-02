const myNums = [1,2,3]

// const num = myNums.reduce(function (acc,curval) {
//     console.log(`Accumalator: ${acc} and Current Value: ${curval}`);
//     return acc + curval
// },0)
const num = myNums.reduce( (acc,curval) => acc + curval,0)

console.log(num);
