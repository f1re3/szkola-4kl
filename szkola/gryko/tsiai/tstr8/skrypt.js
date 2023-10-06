//1
function toLow(a){
    return a.toLowerCase();
}

console.log(toLow('ghJHGjhgJGJhgjhG'));

//2
function dluzsze(a,b){
    if(a.lenght > b.lenght)
        return a;
    else
        return b;
}

console.log(dluzsze('tojestdodlzsze', 'tojesttokrotsze'));

function czyjest(a){
let n=a.indexOf(`@`)
if (n>=0)
    return `malpa znaleziona na pozcji ${n}`
else
    return `nie ma malpy`
    
}
    
console.log(czyjest(`ala@poczta.pl`))
console.log(czyjest(`alapoczta.pl`))

//4
function firstFive(a){
    return a.substr(0-5)
}

console.log(firstFive('asdfsda'))
console.log(firstFive('trgbhr'))
console.log(firstFive('wadsadazx'))