const cliente ={
    nome: "Lian",
    idade: 29,
    cpf: "34096574134",
    email: "asdf@gmail.com",
    fones: ["559543219","5531098577","5567831635"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "19/01/2018"
}

console.log(cliente)

cliente.dependentes.dataNasc = "14/01/2018";

console.log(cliente)
