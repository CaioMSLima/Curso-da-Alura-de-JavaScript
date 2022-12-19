const notas = [10, 9.5, 8, 7 ,6]

// com map
// O map() não substitui o forEach(), ele não consegue abranger todas as situações do forEach(). 
// Porém, ele é muito útil nos casos em que queremos reescrever um array e alterar todos os valores de alguma forma.
// map() não altera o array origina

const notasAtualizadas = notas.map((nota, indice) => {

    return nota + 1 >= 10? 10 : nota + 1;
})

console.log(notasAtualizadas);

//com for each 

let notasAtualizadas2 = [];

notas.forEach(function(nota){

    nota + 1 >= 10? notasAtualizadas2.push(10) : notasAtualizadas2.push((nota + 1));

})

console.log(notasAtualizadas2)