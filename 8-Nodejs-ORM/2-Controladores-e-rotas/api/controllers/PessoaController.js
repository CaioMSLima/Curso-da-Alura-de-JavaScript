const database = require("../models/index.js")

class PessoasController{

    //O metodo Static não pode ser  instânciada por classe.
    // em vez disso, eles são acessados na própria classe.
    //Async/await, esse método precisa esperar resolver 
    //alguns outros métodos internos para então devolver a resposta
    
    static async pegaTodasAsPessoas(req,res){

        try{
            //Vai consultar a tabela de pessoas e trazer tudo
            const todasAsPessoas = await database.Pessoas.findAll();
    
            return res.status(200).json(todasAsPessoas);

        }catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoasController;