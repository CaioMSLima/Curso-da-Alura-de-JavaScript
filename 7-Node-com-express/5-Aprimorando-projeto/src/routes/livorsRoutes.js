import  Express  from "express";
import LivrosController from "../controllers/livroController.js";

const router = Express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/:id",LivrosController.listarLivroPorId)
    .post("/livros", LivrosController.cadastrarLivros)
    //dois ponto para indicar parametro do tipo
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id",LivrosController.excluirLivro)
    
export default router;