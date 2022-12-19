// call() executa a função passando valores 
// e parâmetros específicos para serem usados como contexto do this.

function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user)

// O método apply() funciona de forma semelhante ao call(),
//  porém recebe a lista de argumentos em um array:

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }

const user1 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.apply(user1, [this.nome, this.email])
    }
   }
   
user1.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com