import  Express  from "express";
import autoresController from "../controllers/autoresController.js"

const router = Express.Router();

router
    .get("/autores", autoresController.listarAutor)
    .get("/autores/:id",autoresController.listarAutorPorId)
    .post("/autores", autoresController.cadastrarAutor)
    //dois ponto para indicar parametro do tipo
    .put("/autores/:id", autoresController.atualizarAutor)
    .delete("/autores/:id",autoresController.excluirAutor)
    
export default router;