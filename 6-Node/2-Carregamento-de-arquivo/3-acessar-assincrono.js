import fs from "fs";
import chalk from "chalk";

// promisses com then()

function trataErro(erro){

    throw new Error(chalk.red(erro.code,"Não há arquivo no diretório"));
}


function pegaArquivo(caminhoDoArquivo){

    const encoding = "utf-8";

    // primeira forma consiste na utilização do método then, que serve para encadear código assíncrono.
    // catch, que serve para pegar erros de forma assíncrona. 
    fs.promises
        .readFile(caminhoDoArquivo,encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch( trataErro)
}

 pegaArquivo("../arquivos/texto.md");
