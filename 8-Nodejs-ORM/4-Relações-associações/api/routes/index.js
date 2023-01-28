const bodyParser = require("body-parser");
const pessoas  = require("./pessoasRoute.js");
const niveis = require("./niveisRoute.js")
const turma = require("./turmasRoute")

//Isso é uma função
module.exports = (app) =>{

    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turma
    )
  
    
}