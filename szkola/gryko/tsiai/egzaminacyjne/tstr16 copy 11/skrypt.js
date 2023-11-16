const number = document.getElementById("number")
const weight = document.getElementById("weight")
const btnD = document.getElementById("deliver")
const result = document.getElementById("result")

btnD.addEventListener('click', (event)=>{
    if(number.value<1 && number.value>3)
        result.innerHTML=`"Koszt zamówienia wynosi ${weight.value*5} zł`
    if(number.value == 1)
        result.innerHTML=`"Koszt zamówienia wynosi ${weight.value*5} zł`
    if(number.value == 2)
        result.innerHTML=`"Koszt zamówienia wynosi ${weight.value*7} zł`
    if(number.value == 3)
        result.innerHTML=`"Koszt zamówienia wynosi ${weight.value*6} zł`
})