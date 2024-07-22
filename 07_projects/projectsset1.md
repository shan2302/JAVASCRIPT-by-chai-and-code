#Projects Related to DOM
#project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

##project1
'''Javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    })  
})
'''

#project 2
'''javascript
const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height).value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height =parseInt(document.querySelector("#Height").value)
    const weight =parseInt(document.querySelector("#Weight").value)
    const result =document.querySelector("#results")
    if(height == '' || height <0 || isNaN(height)){
        result.innerHTML = `Please give a valid Height ${height}`
    }
    else if(weight == ''||weight<0 || isNaN(weight)){
        result.innerHTML =  `Please give a valid Weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        
        if (bmi<16.9) {
            result.innerHTML = `<span>${bmi}</span><br>
            you are underWeight`
            // result.innerHTML = "you are underWeight"
        }
        else if(bmi>24.9){
            result.innerHTML = `<span>${bmi}</span><br>
            you are overWeight`
            // result.innerHTML = "you are overWeight"
        }
        else{
            result.innerHTML = `${bmi} <br> you are normalWeight`
            result.innerHTML = "you are normalWeight"
        }
    }

})
'''
#project 3
'''javascript
const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();
},1000);
'''

#Project 4
'''javascript
let randomNumber =parseInt(Math.random()*100 + 1);
const submit =document.querySelector("#subt");
const userInput =document.querySelector("#guessField");
const guesssSlot =document.querySelector(".guesses");
const remaining =document.querySelector(".lastResult");
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        // console.log(guess);
    })
}
function validateGuess(guess){
    //
    if (isNaN(guess)) {
        alert('Please enter a valid Number')
    } else if (guess<1) {
    alert('please enter a number more than 1')        
    }
    else if (guess>100) {
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over.  Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is TOOO low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is TOOO high`)
    }
}
function displayGuess(guess){
    userInput.value = ''
    guesssSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
    
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}
function newGame(){
    const NewGameButton =document.querySelector('#newGame')
    NewGameButton.addEventListener('click',function(e){
        randomNumber =parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guesssSlot.innerHTML =''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
        
    })
}
'''