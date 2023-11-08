const liczbaO = document.getElementById("liczbaO")
const upust = document.getElementById("upust")
const btnO = document.getElementById("oblicz")
const result = document.getElementById("result")

btnO.addEventListener('click', (event)=>{
    if(liczbaO.value<=50){
        if(upust.checked)
            result.innerHTML=`Koszt ogłoszeń: ${liczbaO.value*2-liczbaO.value*0.2} PLN`
        else
            result.innerHTML=`Koszt ogłoszeń: ${liczbaO.value*2} PLN`
    }
    else{
        if(upust.checked)
            result.innerHTML=`Koszt ogłoszeń: ${liczbaO.value-liczbaO.value*0.2} PLN`
        else
            result.innerHTML=`Koszt ogłoszeń: ${liczbaO.value} PLN`
    }
})