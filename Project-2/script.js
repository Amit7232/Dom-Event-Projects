const body = document.querySelector('body')
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('.Height').value)
    const weight = parseFloat( document.querySelector('.Weight').value)
    const results = document.querySelector('.result')

    if(height === "" || height === e || height <= 0){
         results.innerHTML = "Enter A Vailid Height"
    } else if(weight === "" || weight === e || weight <= 0){
        results.innerHTML = "Enter A Vailid Weight"
    }else{
        const bmi = (weight/(height*height)).toFixed(2) 
        results.innerHTML = `Your BMI Is ${bmi}`

        const uw = document.querySelector('#p1')
        const nw = document.querySelector('#p2')
        const ow = document.querySelector('#p3')
        if(bmi <= 18.6){
            uw.style.backgroundColor = "red"
        }
        else if(bmi === 18.6 || bmi <= 24.9){
            nw.style.backgroundColor = "green"
        }
        else if(bmi > 24.9)
        {
            ow.style.backgroundColor = "orange"
        }
    }
})