function deepEquals(obj1, obj2) {
    if (obj1 === obj2) return true;
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length != keys2.length) return false;
    for(contagem = 0; contagem < keys1.length; contagem++){
        if (!keys2.includes(keys1[contagem])) return false;  
    }

    return true;
}

class classe1{
    constructor(valor) {
        this.quantidade = valor;
        this.valor = valor;
        this.numero = valor;
        this.quantia = valor;
    }
}

class classe2{
    constructor(valor) {
        this.valor = valor;
        this.numero = valor;
        this.quantidade = valor
    }
}

let objeto1 = new classe1;
let objeto2 = new classe2;

console.log(deepEquals(objeto1, objeto2));