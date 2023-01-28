const { where } = require("sequelize");
const database = require("../models/index.js")

class TurmaController{

    //O metodo Static não pode ser  instânciada por classe.
    // em vez disso, eles são acessados na própria classe.
    //Async/await, esse método precisa esperar resolver 
    //alguns outros métodos internos para então devolver a resposta
    
    static async pegaTodasAsTurma(req,res){

        try{
            //Vai consultar a tabela de Turma e trazer tudo
            const todasAsTurmas = await database.Turmas.findAll();
    
            return res.status(200).json(todasAsTurmas);

        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaTurma(req,res){

        const {id} = req.params

        try {

            //Vai consultar a tabela de Turma e trazer uma
            //O primeiro id é a coluna id e o segundo é a variavel, ou a linha
           const umaTurma = await database.Turmas.findOne({
            where:{
                id: Number(id)
            }})

            return res.status(200).json(umaTurma)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaTurma(req,res){
        //Armazenar justamente os dados que vamos enviar no corpo da nossa requisição
        const novaTurma = req.body
        
        try {
            const novaPessoaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //atualizar um registro
    static async atualizaTurma(req,res){

        const {id} = req.params
        const novasInfos =  req.body

        try{
            await database.Turmas.update(novasInfos,{where:{id: Number(id)}})
            const TurmaAtualizada = await database.Turmas.findOne({ where:{id: Number(id)}})
            
            return res.status(200).json(TurmaAtualizada)

        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar um registro
    static async deletaTurma(req,res){

        const {id} = req.params

        try{
            const deletaTurma = await database.Turmas.destroy({where:{id: Number(id)}})

            return res.status(200).json({mensagem:`id: ${id} deletado `})
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TurmaController;