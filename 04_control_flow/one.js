// if
const isUserLoggedIn = true
const temperature = 89
if (temperature<50) {
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}
// <,>,<=,>=,==,!=,===,!== are the conditional operator


const score = 200
if (score>100) {
    const power ="fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); error:because power is a local scope

const balance =1000
// if (balance>500) console.log("test"),
// console.log("test2");  //we dont use this method 

if (balance<500) {
    console.log("less than 500");
}
else if (balance<750) {
    console.log("less than 750");
}
else if (balance<900) {
    console.log("less than 900");
    
}
else{
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const LoggedInfromGoogle = false
const LoggedInfromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course ");  
}
if (LoggedInfromEmail || LoggedInfromGoogle) {
    console.log("User Logged in");
}