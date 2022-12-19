const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// 1. O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
// 2. A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual.
// 3. A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return

function calculaMedia(notaDaSala){
    const somaDasNotas = notaDaSala.reduce((acumulador,nota) => {
        return acumulador + nota ;
    },0);

    const media = somaDasNotas / notaDaSala.length;

    return media;
}

console.log(`A média da sala JS ${calculaMedia(salaJS)}`)
console.log(`A média da sala Java ${calculaMedia(salaJava)}`)
console.log(`A média da sala Python ${calculaMedia(salaPython)}`)

const numeros = [43, 50, 65, 12]

function operacaoNumerica(acc, atual) {

    return atual + acc
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)
   
   console.log( soma)