import { createServer } from "node:http";


const serveur = createServer((req, res) => {
  res.end("Salutation");
});

serveur.listen('8888')