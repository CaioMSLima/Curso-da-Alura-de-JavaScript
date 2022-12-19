import fs from "fs";
import chalk from "chalk";

//Não esta trazendo todos os links
function extraiLinks(texto){

    // Dentro das chaves, criaremos a constante regex. Dentro dela, copiaremos a nossa expressão regular,
    //  englobando-a entre barras invertidas. Depois da segunda barra, vamos inserir gm e fechar um ;. 
    //  Essa é uma das maneiras de trabalhar com expressões regulares do JavaScript:

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s$.?#].[^\s\)]*)\)/gm; 
    
    // método de string
    // Teremos como retorno um objetivo iterável de strings, 
    // Object [RegExp String Iterator] {}
    // Para que tornemos esse objeto iterável, 
    // vamos usar o operador de espalhamento do JavaScript (...)

    const capturas = [...texto.matchAll(regex)];

    //Quando temos uma estrutura em que precisamos acessar um array e seu índice,
    // como a captura no índice 1, que passamos por colchetes, 
    //e quando queremos utilizar esse valor como chave de um objeto, 
    //precisamos envolvê-lo em colchetes.
    //Para que o JavaScript perceba que as chaves que abrimos não são chaves de função, 
    //mas de um objeto que estamos criando, englobamos todo o objeto criado por parênteses.

    const resultados = capturas.map(captura =>({[captura[1]]: captura[2]}));

    return resultados;
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
    
        console.log( extraiLinks(texto));
        
    } catch(erro){

        trataErro(erro);
    }
}

pegaArquivo("../arquivos/texto.md");
 

//  \[[^[\]]*?\]
//  \(https?:\/\/[^\s?#.].[^\s]*\)
//  \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)