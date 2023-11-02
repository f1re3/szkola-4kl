const pass = document.getElementById("pass")
const check = document.getElementById("check")
const result = document.getElementById("result")

check.addEventListener('click', (event)=>{
    let a = pass.length
    if(a==0 || isNaN(a))
        result.innerHTML="blad danych"
    

})