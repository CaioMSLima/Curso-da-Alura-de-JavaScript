import  Express  from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js"

// um bind(ligar),  nesse bind eu vou dizer que lá no console irá mostrar 
//uma mensagem erro de conexão que vai está junto com a mensagem de erro referente ao banco
db.on("erro",console.log.bind(console, "Erro de conxão"))

//Um db.once para ele tentar uma vez já fazer a abertura de conexão
db.once("open",() =>{

    console.log("conexão com o banco feira com sucesso")
})

const app = Express();

//Para fazer com que o App reconheça o que enviamos pelo Postman
app.use(Express.json())

app.get("/", (req,res) =>{
    res.status(200).send("Curso de Node")

})

app.get("/livros", (req,res) =>{
    
    livros.find((erro,livros) =>{
        res.status(200).json(livros)
    })
})

//Get id, mostra o livor de um determinado id
app.get("/livros/:id",(req,res) =>{

    let index = buscaLivro(req.params.id);
    res.json(livros[index])
})

//cria um novo livro
app.post("/livros", (req,res) =>{

    //O novo livro sera instanciado no postman
    livros.push(req.body);

    //status é 201 que dizemos que está "ok", que foi criado
    res.status(201).send("Livro foi cadastrado com sucesso")
})

//atualizar ou modificar um livro atravez do id
app.put("/livros/:id",(req,res) =>{

    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.json(livros)
})

app.delete("/livros/:id",(req,res) =>{

    //Desestruturação  requisição é um objeto se declarar uma variável Id entre chaves,
    //consigo pegar e dizer só let {id} = req.params; que ele já vai conseguir pegar exatamente 
    //isso o req.params.id e atribuir para a variável id

    let{id} = req.params
    let index = buscaLivro(id);

    //o primeiro argumento é a posiçao que vc quer deletar
    //o segundo é a quantidade

    livros.splice(index,1)
    res.send(`Livro ${id} removido com sucesso`)
})

function buscaLivro(id){

    //o findIndex precorre todo o array atraz do indice
    return livros.findIndex(livro => livro.id == id)
}

export default app