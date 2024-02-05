const formE = document.querySelector('form')
const areaE = document.querySelector('textarea')
const btnW = document.querySelector('button')

//jesli jest element w localstorage to wstawiam wartosc dla textarea
if(localStorage.getItem("text")!==null){
    areaE.value = localStorage.getItem("text")
}

//podaczas wpisywania do textarea aktualizujemy localstorage
areaE.addEventListener('input', (e)=>{
    localStorage.setItem("text", areaE.value)
})

formE.addEventListener('submit', (e)=>{
    localStorage.removeItem("text")
})