let preco = [25,15,20,50,45,20];
let livro = ["JS","PHP","Java","Elixir","GO","Python"]

let menor = 0;
let nome = " ";

for(let i = 0; i < preco.length; i++){
    if(preco[i] <  preco[menor]){
        menor = i;
        
    }
}

console.log(preco[menor]);
console.log(livro[menor]);