const coding  = ["js", "ruby", "java","py","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

coding.forEach((item)=>{
    console.log(item);
})

function printME(item){
    console.log(item);
}
coding.forEach(printME)



coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName:"js"
    },
    {
        languageName: "Java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageFileName);
})