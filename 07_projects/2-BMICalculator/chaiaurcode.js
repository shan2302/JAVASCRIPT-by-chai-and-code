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