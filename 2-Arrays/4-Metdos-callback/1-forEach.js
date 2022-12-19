const notas = [300, 50.5, 20, 274];

let somaNotas = 0;

notas.forEach(function(nota,indice){

    somaNotas += nota;
    console.log(indice); 

})

console.log(somaNotas + "\n") ;

//Com arrow function

const marvel = ["Venom", "Hulk", "Loki","Motoqueiro fantasma"]

marvel.forEach((personagens) =>{

    console.log(personagens);

})

//Outra maneira.

console.log("\n")

function imprimiNome(personagens){

    console.log(personagens)
} 

marvel.forEach(imprimiNome);