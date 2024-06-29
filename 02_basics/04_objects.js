//const tinderUser = new Object() //singleton object
const tinderUser = {} //not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "sone@gmail.com",
    fullname: {
        userfullName:{
            firstName: "Shantanu",
            lastName: "Singh"
        }
    }
}
console.log(regularUser.fullname.userfullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)  //this is write but easy method is below
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abce@gmail.com"
    },
    {
        id:1,
        email:"abcd@gmail.com"
    },
    {
        id:1,
        email:"abcf@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "Js in Hindi",   
    price: "999",
    courseInstructor: "hitesh",

}
// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name":"hitesh",
//     "cousrename": "js in hindi",
//     "proce":"free"
// }
[
    {},
    {},
    {},
    {},
]