const cliente ={
    nome: 'Lian',
    idade: 29,
    cpf: '34096574134',
    email: 'asdf@gmail.com',
    fones: [ '559543219', '5531098577', '5567831635' ],
    dependentes: [{
        nome: 'Sara', 
        parentesco: 'filha', 
        dataNasc: '14/01/2018'
        }
    ]   
};

cliente.dependentes.push({
        nome: "Luiza",
        parentesco: "filha",
        dataNasc: "12/09/1980"
      }
)

console.log(cliente)

const filhaMaisNova = cliente.dependentes.
filter((dependente) => dependente.dataNasc === "12/09/1980");

console.log("\n" + filhaMaisNova[0].nome)

  
