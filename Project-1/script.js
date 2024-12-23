const button = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

button.forEach( (buttons) => {
    buttons.addEventListener('click', function(e){
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'tomato') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
        }
    })
    
});