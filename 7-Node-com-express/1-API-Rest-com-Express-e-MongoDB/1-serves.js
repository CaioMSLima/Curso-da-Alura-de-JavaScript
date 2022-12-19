const http = require("http")
const port = 3000;

// req para representação requisição e o res para representar a resposta.
// Vamos dizer que ele vai devolver um status 200, que é um status de "ok"
// e eu vou colocar qual é o tipo de conteúdo que estou mandando
//devolvendo a representação de um recurso ela pode ser em JSON, 
//pode ser texto, pode ser HTML, eu vou dizer que quero devolver um texto. 
//O meu content type vai ser texto
// Eu vou fazer um res.end mandando o texto que quero enviar para o navegador. 


const server = http.createServer((req,res) =>{

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Curso de Node")
})

// o server.listen para dizer que ele vai escutar a requisição e 
// dizer em qual porta que ele vai escutar, essa informação está na minha variável port.
//Vou colocar server.listen(port, => { e um console.log para ele logar 
//que está escutando requisição na porta 3000.

server.listen(port, () => {

    console.log(`Servidor escutando em http://localhost:${port}`)
})

