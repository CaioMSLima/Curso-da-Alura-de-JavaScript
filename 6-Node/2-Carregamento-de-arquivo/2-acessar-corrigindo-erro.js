import fs from "fs";
import chalk from "chalk";

function trataErro(erro){
    // A palavra chave throw, que significa lançar, em português.
    // Usamos essa terminologia porque vamos "lançar" erros para fora do programa.

    throw new Error(chalk.red(erro.code,"Não há arquivo no diretório"));
}

function pegaArquivo(caminhoDoArquivo){
    
    const encoding = "utf-8";

    
    
    fs.readFile(caminhoDoArquivo, encoding,(erro,texto) =>{
        
        if (erro){

            console.log(erro);

            trataErro(erro);

        }
        console.log(chalk.green(texto));
    });
}

pegaArquivo("arquivos");
