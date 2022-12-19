export default class User {

  //sempre use com isso os getters e setter
  #nome
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, email, nascimento, role, ativo = true) {

    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  set nome(novoNome){
    if(novoNome === "" || novoNome === " "){

      throw new Error("Formato não é válido")
    }

    this.#nome = novoNome
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
  }
}


const dfg = new User("Kent Nelson","fate@gmail.com","1900-05-23");

console.log(dfg.exibirInfos());

dfg.nome = "Doctor Fate"
console.log(dfg.nome)
