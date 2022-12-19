
const cliente ={
    nome: "Andre",
    idade: 29,
    cpf: "34096574134",
    email: "asdf@gmail.com"
}

const chaves = ["nome","idade","cpf", "email"];

console.log(cliente[chaves[0]] +"\n");

chaves.forEach((info) => console.log(cliente[info]));

console.log("\n" + cliente["idade"]);