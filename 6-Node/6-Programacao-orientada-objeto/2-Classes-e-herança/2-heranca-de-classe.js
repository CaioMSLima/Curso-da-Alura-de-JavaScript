import User from "./1-estrutura-da-classe.js";

class Adimin extends User{

    constructor(nome,email,nascimento,role = "adimin",ativo = true ){
        super(nome,email,nascimento,role ,ativo)
    }
}

const novoAdmin = new Adimin("Kent Nelson","fate@gmail.com","1900-05-23");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());