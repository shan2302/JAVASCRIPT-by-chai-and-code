//Singleton
//Object.create




//object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"Shantanu",
    age: 17,
    email:"shantanu@gmail.com",
    Location:"muzaffarpur",
    isLoggedIn: false,
    [mySym]:"key1",
    lastLoginDays: ["monday","saturday"],
    "full name": "Shantanu Singh",
}
console.log(JsUser.email);
console.log(typeof JsUser[mySym]);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

JsUser.email = "shantanu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "shantanu@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`);
}

console.log(JsUser.greetingTwo());