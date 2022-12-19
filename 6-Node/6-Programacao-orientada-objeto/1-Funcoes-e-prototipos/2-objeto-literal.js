const user = {

    nome: "Dan Brown",
    email: "brown@gmail.com",
    nascimento: "2022/12/12",
    role: "adimin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email,this.nascimento,
            this.role,this.ativo)
    }

}

user.exibirInfos();

const exibir = function(){
    console.log(this.nome);
}

// eu vou prender bind a função exibir, a user, ao meu objeto user. 
//Então passo no parâmetro de bind um objeto que eu vou usar como contexto.
// a variavel com bind vai funcionar "exibirNomes" 
// e a sem bind naõ funciona "exibir"

const exibirNomes = exibir.bind(user);

exibirNomes();
exibir();

