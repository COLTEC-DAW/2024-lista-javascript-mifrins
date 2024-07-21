let texto = prompt("Numero de linhas");
let comprimentoTexto = texto.length;

let ehPalindromo = true;
for (let contagem = 0; contagem <= comprimentoTexto / 2; contagem++){
    //console.log(texto.charAt(contagem) + texto.charAt((comprimentoTexto - contagem) - 1));
    if(texto.charAt(contagem) != texto.charAt((comprimentoTexto - contagem) - 1)){
        ehPalindromo = false;
    }
}

if(ehPalindromo){
    console.log("\"" + texto + "\" Eh um palindromo.");
}else{
    console.log("\"" + texto + "\" Nao eh um palindromo.");
}