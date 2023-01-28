const { where } = require("sequelize");
const database = require("../models/index.js")

class NivelController{

    //O metodo Static não pode ser  instânciada por classe.
    // em vez disso, eles são acessados na própria classe.
    //Async/await, esse método precisa esperar resolver 
    //alguns outros métodos internos para então devolver a resposta
    
    static async pegaTodosNiveis(req,res){

        try{
            //Vai consultar a tabela de Niveis e trazer tudo
            const todosOssNiveis = await database.Niveis.findAll();
    
            return res.status(200).json(todosOssNiveis);

        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req,res){

        const {id} = req.params

        try {

            //Vai consultar a tabela de Niveis e trazer uma
            //O primeiro id é a coluna id e o segundo é a variavel, ou a linha
           const umNivel = await database.Niveis.findOne({
            where:{
                id: Number(id)
            }})

            return res.status(200).json(umNivel)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaNivel(req,res){
        //Armazenar justamente os dados que vamos enviar no corpo da nossa requisição
        const novoNivel = req.body
        
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //atualizar um registro
    static async atualizaNivel(req,res){

        const {id} = req.params
        const novasInfos =  req.body

        try{
            await database.Niveis.update(novasInfos,{where:{id: Number(id)}})
            const NiveisAtualizadas = await database.Niveis.findOne({ where:{id: Number(id)}})
            
            return res.status(200).json(NiveisAtualizadas)

        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar um registro
    static async deletaNivel(req,res){

        const {id} = req.params

        try{
            const deletaNiveis = await database.Niveis.destroy({where:{id: Number(id)}})

            return res.status(200).json({mensagem:`id: ${id} deletado `})
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = NivelController;