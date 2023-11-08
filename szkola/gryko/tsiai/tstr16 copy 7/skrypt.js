const PolakSr = document.getElementById("Polak")
const NowakSr = document.getElementById("Nowak")
const RyskiSr = document.getElementById("Rysik")
const btnO = document.getElementById("oblicz")
const result = document.getElementById("result")

btnO.addEventListener('click', (event)=>{
    let PS = PolakSr.value
    let NS = NowakSr.value
    let RS = RyskiSr.value
    if(isNaN(PS) || PS=='' || isNaN(NS) || NS=='' || isNaN(RS) || RS=='')
        result.innerHTML('wpisz poprawne dane')
    else{
        if(PS>NS && PS>RS)
            result.innerHTML=`Polak=${PS}`
        if(NS>PS && NS>RS)
            result.innerHTML=`Nowak=${NS}`
        if(RS>PS && RS>NS)
            result.innerHTML=`Ryski=${RS}`
    }
})