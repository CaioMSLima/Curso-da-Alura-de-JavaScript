import Express  from "express";
import livros from "./livorsRoutes.js";
import autores from "./autoresRoutes.js";


const routes = (app) =>{

    app.route("/").get((req,res) => {
        res.status(200).send({titulo: "Livraria Grasep"})
    })

    app.use(
        Express.json(),
        livros,
        autores
    )
}

export default routes