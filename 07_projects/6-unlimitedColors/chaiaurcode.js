// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
};
const Start =document.querySelector("#start")
const Stop =document.querySelector("#stop")
const body = document.querySelector("body")
let intervalId
Start.addEventListener('click',function(){
    if(intervalId){
        clearInterval(intervalId)
    }
    intervalId = setInterval(function(){
        body.style.backgroundColor = randomColor()
    },1000)
})

Stop.addEventListener('click', function(){
    clearInterval(intervalId)
})