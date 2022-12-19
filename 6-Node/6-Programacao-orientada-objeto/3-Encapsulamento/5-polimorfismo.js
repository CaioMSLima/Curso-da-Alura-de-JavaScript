//As classes derivadas de uma única classe base são capazes de invocar os métodos que, 
//embora apresentem a mesma assinatura, 
//comportam-se de maneira diferente para cada uma das classes derivada

import User from "./4-getters-e-setters.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }
  
  aprovaEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso ${curso}.`
  }

//O do User ou da classe principal sem polimorfismo
//  exibirInfos() {
//     return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
//   }

//Com polimorfismo
exibirInfos() {
    return ` ${this.email}, ${this.nascimento}`
  }
}

const novoDocente = new Docente("Ravena","r@r.com","2000-06-08")
console.log(novoDocente.exibirInfos());