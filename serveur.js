import { createServer } from "node:http";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


dotenv.config();

const serveur = createServer((req, res) => {
  console.log(req)
  res.end("test");
});

serveur.listen(`${process.env.SERVEUR_PORT}`)