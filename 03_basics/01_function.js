

function SayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");
}

// SayMyName()

// function addTwoNUmbers(number1, number2){
//     console.log(number1+number2);
// }
function addTwoNUmbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
const result= addTwoNUmbers(3,4)
// addTwoNUmbers(3,"a") => gives 3a
// addTwoNUmbers(3,null) => gives only 3
console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined  ){  //we can write if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("SHANTANU"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000,5000));

const user = {
    userName: "shantanu",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    userName:"sam",
    price:399
})
const myNewArray =[200,400,1000,2000,5000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400,5000,60600]));