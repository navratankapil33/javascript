// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Vedant"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "navratan",
            lastname: "pandit"
        }
    }
}

// console.log(regUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({},obj1,obj2) // {} optional but highly recommendable
// console.log(obj3);

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);



// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

// ++++++++++ De-structure Object++++++++++++++

const course = {
    courseName: "javascript practice",
    courseFees: "999",
    courseInstructor: "hitesh choudhary"
}

console.log(course.courseName);


const {courseInstructor} = course
console.log(courseInstructor)

const {courseName} = course
console.log(courseName);


const {courseFees} = course
// console.log(fees);
console.log(courseFees)






