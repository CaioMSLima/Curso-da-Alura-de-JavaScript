//For of é parecido com o for each
//Percorre o Array do inicio ao fim

const dc = ["Coringa","Adão Negro","Flash","Dark Side"]

for(let personagens of dc){

    console.log(personagens)

}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

console.log(somaDasNotas);