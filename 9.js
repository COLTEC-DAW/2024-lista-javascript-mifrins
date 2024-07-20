function reverseArray(array){
    let vetorNovo = new Array();
    for(contagem = array.length - 1; contagem >= 0; contagem--){
        vetorNovo.push(array[contagem]);
    }
    return vetorNovo
}

console.log(reverseArray(new Array(1, 2, 9, 0)));