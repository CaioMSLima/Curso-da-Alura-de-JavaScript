// Prâmetro de função

function soma(n1 , n2){
    return n1 + n2;
}

console.log(soma(3,4))
console.log(soma(378,-56))
console.log(soma(0.3666,4009.1))

//Parâmetros x Argumentos
// ordem dos parâmetros

function nomeIdade(nome , idade){
    return `meu nome é ${nome} e minha idade ${idade}`;
}

console.log(nomeIdade(21,"Caio"))

// coloca os valores para caso algum nao seje prenechido tem um valor  defaut
function multiplicar(n1 = 1,n2 = 1){
    return n1 * n2;
}

let multiplica = multiplicar(soma(5,4),soma(3,3));

console.log(multiplicar(soma(5,4)))

