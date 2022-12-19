let dataEHora = Date() // utilizando a chamada de função diretamente
console.log("\n" + dataEHora)
 //Tue Nov 22 2022 10:09:01 GMT-0300 (Horário Padrão de Brasília

console.log(typeof dataEHora)
 // string

 let dataComConstrutor = new Date() // utilizando o construtor do objeto Date
console.log(dataComConstrutor)
 // 2022-11-22T13:11:09.016Z

console.log(typeof dataComConstrutor)
 // object quando utilizamos um construtor, também temos acesso a todos os métodos do objeto

 let data1 = dataComConstrutor.getDate()

console.log(data1)
//22

let fullYear = dataComConstrutor.getFullYear()

console.log(fullYear + "\n");
//2022


