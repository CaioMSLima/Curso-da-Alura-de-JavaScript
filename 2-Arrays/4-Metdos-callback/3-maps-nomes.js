const nomes = ["caio Lima", "Buce wayne","HALL jordam"]

const nomesPadronizados =nomes.map((nome) =>  nome.toUpperCase());

console.log(nomesPadronizados);

//Outro metodo 

const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
   }

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)