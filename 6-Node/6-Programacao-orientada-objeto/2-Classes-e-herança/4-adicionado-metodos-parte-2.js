import User from "./1-estrutura-da-classe.js"

export default class Docente extends User{

    constructor(nome,email,nascimento,role = "docente",ativo = true ){
        super(nome,email,nascimento,role ,ativo)
    }

    aprovaEstudos(estudate, curso){

        return `estudante ${estudate} aprovado no curso ${curso}.`
    }
}

const novoDOcente = new Docente("Zatanna","zat@gmail.com","1980-01-11");
// console.log(novoDOcente.aprovaEstudos("Constantine","Decifração"))