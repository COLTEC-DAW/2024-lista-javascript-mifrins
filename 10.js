class list{
    constructor(value, rest) {
        this.value = value;
        this.rest = rest;
    }
}

function toList(array){
    let lista = new list(null, null);
    let elementoAtual = lista;
    let contagem;
    for(contagem = 0; contagem < array.length - 1; contagem++){
        elementoAtual.value = array[contagem];
        elementoAtual.rest = new list(null, null);
        elementoAtual = elementoAtual.rest;
    }
    elementoAtual.value = array[array.length - 1];
    return lista;
}

console.log(toList(new Array(3, 8, 9, 7)));