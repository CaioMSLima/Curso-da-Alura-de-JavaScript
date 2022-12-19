 // Object.values e retornar, dentro de um array, apenas o valor de cada uma deles.
    // com o método join(). Ele é responsável por converter o conteúdo de arrays em strings.

import chalk from "chalk";

function extrairLinks(arrLinks){

   return arrLinks.map((objetoLisk) => Object.values(objetoLisk).join())
}


 // para trabalhar com o Fetch que so funciona na versão 18 do node
    //  fazer a requisição nos links e, a partir disso, 
    // trazer o status code, seja ele 200, 404 ou qualquer que seja.
    // Fetch é uma função que existe para lidar com um recurso por vez
    // Como passamos para dentro dele, com a ajuda de map, 
    // uma lista de recursos, ele não consegue resolvê-la
    // para resolver isso, usaremos o método do objeto promise
    // Vamos igualá-la a await Promise.all()

async function checaStatus(listaURls){
    
    const arrStatus = await Promise.all(
        
         listaURls.map(async (url) =>{

        try{
            
            const response = await fetch(url)
            return response.status;

        }catch(erro){

            return manejaErro(erro);
        }
    }));

    
}

function manejaErro(erro){

   if(erro.case.code === "ENOTFOUND"){
        
        return "Link não encontrado";
   }else{

        return "Ocorreu algum erro"
   }
}

export default async function listaValidada (listaDeLinks){

    const links = extrairLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((Objecto, indice) => ({
        ...Objecto,
        status: status[indice]
    }));
}