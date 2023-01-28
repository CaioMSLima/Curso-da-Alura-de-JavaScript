import autores from "../models/Autor.js"

class AutorController{

    static listarAutor = (req,res) =>{
        
     autores.find((erro, autor) =>{
            res.status(200).json(autor)
        })
    }

    static listarAutorPorId = (req,res) => {

        const id =  req.params.id;
        
     autores.findById(id,(err, autor) =>{

            if(err){
                res.status(400).send({message: `${err.message} - Id do autor não localizado`})
            
            }else{
                res.status(200).send(autor);
            }
        })
    }

    static cadastrarAutor = (req,res) =>{

        let autor = new autores(req.body);

        //ver se vai acontecer algum erro caso contrario ele grava ou sava o autor no db
        autor.save((err) =>{

            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor.` })
            
            //de Certo
            } else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req,res) =>{
        
        //params => obter alguma coisa que está sendo passada lá no endereço da rota
        const id = req.params.id;

        //findByIdAndUpdate metodo do mongoose que localiza pelo Id e atualiza
        // Mongo para fazer alguma atualização usamos o $set: mais o que vou substituir.
     autores.findByIdAndUpdate(id,{$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: "Autor atualizado com sucesso"})
            
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req,res) =>{

        const id = req.params.id;

     autores.findByIdAndDelete(id, (err) =>{

            if(!err){
                res.status(200).send({message: "Autor removido com sucesso"})
            
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

}

export default AutorController;