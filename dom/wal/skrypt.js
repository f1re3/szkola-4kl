const btnW = document.getElementById('zobacz')
const mainE = document.querySelector('main')
const fNameE = document.getElementById('fName')
const sNameE = document.getElementById('sName')

btnW.addEventListener('click', (event)=>{
    if(fNameE.value !== 'Amelia' && sNameE.value !== 'Danielewska'){
        let divE = document.createElement('div')
        let h3E = document.createElement('h3')
        h3E.innerHTML=`${fNameE.value} ${sNameE.value} aha, ja cie znam?`
        h3E.style.color='rgb(252, 145, 145)'
        divE.appendChild(h3E)
        mainE.appendChild(divE)
    }
    else{
        let divE = document.createElement('div')
        let h3E = document.createElement('h3')
        h3E.innerHTML=`${fNameE.value} ${sNameE.value} ciesze sie ze chcesz zostac moja walentynka <3`
        h3E.style.color='rgb(252, 145, 145)'
        divE.appendChild(h3E)
        mainE.appendChild(divE)
    }
})