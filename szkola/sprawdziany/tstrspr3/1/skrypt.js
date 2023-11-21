const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btnW = document.querySelector('button')
const result = document.querySelector('h3')

btnW.addEventListener('click', (event)=>{
    let a = Number(num1.value)
    let b = Number(num2.value)

    result.innerHTML=`suma liczb to ${a+b}`
})