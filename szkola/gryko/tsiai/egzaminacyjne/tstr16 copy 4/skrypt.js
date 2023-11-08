const powierzchnia = document.getElementById("powierzchnia")
const pl1 = document.getElementById("pl1")
const pl2 = document.getElementById("pl2")
const przelicz = document.getElementById("przelicz")
const result = document.getElementById("result")

przelicz.addEventListener('click', (event)=>{
    if(pl1.checked)
        result.innerHTML=`cena uslugi wynosi: ${powierzchnia.value*70} zl`
    if(pl2.checked)
        result.innerHTML=`cena uslugi wynosi: ${powierzchnia.value*80} zl`
})