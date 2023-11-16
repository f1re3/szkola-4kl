const fname = document.getElementById("fname")
const sname = document.getElementById("sname")
const mail = document.getElementById("mail")
const usluga = document.getElementById("usluga")
const wyslij = document.getElementById("wyslij")
const btnR = document.getElementById("reset")
const btnS = document.getElementById("send")
const result = document.getElementById("result")


btnS.addEventListener('click', (event)=>{
    result.innerHTML = `${fname.value} ${sname.value} <br>
    ${mail.value.toLowerCase()} <br>
    usluga: ${usluga.value}`
    if(wyslij.checked)
        result.innerHTML = `${fname.value} ${sname.value} <br>
        ${mail.value.toLowerCase()} <br>
        usluga: ${usluga.value}<br> 
        kopia zapasowa zostala wyslana`
})