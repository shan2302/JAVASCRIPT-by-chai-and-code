// var c = 300
let a =300
if (true) {
    let a = 10
    const b =20
    // var c =30
    console.log("INNER:",a);
}
 console.log(a);
//  console.log(b);
// console.log(c);

function one(){
    const userName = "shantanu singh"

    function two(){
        const website= "youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const userName = "Shantanu"
    if(userName === "Shantanu"){
        const website = " Youtube"
        console.log(userName+website);
    }
    // console.log(website);
}
// console.log(userName);


// +++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++
addOne(5)
function addOne(num){
    return num+1
}

// addTwo(5) this is not allowed because we call function before declare as a const function
const addTwo = function(num){
    return num+2
}
addTwo(5)