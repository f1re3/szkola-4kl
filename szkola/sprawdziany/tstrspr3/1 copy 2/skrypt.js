const short = document.getElementById('short')
const medium = document.getElementById('medium')
const mediumLong = document.getElementById('mediumLong')
const long = document.getElementById('long')
const btn = document.querySelector('button')
const result = document.querySelector('h4')

btn.addEventListener('click', (event)=>{
    if(short.checked)
        result.innerHTML='cena strzyzenia: 25'
    if(medium.checked)
        result.innerHTML='cena strzyzenia: 30'
    if(mediumLong.checked)
        result.innerHTML='cena strzyzenia: 40'
    if(long.checked)
        result.innerHTML='cena strzyzenia: 50'
})