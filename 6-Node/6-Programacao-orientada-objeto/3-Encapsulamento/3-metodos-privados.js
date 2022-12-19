import Adimin from "./admin.js"
import Docente  from "./docente.js"

//ampos privados são muito bons para evitar que outras 
//partes do código acessem propriedades da classe,
// e é isso que queremos mesmo, só que eles protegem tão bem,
// que nem as subclasses, no caso Admin docentes,
// que elas deveriam poder acessar a propriedade nome
class User{

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

    #montaObjetoUser(){

        return({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos(){

        const objUser = this.#montaObjetoUser();
        return `${objUser.nome}, ${objUser.nascimento}`;
    }
}


const novoUser = new User("D","fate@gmail.com","1900-05-23");

console.log(novoUser.exibirInfos());


