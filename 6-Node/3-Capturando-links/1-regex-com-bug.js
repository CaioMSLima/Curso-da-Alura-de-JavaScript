import fs from "fs";
import chalk from "chalk";

const test = "A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.ão geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).[Teste de retorno 400](https://httpstat.us/404).[gatinho salsicha](http://gatinhosalsicha.com.br/)"

//Não esta trazendo todos os links
function extraiLinks(texto){

    // Dentro das chaves, criaremos a constante regex. Dentro dela, copiaremos a nossa expressão regular,
    //  englobando-a entre barras invertidas. Depois da segunda barra, vamos inserir gm e fechar um ;. 
    //  Essa é uma das maneiras de trabalhar com expressões regulares do JavaScript:

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; 
    const capturas = regex.exec(texto);

    console.log(capturas)

}

function trataErro(erro){
    throw new Error(chalk.red(erro.code,"Não há arquivo no diretório"));

}

// async/await

async function pegaArquivo(caminhoDoArquivo){

    try{
        const encoding = "utf-8";
        const texto = await fs.promises.readFile
        (caminhoDoArquivo,encoding);
    
        console.log(chalk.greenBright(texto + "\n"));
        
    } catch(erro){

        trataErro(erro);
    }
}


 extraiLinks(test);

//  \[[^[\]]*?\]
//  \(https?:\/\/[^\s?#.].[^\s]*\)
//  \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)