const vilioes = ["Coringa","Sinestro","Flash Reverso","Trigon" ];
const herois  = ["Batiman","Hal Jordan","Flash","Ravena"];

const listaDeViloesEHerois = [vilioes,herois];

function exibindoVilaoEHeroi (vilao){
    if(listaDeViloesEHerois[0].includes(vilao)){
        
        // const viloes =  listaDeViloesEHerois[0];
        // const herois =  listaDeViloesEHerois[1];
        //  Essas duas a cima é a mesma coisa que a de baixo:

        const [viloes, herois] = listaDeViloesEHerois;

        const index = viloes.indexOf(vilao);

        console.log(`\n O ${vilao} tem como arqui-inimigo ${herois[index]}\n`);

    } else{
        console.log("\nO vilão não encontrado!\n");

    }
}

exibindoVilaoEHeroi("Trigon");

exibindoVilaoEHeroi("Zod");