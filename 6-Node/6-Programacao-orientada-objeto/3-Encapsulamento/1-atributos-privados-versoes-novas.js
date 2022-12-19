import Adimin from "../2-Classes-e-herança/3-adicionando-metodos.js"
import Docente  from "../2-Classes-e-herança/4-adicionado-metodos-parte-2.js"

class User{

    //quisermos proteger a classe nome, dizer que nome agora é uma classe privada, 
    //colocamos uma cerquilha(#) antes de nome
    //recisamos declarar essa variável logo na primeira linha da classe, 
    //então vou declarar #nome

    #nome
    #email
    #nascimento
    #role 
    #ativo
    
    constructor(nome,email,nascimento,role,ativo = true){

        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudate"
        this.#ativo = ativo
    }

    exibirInfos(){

        return `${this.#nome}, ${this.nascimento}`;
    }
}

//. Nome com cerquilha e nome sem cerquilha, são propriedades diferentes, 
//o JavaScript não reconhecer nome com cerquilha como a mesma coisa que nome.

const novoUser = new User("Kent Nelson","fate@gmail.com","1900-05-23");
console.log(novoUser.exibirInfos());

//da erro
// novoUser.#nome = "porta";

