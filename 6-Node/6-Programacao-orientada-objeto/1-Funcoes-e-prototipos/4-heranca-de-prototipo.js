
const user = {

    nome: "Dan Brown",
    email: "brown@gmail.com",
    nascimento: "2022/12/12",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email,this.nascimento,
            this.role,this.ativo)
    }

}

const adimin = {

    nome:"Robert langton",
    email: "robert@gmail.com",
    role: "admin",
    criarCurso(){

        console.log("Curso criado")
    }

}


// setPrototypeOf leva dois parâmetros, 
// o primeiro parâmetro é o objeto que eu quero usar, 
// que eu quero herdar propriedades

Object.setPrototypeOf(adimin,user);
adimin.criarCurso();
adimin.nascimento = "1900/04/09"
adimin.exibirInfos();