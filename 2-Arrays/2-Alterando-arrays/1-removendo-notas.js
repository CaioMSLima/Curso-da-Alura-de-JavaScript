const notas = [10,3,8,8.9,5.4];

//- Retira o último elemento do array.
//- Altera o array original removendo o elemento.

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas)
console.log(`A média é de ${media}.`);
