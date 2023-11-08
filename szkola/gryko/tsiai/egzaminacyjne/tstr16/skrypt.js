const side = document.querySelector('#side')
const btnArea = document.querySelector('#btnArea')
const btnCirc = document.querySelector('#btnCirc')
const result = document.querySelector('#result')

btnArea.addEventListener('click', (event)=>{
    let a=side.value
    if(a.legth==0 || isNaN(a))
        result.innerHTML="nalezy wpisac wartosc liczbowa"
    else
        result.innerHTML=`pole = ${a**2}`
})

btnCirc.addEventListener('click', (event)=>{
    let a=side.value
    if(a.legth==0 || isNaN(a))
        result.innerHTML="nalezy wpisac wartosc liczbowa"
    else
        result.innerHTML=`obwod = ${a*4}`
})