//--------------1
const Miejsc = document.getElementById('miejscowosc')

Miejsc.addEventListener('dblclick', (e)=>{
    Miejsc.innerHTML='powiat Nakielki'
})

Miejsc.addEventListener('click', (e)=>{
    Miejsc.innerHTML='Slesin'
})

Miejsc.addEventListener('mouseover', (e)=>{
    console.log(Miejsc.textContent)
})

//--------------2
const IN = document.getElementById('artykul')
const div = document.getElementById('numer')

IN.addEventListener('input', (e)=>{
    IN.value = IN.value+' '
})

IN.addEventListener('keydown', (event)=>{
    if(event.key >= '0' && event.key <=9)
        div.textContent += event.key
})

//--------------3
const kontener = document.getElementById('kontener')

kontener.addEventListener('click', (e)=>{
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    kontener.style.backgroundColor = randomColor
})

kontener.addEventListener('mouseover', (e)=>{
    kontener.style.fontSize = '40px'
})

kontener.addEventListener('mouseleave', (e)=>{
    kontener.style.fontSize = '20px'
})