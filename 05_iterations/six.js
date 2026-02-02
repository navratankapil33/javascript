const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)

const nNums = myNums.filter( (num) => {
    return num > 4

})

console.log(newNums);
console.log(nNums);


const books = [
    {'title': "Bookone", 'genre': "fiction", 'publish': 2001,'edition': 2015},
    {'title': "Booktwo", 'genre': "Science", 'publish': 1987,'edition': 2008},
    {'title': "Bookthree", 'genre':"non-fiction", 'publish': 1992,'edition': 2009 },
    {'title': "Bookfour", 'genre': "non-fiction", 'publish': 1906,'edition': 2019},
    {'title': "Bookfive", 'genre': "non-fiction", 'publish': 1967,'edition': 2005},
    {'title': "Booksix", 'genre': "non-fiction",'publish': 1989,'edition': 2014},
    {'title': "Bookseven", 'genre': "non-fiction", 'publish': 1980,'edition': 2024},
    {'title': "Bookeight", 'genre': "non-fiction", 'publish': 1999, 'edition': 2011},
    {'title': "Booknine", 'genre': "non-fiction", 'publish': 1978,'edition': 2020}
]

const filbook = books.filter((book) => book.genre === "Science")
const userbook = books.filter((book) => book.publish > 1990)

console.log(filbook);
console.log(userbook);

