const cliente ={
    nome: "Andre",
    idade: 29,
    cpf: "34096574134",
    email: "asdf@gmail.com"
}

console.log(cliente);

//Adicionado
cliente.fone = "11954234810";

console.log(cliente);

//Alterando um existente
cliente.nome = "Ralph"

console.log(cliente);

//Deletar
delete cliente.idade

console.log(cliente)