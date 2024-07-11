const userEmail = "S@shantanu.ai"

if (userEmail) {
    console.log("got usser Email");
} else {
    console.log("dont have user email");
}

// falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0","false"," ",[],{},function(){}

const MyArray = []
if (MyArray.length === 0) {
    console.log("Array is empty");
}

const emObject = {}

if (Object.keys(emObject).length===0) {
    console.log("object is Empty");
}
// nullish coalscing operator(??):null undefined
let val1;
// /val1=5??10 
// val1=null??10
// val1 = undefined??15
val1 = null??10??15
console.log(val1);

// Terniary Operator

// condition ? true:false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greaater than 80"):console.log("less than 80")