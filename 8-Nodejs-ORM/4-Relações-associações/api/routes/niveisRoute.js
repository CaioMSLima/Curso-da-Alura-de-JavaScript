const {Router} = require("express")
const NivielController = require("../controllers/NivelController.js")

const router = Router()

router.get("/niveis", NivielController.pegaTodosNiveis)
router.get("/niveis/:id",NivielController.pegaUmNivel)
router.post("/niveis",NivielController.criaNivel)
router.put("/niveis/:id",NivielController.atualizaNivel)
router.delete("/niveis/:id",NivielController.deletaNivel)

module.exports = router


