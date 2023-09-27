//1
function trojkat(a,b){
    return 0.5*a*b;
}

console.log(trojkat(3,2));

const trojkat2 = (a,b) => {return 0.5*a*b;}

console.log(trojkat2(4,8))

//2
function czyrowne(x,y){
    if(x==y)
        return true;
    else
        return false;
}

console.log(czyrowne(3,6));
console.log(czyrowne(6,6));
console.log(czyrowne(9,6));

//3
function pierwszy(a){
    return a[0];
}

console.log(pierwszy([2,31,23,121,124]));
console.log(pierwszy([23,121,124]));
console.log(pierwszy([31,23,121,124]));

//4
function calculateSupply(age, apd){
    const maxAge = 100;

    console.log(`You will need ${maxAge-age*apd} to last you until the ripe old age of ${maxAge-age}`);
}

calculateSupply(23,2);
calculateSupply(12,8);
calculateSupply(98,4);

//5
function average(a,b){
    return (a+b)/2
}

console.log(average(2,6));
console.log(average(544,4));
console.log(average(6546,54));

//6
function halfOf(x){
    return x*0.5;
}

console.log(halfOf(3));
console.log(halfOf(254));
console.log(halfOf(8));

//7
function tellFortune(noc,pn,gl,jt){
    console.log(`You will be a ${jt} in ${gl}, and married to ${pn} with ${noc} kids`);
}

tellFortune(3,'blazej','mexico','mechanic');
tellFortune(5,'dorian','new orlean','none');
tellFortune(7,'kopiszek','ny','yes');