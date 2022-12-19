const listaLivros = require("./1-array");


function mergeSort(array, nivelAlinhameto = 0){

    console.log("Nível de alinhamento " + nivelAlinhameto );
    console.log(array);
    console.log("\n");

    if(array.length > 1){

        //Vai se chamar, a cada execução ela vai passar um valor cada vez menor para dentro do próprio merge sort como array,
        // e vai guardar esse resultado na const parte1 e na const parte2
        //esse processo tiver vai ser executado, enquanto o array for maior do que 1

        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0,meio),nivelAlinhameto ++);
        const parte2 = mergeSort(array.slice(meio, array.length),nivelAlinhameto ++);

        array = ordena(parte1,parte2);
    }

    return array;
}

function ordena(parte1,parte2){

    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while ((posicaoAtualParte1 < parte1.length) && ( posicaoAtualParte2 < parte2.length) ){
        
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(posicaoAtualParte1.preco < posicaoAtualParte2.preco){

            resultado.push(produtoAtualParte1);
            posicaoAtualParte1 ++

        }else{
        
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2 ++

        }
  
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2))

}
console.log(mergeSort(listaLivros));
