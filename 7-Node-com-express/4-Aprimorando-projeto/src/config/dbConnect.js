import mongoose from "mongoose";

//Conectar o seu mongoDB Atlas com seu codigo
//Esse lick fica em conection
mongoose.connect("mongodb+srv://caio:123@text.vkp7czh.mongodb.net/text-node")

let db = mongoose.connection;

export default db;