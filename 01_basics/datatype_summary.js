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
