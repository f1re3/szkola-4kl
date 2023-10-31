const side = document.querySelector('#side')
const btnArea = document.querySelector('#btnArea')
const btnCirc = document.querySelector('#btnCirc')
const result = document.querySelector('#result')

btnArea.addEventListener('click', (event)=>{
    if(side.legth==0 || isNaN(side))
        result.innerHTML="nalezy wpisac wartosc liczbowa"
    else
        result.innerHTML=`pole = ${number(side.value)**2}`
})