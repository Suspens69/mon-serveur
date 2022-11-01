import { createServer } from "node:http";


const serveur = createServer((req, res) => {
  console.log(req)
  res.end("Salutation");
});

serveur.listen('8888')