for(let contagem = 1; contagem <= 100; contagem++){
    let sons = " ";
    if(contagem % 3 == 0) sons = sons.concat("Fizz");
    if(contagem % 5 == 0) sons = sons.concat("Buzz");
    console.log(contagem + sons);
}