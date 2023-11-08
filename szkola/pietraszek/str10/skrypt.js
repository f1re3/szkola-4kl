const a = document.getElementById("Liczba1")
const b = document.getElementById("Liczba2")
const btnD = document.getElementById("dodawanie")
const btnO = document.getElementById("odejmowanie")
const btnM = document.getElementById("mnozenie")
const btnDz = document.getElementById("dzielenie")
const result = document.getElementById("result")

btnD.addEventListener('click', (event)=>{
    result.innerHTML=`wynik dodawania liczb ${a.value} oraz ${b.value} = ${Number(a.value)+Number(b.value)}`
})
btnO.addEventListener('click', (event)=>{
    result.innerHTML=`wynik odejmowania liczb ${a.value} oraz ${b.value} = ${a.value-b.value}`
})
btnM.addEventListener('click', (event)=>{
    result.innerHTML=`wynik mnozenia liczb ${a.value} oraz ${b.value} = ${a.value*b.value}`
})
btnDz.addEventListener('click', (event)=>{
    result.innerHTML=`wynik dzielenia liczb ${a.value} oraz ${b.value} = ${a.value/b.value}`
})