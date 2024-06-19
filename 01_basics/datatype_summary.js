// Primitive
// 7 types:String,Number,boolean,null,undefined,Symbol,BigInt


const score = 100;
const scoreVALUE = 100.3;
const isloggedIn =  false
const OutsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId);
const bigNumber = 34354535239598247354360939678n
// Refernce(non primitive)
//Array,Objects,Functions
const heros = ["shaktiman","naagraj", "doga"]
let obj = {
    name:"shantanu",
    age : 19,
}
// console.log(obj);
const MyFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);
console.log(typeof MyFunction);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Stack(primitive) , Heap(Non-Primitive)

let myYoutubeName = "randyorton"
let anotherName = myYoutubeName
anotherName = "myname"
console.log(anotherName);
console.log(myYoutubeName); //different because it is in stack memory where it duplicates 
let user1 = {
    email:"abc@yahoo.com",
    upiId: "abc@paytm"
}
let user2= user1
user2.email = "abcd@gmail.com"
console.log(user1.email);
console.log(user2.email);//both change because it is in heap memory where it refers to only one point 
