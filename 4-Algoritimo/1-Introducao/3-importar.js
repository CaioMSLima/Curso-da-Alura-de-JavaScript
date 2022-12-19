//Esso importa alguma coisa
const livros = require("./2-exportar")

function menorValor(arrProdutos,posicao){
    
    let menor = posicao;

    for(let i = posicao; i < arrProdutos.length;i ++){
        if(arrProdutos[i].preco <  arrProdutos[menor].preco){
            menor = i;
            
        }
    }

    return menor;
}
module.exports  = menorValor;
   




