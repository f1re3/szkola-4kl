const passEl = document.getElementById("pass")
const check = document.getElementById("check")
const result = document.getElementById("result")

check.addEventListener('click', (event)=>{
    let a = passEl.value
    if(a.length==0)
        result.innerHTML="blad danych"
    
    if(a.length < 4 && a.length>0)
        result.innerHTML="slabe"

    if(a.length >= 4 && a.length <=6 && a.match(/\d/))
        result.innerHTML="srednie"
        if(a.length >= 7 && a.match(/\d/))
        result.innerHTML="dobre"
    })

    