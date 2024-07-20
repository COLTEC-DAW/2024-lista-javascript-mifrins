function countChars(frase, c){
    let contagemCaracter = 0;
    for(let contagem = 0; contagem < frase.length; contagem++){
        if(frase[contagem] == c) contagemCaracter++;
    }
    return contagemCaracter;
}

let fraseEscolhida = prompt("Digite uma frase");
let caracterEscolhido = prompt("Escolha um caracter");
console.log("O caracter '" + caracterEscolhido + "' aparece " + countChars(fraseEscolhida, caracterEscolhido) + " vezes na frase \"" + fraseEscolhida + "\"");
