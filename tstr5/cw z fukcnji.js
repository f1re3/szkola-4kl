//1
function tellFortune(nc, pn, gl, jt){
    console.log(`You will be a ${jt} in ${gl}, and married to ${pn} with ${nc} kids`);
}

tellFortune(3, 'kaska', 'naklo', 'mechanic');

//2
function calculateDogAge(ha){
    let pa = ha*7;
    console.log(`Your doggie is ${pa} years old in dog years!`);
}

calculateDogAge(2);

//3
function calculateSupply(age, apd){
    const ma = 100;
    console.log(`You will need ${(ma - age)*365*apd} to last you until the ripe old age of ${ma}`);
}
calculateSupply(12, 2);

//4
function calcCircumfrence(radius){
    console.log(`The circumference is ${2*radius*3.14}`);
}

function calcArea(radius){
    console.log(`The area is ${radius*radius*3.14}`);
}

calcCircumfrence(5);
calcArea(5);

//5
function celsiusToFahrenheit(C){
    console.log(`${C}°C is ${C*33.8}°F`);
}

function fahrenheitToCelsiu(F){
    console.log(`${F}°F is ${F/33.8}°C`);
}

celsiusToFahrenheit(5);
fahrenheitToCelsiu(158);

//6
function reverseNum(number){
    return number - number*2;
}

console.log(reverseNum(125));
console.log(reverseNum(265));