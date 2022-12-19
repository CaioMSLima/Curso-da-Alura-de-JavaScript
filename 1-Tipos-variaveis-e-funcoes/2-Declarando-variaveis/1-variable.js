console.log("var");

var altura =  14;
var  comprimento = 5;

area = altura * comprimento

console.log(area);

var area;


console.log("\nlet")

let forma = "retângulo"
let altura1 = 14;
let comprimento1 = 7;
let area1;

if(forma === "retângulo"){
    area1 = altura * comprimento
}
else{
    area1 = (altura * comprimento)/ 2;
}

console.log(area1);

console.log("\nconst")

const forma2  = "retângulo"
const altura2 = 14
const comprimento2 = 7;
const area2 = 0;

//da erro pq estou atribuindo mais de u valor para uma const

if(forma === "retângulo"){
    area2 = altura2 * comprimento2
}
else{
    if(forma === "retângulo"){
        area2 = altura * comprimento
    }
    else{
        area2 = (altura * comprimento)/ 2;
    }
    
}

console.log(area2);
