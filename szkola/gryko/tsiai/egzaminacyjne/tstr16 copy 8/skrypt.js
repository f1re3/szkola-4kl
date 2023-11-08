const liczbaG = document.getElementById("liczbaG")
const pop = document.getElementById("pop")
const btnO = document.getElementById("oblicz")
const result = document.getElementById("result")

btnO.addEventListener('click', (event)=>{
    if(pop.checked)
        result.innerHTML=`Koszt Twojego wesela to ${liczbaG.value*100+(liczbaG.value*100*0.3)} złotych`
    else
        result.innerHTML=`Koszt Twojego wesela to ${liczbaG.value*100} złotych`
})