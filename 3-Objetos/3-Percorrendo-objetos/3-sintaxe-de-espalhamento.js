
const clientes = [{
        nome: 'Laura',
        idade: 39,
        cpf: '4523242344',
        email: 'gfdsad@gmail.com',
        fones: [ '559502321', '5541028577', '5517834635' ],
        dependentes: [
            {
                nome: 'Samuel', 
                parentesco: 'filho', 
                dataNasc: '30/03/2018'
            },
            {
                nome: "Luiz",
                parentesco: "filho",
                dataNasc: "12/12/2012"
            }
        ],
        saldo: 1400,
        depositar: function(valor){
            this.saldo += valor
        }
    },
    {
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
                dataNasc: "12/09/2015"
            }
        ],
        saldo: 100,
        depositar: function(valor){
            this.saldo += valor
        }
    }
]
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];
console.log(listaDependentes);

let listaDependentes2 = [];

for(let i = 0; i < clientes.length; i ++){

    listaDependentes2 += [...clientes[i].dependentes];
}
console.log(listaDependentes);
