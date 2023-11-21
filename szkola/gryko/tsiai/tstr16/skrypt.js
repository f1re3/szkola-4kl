const metraz = document.getElementById('metraz')
const opcje = document.getElementById('opcje')
const kafle = document.getElementById('kafle')
const skuwanie = document.getElementById('skuwanie')
const schody = document.getElementById('schody')
const rabat = document.getElementById('rabat')
const btnOS = document.querySelector('button')
const result = document.querySelector('h3')

btnOS.addEventListener('click', (event)=>{
    let price = Number(opcje.value)

    if(skuwanie.checked)
        price = price*1.1
    if(schody.checked)
        price = price*1.2

    if(rabat.checked)
        price = price*0.95

    if(metraz.value<10)
        price = price*1.1
    if(metraz.value>50)
        price = price*0.9

    result.innerHTML=price*metraz.value
})