const user = {
    username: "shantanu",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="singh"
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let userName = "Shantanu"
//     console.log(this.userName);
// }
// chai()

// const chai = function(){
//     let userName = "Shantanu"
//     console.log(this.userName);
// }
const chai = () => {
    let userName = "Shantanu"
    console.log(this);
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4));
const object = () => ({username: "SHANTANU"})

console.log(object());


const myArray = [2,4,5,6,6,7]
myArray.forEach(function (){})