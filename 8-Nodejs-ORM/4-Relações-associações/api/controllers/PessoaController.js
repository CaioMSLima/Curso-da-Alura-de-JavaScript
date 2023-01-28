const { where } = require("sequelize");
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

    static async pegaUmaPessoas(req,res){

        const {id} = req.params

        try {

            //Vai consultar a tabela de pessoas e trazer uma
            //O primeiro id é a coluna id e o segundo é a variavel, ou a linha
           const umaPessoa = await database.Pessoas.findOne({
            where:{
                id: Number(id)
            }})

            return res.status(200).json(umaPessoa)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req,res){
        //Armazenar justamente os dados que vamos enviar no corpo da nossa requisição
        const novaPessoa = req.body
        
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //atualizar um registro
    static async atualizaPessoas(req,res){

        const {id} = req.params
        const novasInfos =  req.body

        try{
            await database.Pessoas.update(novasInfos,{where:{id: Number(id)}})
            const pessoasAtualizadas = await database.Pessoas.findOne({ where:{id: Number(id)}})
            
            return res.status(200).json(pessoasAtualizadas)

        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar um registro
    static async deletaPessoas(req,res){

        const {id} = req.params

        try{
            const deletaPessoas = await database.Pessoas.destroy({where:{id: Number(id)}})

            return res.status(200).json({mensagem:`id: ${id} deletado `})
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }


    static async pegaUmaMatricula(req,res){

        const {estudanteId,matriculaId} = req.params;

        try {

            //Vai consultar a tabela de pessoas e trazer uma
            //O primeiro id é a coluna id e o segundo é a variavel, ou a linha
           const umaMatricula = await database.Matriculas.findOne({
            where:{
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            }})

            return res.status(200).json(umaMatricula)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req,res){
        //Armazenar justamente os dados que vamos enviar no corpo da nossa requisição
        const {estudanteId} = req.params;

        //Então no objeto vai ter o ID de estudante, 
        //onde queremos inserir o dado de matrícula novo 
        //e mais as informações que passaremos no corpo da requisição.

        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}

        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req,res){

        
        const {estudanteId,matriculaId} = req.params;
        const novasInfos =  req.body

        try{
            await database.Matriculas.update(novasInfos,{
                where:{
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }})
            const matriculaAtualizada = await database.Matriculas.findOne({ where:{id: Number(matriculaId)}})
            
            return res.status(200).json(matriculaAtualizada)

        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    //deletar um registro
    static async deletaMatricula(req,res){

        const {estudanteId,matriculaId} = req.params;

        try{
            const deletaPessoas = await database.Matriculas.destroy({
                where:{ 
                    id: Number(matriculaId)
                }})

            return res.status(200).json({mensagem:`id: ${matriculaId} deletado `})
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }


}

module.exports = PessoasController;