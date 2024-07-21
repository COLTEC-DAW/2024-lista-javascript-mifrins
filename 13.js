function criptografar(string, criterio){
    let stringCriptografada = "";
    for(contagem = 0; contagem < string.length; contagem++){
        if("a".charCodeAt(0) <= string.charCodeAt(contagem) && string.charCodeAt(contagem) <= "z".charCodeAt(0)){
            stringCriptografada = stringCriptografada.concat(String.fromCharCode((((string.charCodeAt(contagem) - "a".charCodeAt(0)) + criterio) % 26) + "a".charCodeAt(0)));
        } else if("A".charCodeAt(0) <= string.charCodeAt(contagem) && string.charCodeAt(contagem) <= "Z".charCodeAt(0)){
            stringCriptografada = stringCriptografada.concat(String.fromCharCode((((string.charCodeAt(contagem) - "A".charCodeAt(0)) + criterio) % 26) + "A".charCodeAt(0)));
        } else {
            stringCriptografada = stringCriptografada.concat(string[contagem]);
        }
    }
    return stringCriptografada;
}

console.log(criptografar("Ola! Meu nome eh Miguel... Vou dormir agora: ZzzZZzZZZ", 2));
