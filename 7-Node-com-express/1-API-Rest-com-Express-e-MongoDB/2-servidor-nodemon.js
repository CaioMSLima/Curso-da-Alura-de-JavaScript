const http = require("http")
const port = 3000;


//objeto chamado "rotas" e o objeto tem a característica de ser chave valor,
// vou ter, por exemplo, se ele chamar a rota básica sem nada vou exibir aquela mensagem, 
//const rota = { '/': 'Curso de Node'. Se ele chamar
// Se ele chamar '/livros': 'Entrei na pag de livros', 
// E se chamar '/autores': 'Listagem de autores'

const rotas = {
    "/": "Curso de Node",
    "/livros": "Entre na parte de livors",
    "/autores": "Lista de autores",
    "/editora": "PAgina sobre a editora",
    "/sobre" : "Info sobre o projeto",
    "/indice": "Indice completo "
}

//  vou passar res.end(rotas[req.url]);.
//  O que vier no endereço, se no endereço vier “/livros” 
//  ele sabe que é para devolver a mensagem "Entrei na pag de livros". 
// Se vier “\autores” ele tem que  devolver a mensagem "Listagem de autores".

const server = http.createServer((req,res) =>{

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url])
})

server.listen(port, () => {

    console.log(`Servidor escutando em http://localhost:${port}`)
})

