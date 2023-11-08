const zGory = document.getElementById("JZZG")
const Km = document.getElementById("KmDZG")
const btnO = document.getElementById("oblicz")
const result = document.getElementById("result")

btnO.addEventListener('click', (event)=>{
    if(zGory.checked)
        result.innerHTML="dowieziemy twoja pizze za darmo"
    else
        result.innerHTML=` Dowóz będzie Cię kosztował ${Km.value*2} złotych`
})