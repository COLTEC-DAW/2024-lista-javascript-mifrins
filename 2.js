let nLinhas = parseInt(prompt("Numero de linhas"));
for (let contagem = 1; contagem <= nLinhas; contagem++){
    if(contagem % 2 == 1){
        console.log("# # # # ");
    }else{
        console.log(" # # # #");
    }
}
