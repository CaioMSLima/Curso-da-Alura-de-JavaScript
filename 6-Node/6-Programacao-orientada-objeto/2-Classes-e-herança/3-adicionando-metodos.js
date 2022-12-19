import User from "./1-estrutura-da-classe.js";

export default class Adimin extends User{

    constructor(nome,email,nascimento,role = "adimin",ativo = true ){
        super(nome,email,nascimento,role ,ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}


