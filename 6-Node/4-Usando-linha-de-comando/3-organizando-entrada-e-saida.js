import pegaArquivo from "./1-principal.js";
import chalk from "chalk";

const caminho = process.argv;

//Ao contrário do esperado, teremos como retorno o texto "lista de links" em amarelo. 
// Ao invés do array com nossa lista, temos o retorno Promise { <pending> }.
//Porque a funcao importada é assincrona 
//A função processaTexto, em "cli.js", também precisa ser uma função assíncrona. 
// Para resolvermos isso, precisamos informar que a função agora é assíncrona, 
// adicionando async antes da função processaTexto.
// Na constante resultado, adicionamos await antes de pegaArquivo:

async function processaTexto(caminho){

    const resultado = await pegaArquivo(caminho[2])
    console.log(chalk.bgYellowBright("lista de links"),resultado);
}

processaTexto(caminho);



