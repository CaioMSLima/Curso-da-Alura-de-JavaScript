export default class User{

    constructor(nome,email,nascimento,role,ativo = true){

        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudate"
        this.ativo = ativo
    }

    exibirInfos(){

        return `${this.nome}, ${this.nascimento}`;
    }
}

const novoUser = new User("Caio", "dsfsqw@gmail.com", "2590-09-01");


