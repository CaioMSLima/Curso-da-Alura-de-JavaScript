import pegaArquivo from "./1-principal.js";

//No terminal
// O primeiro foi node, que acessa a pasta onde estão o executados do Node.js.
//  Com esses executáveis, ele compreende o que está em "cli.js", 
// executar o arquivo e retornar, na tela, o que precisamos.

// O segundo item do array se refere ao segundo argumento passado para o terminal, 
// que é um caminho de arquivo, que retorna "cli.js".
// no pront digite node .\1-cli.js ../arquivos/texto.md

const caminho = process.argv;

pegaArquivo(caminho[2]);

