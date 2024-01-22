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
    const wyrK = /^[0-9]{2}-[0-9]{3}$/
    const wyrA = /^[a-z]{3,} .*[0-9]$/i

    if(nazw.value.length < 3){
        nazwZ.innerHTML='za malo znakow'
        // nazw.style.backgroundColor='red'
        nazw.classList.add('error')
    }
    else{
        result.innerHTML=nazw.value+'<br>'
        nazw.classList.remove('error')
        nazwZ.innerHTML=''
    }

    if(!wyrM.test(mail.value)){
        mailZ.innerHTML='Adres Domeny staszic.eu'
        mail.classList.add('error')
    }
    else{
        result.innerHTML+=mail.value+'<br>'
        mail.classList.remove('error')
        mailZ.innerHTML=''
    }

    if(!wyrK.test(kod.value)){
        kodZ.innerHTML='zly pod pocztowy'
        kod.classList.add('error')
    }
    else{
        result.innerHTML+=kod.value+'<br>'
        kod.classList.remove('error')
        kodZ.innerHTML=''
    }

    if(!wyrA.test(adres.value)){
        adresZ.innerHTML='zly adres'
        adres.classList.add('error')
    }
    else{
        result.innerHTML+=adres.value
        adres.classList.remove('error')
        adresZ.innerHTML=''
    }
})