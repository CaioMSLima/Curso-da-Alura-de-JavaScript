import app from "./src/1-app.js";

// é a constante que vai identificar a porta que está sendo escutada a requisição 
// cons port = process.end.PORT | | 3000; 
// Já vamos deixar com essa boa prática de diferenciar 
// ou a porta no ambiente de produção 
// ou a porta fixa que é a porta 3000

const port = process.env.PORT || 3000;


app.listen(port, () => {

    console.log(`Servidor escutando em http://localhost:${port}`)
})

