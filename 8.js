function range(min, max, i){
    let vetor = new Array();
    for (contagem = 1; contagem < (max - min) / i; contagem++){
        vetor.push(min + (i * contagem));
    }
    return vetor;
}

let numeroMax = parseInt(prompt("numero max"));
let numeroMin = parseInt(prompt("numero min"));
let intervaloVariacao = parseInt(prompt("Intervalo de variação"));

console.log(range(numeroMin, numeroMax, intervaloVariacao));