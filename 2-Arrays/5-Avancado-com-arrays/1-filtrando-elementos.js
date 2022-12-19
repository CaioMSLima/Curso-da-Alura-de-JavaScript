const alunos = ["Brainiac","Bizarro","Oliver Quin","Diana"];
const notas = [10, 0.5, 7, 9];

const reprovados = alunos.filter((aluno, indice) =>{
    
    return notas[indice] < 7;

});

console.log(reprovados)