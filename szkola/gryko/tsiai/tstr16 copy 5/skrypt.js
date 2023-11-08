const metraz = document.getElementById("metraz")
const pokoje = document.getElementById("pokoje")
const kafelki = document.getElementById("kafelki")
const btnO = document.getElementById("oblicz")
const result = document.getElementById("result")

btnO.addEventListener('click', (event)=>{
    let metrazC = metraz.value*4000
    let pokojeC = pokoje.value*1000
    if(kafelki.checked)
        result.innerHTML=`„Koszt mieszkania: ${metrazC+pokojeC+2000} zł`
    else
        result.innerHTML=`„Koszt mieszkania: ${metrazC+pokojeC} zł`
})