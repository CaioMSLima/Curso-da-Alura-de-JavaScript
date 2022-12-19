const livros = require("../1-Introducao/2-exportar");

function insertSort(lista){

    for(let i = 0; i < lista.length; i ++){

        let analise = i;

//      Tem que ser maior que 0 para nao dar erro pq n existe posição -1
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){

            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
    
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

//    Para dentro desse while que ele vai analisando e vai voltando, 
//    Isso aqui vai voltar até o momento em que essa condição do while não for mais verdadeira. 
//    Quando essa condição deixar de ser verdadeira, quer dizer que já chegamos no lugar da lista,
//    do array, onde o elemento tem que ficar. Então, aí ele vai sair do while.    

            analise --
        }
    
    }
    
    console.log(lista);
}
insertSort(livros)