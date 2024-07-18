function mod2(number){
    number = number - 2;
    if(number < 0) return false;
    if(number > 0) return mod2(number);
    return true;
}

function modf(num, mod){
    num = num - mod;
    if(num < 0) return false;
    if(num > 0) return modf(num, mod);
    return true;
}


let numero1 = parseInt(prompt("numero1:"));
let numero2 = parseInt(prompt("numero2:"));
if(mod2(numero1) == true){
    console.log(numero1 + " eh divisivel por 2.");
} else {
    console.log(numero1 + " nao eh divisivel por 2.");
}
if(modf(numero1, numero2) == true){
    console.log(numero1 + " eh divisivel por " + numero2 + ".");
} else {
    console.log(numero1 + " nao eh divisivel por " + numero2 + ".");
}