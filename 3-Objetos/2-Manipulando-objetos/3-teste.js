const cliente ={
    nome: 'Lian',
    idade: 29,
    cpf: '34096574134',
    email: 'asdf@gmail.com',
    fones: [ '559543219', '5531098577', '5567831635' ],
    dependentes: 12
       
      
  };

  cliente.dependentes =  [{
    nome: 'Sara', 
parentesco: 'filha', 
dataNasc: '14/01/2018'
},{
    nome: "Luiza",
    parentesco: "esposa",
    dataNasc: "12/09/1980"
  }
 ]
 
 cliente.dependentes.push({
    nome: "sadfad",
    parentesco: "esposa",
    dataNasc: "12/09/1980"
  })
console.log(cliente)


  