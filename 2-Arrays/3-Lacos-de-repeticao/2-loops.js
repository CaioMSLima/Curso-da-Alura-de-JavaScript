const notas = [10, 6.5, 8 ,7.5]
let media = 0

for (let i = 0; i < notas.length; i++) {
    
  media += notas[i]/notas.length;
}

console.log("\n" + media + "\n");

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1 , notas2 , notas3];
let media1 = 0;

for( let i = 0; i < notasGerais.length; i++){

    for( let s = 0; s < notasGerais[i].length; s++){

     media1 +=notasGerais[i][s] / notasGerais[i].length;
    }
}

console.log(media1/notasGerais.length)