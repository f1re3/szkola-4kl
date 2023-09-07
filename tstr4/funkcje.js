//1
function welcome (firstName){
    console.log(`witam. ${firstName} - milego dnia zycze!`)
}

welcome("cos");

//2
function ratio (a, b){
    return a*b;
}

console.log(ratio(34, 99));
console.log(ratio(33, 7));

//3
function kw(x){
    return x*x;
}

const x=345;
const y=678;

console.log(kw(x), kw(y), kw(x)*kw(y))

//4
function cost(m, cm=10, kf=500){
    console.log(`koszt malowania pokoju o powierzchni ${m} wynosi razem ${m*cm+kf}`);
    console.log(`cena za metr${cm} a koszt farby ${kf}`);
}

cost(30,10,300);
cost(20);