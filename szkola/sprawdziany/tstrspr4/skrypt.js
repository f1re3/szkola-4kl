const questsE = document.getElementById('quests')
const afterBirthE = document.getElementById('afterbirth')
const btnO = document.querySelector('button')
const resultE = document.getElementById('result')

btnO.addEventListener('click', (event)=>{
    if(afterBirthE.checked)
        resultE.innerHTML=`Koszt Twojego wesela to ${(100*questsE.value)*1.3} złotych`
    else
        resultE.innerHTML=`Koszt Twojego wesela to ${100*questsE.value} złotych`
})