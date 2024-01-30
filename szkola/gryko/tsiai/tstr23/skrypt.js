
const productE = document.getElementById('product') 
const btnE= document.getElementById('btn') 
const olE = document.querySelector('ol')

btnE.addEventListener('click', (e)=>{ 
    if(productE.value.length>2){
        let liE=document.createElement('li')
        liE.innerHTML = productE.value
        ole.appendChild(lie)
        console.log('jjjj')
    }
})