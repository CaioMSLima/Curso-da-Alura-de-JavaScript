const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// O primeiro é o índice do elemento que queremos remover
// O  segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice.
// O terceiro parâmetro é o que vc quer inserir

nomes.splice(1,2,"Rodrigo")

console.log(nomes)

let animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)