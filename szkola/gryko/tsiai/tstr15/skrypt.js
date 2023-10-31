const first = document.getElementById('first')
const second = document.getElementById('second')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const result = document.querySelector('#result')

btn1.addEventListener('click', (event) =>{
    result.innerHTML=`${first.value} + ${second.value} = ${Number(first.value)+Number(second.value)}`
})
btn2.addEventListener('click', (event) =>{
    result.innerHTML=`${first.value} - ${second.value} = ${first.value-second.value}`
})
btn3.addEventListener('click', (event) =>{
    result.innerHTML=`${first.value} * ${second.value} = ${first.value*second.value}`
})
btn4.addEventListener('click', (event) =>{
    result.innerHTML=`${first.value} / ${second.value} = ${first.value/second.value}`
})

