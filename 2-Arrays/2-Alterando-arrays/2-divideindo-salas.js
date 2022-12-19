
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// Copia uma parte do array para outro array.
// Vc indica o começoe o fim(pega um antes da posição colocada)
// Ele não altera o array ou list original
// Caso vc não coloque o segundo argumento ele entende que é até o final

const turmaA = alunos.slice(0,10);
const turmaB = alunos.slice((alunos.length)/2)

console.log(turmaA)
console.log(turmaB)