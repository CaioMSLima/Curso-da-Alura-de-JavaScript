import fs from "fs";
import chalk from "chalk";

function pegaArquivo(caminhoDoArquivo){
    
    const encoding = "utf-8";

    //o _ desconsidera o primerio parametro ou pular ela
    fs.readFile(caminhoDoArquivo, encoding,(_,texto) =>{

        console.log(chalk.green(texto));
    });
}

pegaArquivo("../arquivos/texto.md");