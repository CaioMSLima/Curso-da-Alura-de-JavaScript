import mongoose from "mongoose";


const livroSchema = new mongoose.Schema(
    
    //required = campo obrigatório
    {
        id:{type: String},
        titulo:{type: String, required: true},
        //o ID de um objeto a referência que vai entrar 
        //aqui é um ID de um outro objeto e não um texto em string
        // ref que é a referência, ele é um ID de entidade autores
        autor:{type: mongoose.Schema.Types.ObjectId, ref:"autores", required: true},
        editora:{type: String,required: true},
        nuemeroPagina:{type: Number}
    }
 );

 const livros = mongoose.model("livros", livroSchema);

 export default livros;