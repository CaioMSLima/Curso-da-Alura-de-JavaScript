const listaLivros = require("../2-Merge-sort/1-array")

function encontraMenores(pivo,array){

    let menores = 0

    for(let i = 0; i < array.length; i ++){

        let produtoAtual = array[i];

        if( produtoAtual.preco < pivo.preco){
            
            menores ++
        }
    }

    trocaLugar(array,array.indexOf(pivo), menores)

    return array;
}

function trocaLugar(array,de,para){

    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1;
    array[de] = elem2;
}

console.log(encontraMenores(listaLivros[2],listaLivros));

module.exports = trocaLugar;