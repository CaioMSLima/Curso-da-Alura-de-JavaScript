const livros = require("../1-Introducao/2-exportar");
const menorValor = require("../1-Introducao/3-importar");

//Ordenando a lista do menor para o maior

for(let i = 0; i < livros.length; i ++){

    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log("livro atual ", livros[i]);
    let livroMenorPreco = livros[menor];
    console.log("livro menor preço ", livros[menor]);

    //Trocando de  posicao de  produtos
    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros);