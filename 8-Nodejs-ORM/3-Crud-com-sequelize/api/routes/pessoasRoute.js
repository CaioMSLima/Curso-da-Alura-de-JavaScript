//Ruter é uma ferramenta do express
const  {Router}  =  require("express")
const PessoaController = require("../controllers/PessoaController.js")

const router = Router()

router.get("/pessoas", PessoaController.pegaTodasAsPessoas)
//Os dois pontos (:) indicam que vai ter um parâmetro,
//que ele vai procurar com esse nome
router.get("/pessoas/:id", PessoaController.pegaUmaPessoas)
router.post("/pessoas", PessoaController.criaPessoa)
router.put("/pessoas/:id", PessoaController.atualizaPessoas)
router.delete("/pessoas/:id", PessoaController.deletaPessoas)

module.exports = router