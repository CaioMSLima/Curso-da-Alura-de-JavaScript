const listaCPFs = ["12670934561","34096574134","63492014051"]

// const cliente = ["nome","Ander","Idade",36]

const cliente1 ={
    nome: "Andre",
    idade: 29,
    cpf: "34096574134",
    email: "asdf@gmail.com"
}

console.log(`\nNome do cliente ${cliente1.nome}, idade ${cliente1.idade}, email ${cliente1.email} e CPF ${cliente1.cpf.substring(0,3)}`)