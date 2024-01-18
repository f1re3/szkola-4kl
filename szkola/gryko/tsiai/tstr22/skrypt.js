const nazw = document.getElementById('nazwisko')
const nazwZ = document.getElementById('nazwisko-zle')
const kod = document.getElementById('kod')
const kodZ = document.getElementById('kod-zle')
const adres = document.getElementById('adres')
const adresZ = document.getElementById('adres-zle')
const mail = document.getElementById('e-mail')
const mailZ = document.getElementById('e-mail-zle')
const result = document.querySelector('h4')
const btnS = document.querySelector('button')

btnS.addEventListener('click', (e)=>{
    e.preventDefault()

    const wyrM = /^\w{4,}@staszic.eu$/i

    if(nazw.value.length < 3){
        nazwZ.innerHTML='za malo znakow'
        nazw.style.backgroundColor='red'
    }
    else
        result.innerHTML=nazw.value+'<br>'

    if(mail.value)
        mailZ.innerHTML
})