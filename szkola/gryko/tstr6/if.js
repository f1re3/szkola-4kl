//1
function table(list){
    return list[0];
}

console.log(table([1,2,3,4,5]));
console.log(table([5,34,534,5,345,43]));

//2
function lessthan100(a,b){
    if(a+b>100){
        return true;
    }
    else{
        return false;
    }
}

console.log(lessthan100(126, 54));
console.log(lessthan100(5,92));

//3
function ifequal(x,y){
    if(x==y)
        return true;
    else
        return false;
}

console.log(ifequal(2,2))
console.log(ifequal(3,21123))
console.log(ifequal(10000,10000))
console.log(ifequal(32,32))

//4
function ifeven(a){
    if(a%2)
        return false;
    else
        return true;
}

console.log(ifeven(2))
console.log(ifeven(5))
console.log(ifeven(123))
console.log(ifeven(1209381230))

//5
function connect(name, surname){
    return name + surname;
}

console.log(connect('daniel', 'sobiech'));

//6
function pay(a,b,c){
    return paymax(a,b,c) - paymin(a,b,c)
}
function paymax(a,b,c){
    if(a>b){
        if(a>c)
            return a;
        else
            return c;
    }
    else{
        if(b>c){
            if(a>b)
                return a;
            else
                return b;
        }
        else
            return c;
    }
        
}
function paymin(a,b,c){
    if(a<b){
        if(a<c)
            return a;
        else
            return c;
    }
    else{
        if(b<c){
            if(a<b)
                return a;
            else
                return b;
        }
        else 
            return c;
    }
}

console.log(pay(147,33,526));
console.log(pay(33,72,74));

//7
function iftriangle(x,y,z){
    const cos = [x,y,z];
    cos.sort();
    if(cos[2]<cos[0]+cos[1])
        return true;
    else
        return false;
}

console.log(iftriangle(2,3,4));
console.log(iftriangle(4,3,8));