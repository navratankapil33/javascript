const marvel_heroes = ["Thor", "Ironmen", "Spiderman"]
const dc_heroes = ["Superman","Batman","Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

//console.log(marvel_heroes[3][0])

const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

const allheroes = [...marvel_heroes,...dc_heroes,...heroes] // Spread operator
// console.log(allheroes)

const nextarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const checkarr = nextarr.flat(Infinity)
// console.log(checkarr)

console.log(Array.isArray("Shaktiman"))
console.log(Array.from("Shaktiman")) // Converted String into Array of characters
console.log(Array.from({name: "karma"})) // Interesting case (Empty Array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2, score3));
