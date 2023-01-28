import express from "express";
import  bodyParser from "body-parser";

const app = express();


//Pega todos os dados que chegarão via requisições, convertendo para Json  
//e passando em diante para ser usado pelo restante da aplicação
app.use(bodyParser.json());

const port = 3000

app.get("/teste", (req,res) => res
    .status(200)
    .send({mensage: "Bem vindo à API"})
)

app.listen(port,() => console.log(`servidor está rodando na porta ${port}`))

export default app