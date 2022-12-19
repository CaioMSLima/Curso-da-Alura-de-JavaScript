
const cliente ={
    nome: 'Lian',
    idade: 29,
    cpf: '34096574134',
    email: 'asdf@gmail.com',
    fones: [ '559543219', '5531098577', '5567831635' ],
    dependentes: [
        {
            nome: 'Sara', 
            parentesco: 'filha', 
            dataNasc: '14/01/2018'
        },
        {
            nome: "Luiza",
            parentesco: "filha",
            dataNasc: "12/09/1980"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
   
}

console.log(cliente.saldo);

cliente.depositar(400);

console.log(cliente.saldo);


