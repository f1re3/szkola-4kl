const temp = document.getElementById("temp")
const btnK = document.getElementById("btnK")
const btnF = document.getElementById("btnF")

btnK.addEventListener('click', (event)=>{
    let a=temp.value
    if(a.legth==0 || isNaN(a))
    result.innerHTML="blad danych"
else
    result.innerHTML=`${Number(a)+273.15}K`
})

btnF.addEventListener('click', (event)=>{
    let a=temp.value
    if(a.legth==0 || isNaN(a))
    result.innerHTML="blad danych"
else
    result.innerHTML=`${(a*1.8)+32}F`
})