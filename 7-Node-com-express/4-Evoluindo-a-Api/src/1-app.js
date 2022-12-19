import  Express  from "express";
import db from "./config/dbConnect.js";
import  routes from "./routes/index.js";


db.on("erro",console.log.bind(console, "Erro de conxão"))


db.once("open",() =>{
    console.log("conexão com o banco feita com sucesso")
})

const app = Express();

//Para fazer com que o App reconheça o que enviamos pelo Postman
app.use(Express.json())

routes(app);

export default app

