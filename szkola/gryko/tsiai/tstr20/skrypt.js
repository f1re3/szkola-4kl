const numA = document.getElementById('numberA')
const numB = document.getElementById('numberB')
const dodawanie = document.getElementById('dod')
const odejmowanie = document.getElementById('odej')
const iloczyn = document.getElementById('ilo')
const roznica = document.getElementById('rozn')
const potegowanie = document.getElementById('pot')
const wynik = document.getElementById('wynik')


dodawanie.addEventListener('click', (event)=>{
    let nA = parseInt(numA.value)
    let nB = parseInt(numB.value)
    wynik.innerHTML=`Wynik: ${nA+nB}`
})

odejmowanie.addEventListener('click', (event)=>{
    let nA = parseInt(numA.value)
    let nB = parseInt(numB.value)
    wynik.innerHTML=`Wynik: ${nA-nB}`
})

iloczyn.addEventListener('click', (event)=>{
    let nA = parseInt(numA.value)
    let nB = parseInt(numB.value)
    wynik.innerHTML=`Wynik: ${nA*nB}`
})

roznica.addEventListener('click', (event)=>{
    let nA = parseInt(numA.value)
    let nB = parseInt(numB.value)
    wynik.innerHTML=`Wynik: ${nA/nB}`
})

potegowanie.addEventListener('click', (event)=>{
    let nA = parseInt(numA.value)
    let nB = parseInt(numB.value)
    wynik.innerHTML=`Wynik: ${nA**nB}`
})
