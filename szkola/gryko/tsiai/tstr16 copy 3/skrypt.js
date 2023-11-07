const wymiar1 = document.getElementById("wymiar1")
const wymiar2 = document.getElementById("wymiar2")
const btnK = document.getElementById("btnK")
const result = document.getElementById("result")
const wymiaryP = document.getElementById("wymiaryP")

btnK.addEventListener('click', (event)=>{
    let x = wymiar1.value*wymiar2.value
    wymiaryP.innerHTML=`Powierzchnia całkowita ścian: ${x} m2`
    result.innerHTML=`Koszt malowania: ${x*8} zl`
})