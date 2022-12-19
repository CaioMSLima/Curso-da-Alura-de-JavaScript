function User(nome, email){

    this.nome = nome,
    this.email = email,

    this.exibirInfos= function(){

        return `${this.nome}, ${this.email}`
    };
}


//Criando um objeto com construtor
const novoUser = new User("Caio", "caio@gmail.com");
console.log(novoUser.exibirInfos());

//Criando um objeto call

function Admin(role){

    User.call(this,"Caio","caio@gmail.com");
    this.role = role || "estudante";
}

//Passamos para dentro da propriedade prototype de admin, 
//as propriedades de user, então estamos criando um objeto 
//e passando como parâmetro a propriedade protótipo de user, 
//da função user. propriedades de user para dentro de admin, 
//então user está agindo como protótipo de admin

Admin.prototype = Object.create(User.prototype);
const novoUser1 = new Admin("admin");

console.log(novoUser1.exibirInfos());
console.log(novoUser1.role);

// Esse modelo é o mais comum
const firstName = {
    init: function(nome,email){
        this.nome = nome
        this.email = email
    },
    exibirInfos:function(){
        return this.email;
    }
}

const newUser = Object.create(firstName);
newUser.init("Caio","cdsad@gmail.com");

console.log(newUser.exibirInfos());
//isPrototypeOf testa se um é prototipo do outro
console.log(firstName.isPrototypeOf(newUser));