const bodyParser = require("body-parser");
const pessoas  = require("./pessoasRoute.js");

//Isso é uma função
module.exports = (app) =>{

    app.use(bodyParser.json())
    app.use(pessoas)
}