import { createServer } from "node:http";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { runMongoClient } from "./mongodb.js";


dotenv.config();

const serveur = createServer((req, res) => {
  //res.end("test");
});


serveur.on('listening', () => {
  console.log('Serveur Ecoute')
  runMongoClient().catch(x=>console.log(x))
});

serveur.listen(`${process.env.SERVEUR_PORT}`);