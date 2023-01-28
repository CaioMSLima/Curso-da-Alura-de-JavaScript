import livros from "../models/Livro.js"

class LivrosController{

    static listarLivros = (req,res) =>{
        
        // encontra os livros, popular com os dados de autor 
        //executa para ver se o status se está tudo certo
        livros.find()
            .populate("autor")
            .exec((erro,livros) =>{
                res.status(200).json(livros)
            })
        
    }

    static listarLivroPorId = (req,res) => {

        const id =  req.params.id;
        
        livros.findById(id)
        //parametro autor, só quero o nome
        .populate("autor","nome")
        .exec((err,livros) =>{

            if(err){
                res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            
            }else{
                res.status(200).send(livros);
            }
        })
    }

    static cadastrarLivros = (req,res) =>{

        let livro = new livros(req.body);

        //ver se vai acontecer algum erro caso contrario ele grava ou sava o livro no db
        livro.save((err) =>{

            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.` })
            
            //de Certo
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req,res) =>{
        
        //params => obter alguma coisa que está sendo passada lá no endereço da rota
        const id = req.params.id;

        //findByIdAndUpdate metodo do mongoose que localiza pelo Id e atualiza
        // Mongo para fazer alguma atualização usamos o $set: mais o que vou substituir.
        livros.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: "Livro atualizado com sucesso"})
            
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req,res) =>{

        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) =>{

            if(!err){
                res.status(200).send({message: "Livro removido com sucesso"})
            
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarPorEditora = (req,res) =>{

        const editora = req.query.editora
        
        livros.find({"editora": editora},{},(err,livros) =>{
            res.status(200).send(livros);
        })
    }

}

export default LivrosController