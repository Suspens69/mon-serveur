### mon-serveur
## Utilisation Volta
Pour faire le versionning de node et de npm.
# Le guide
[Volta](https://docs.volta.sh/guide/getting-started)

# Commande pour installation
```
curl https://get.volta.sh | bash
```
# Commande pour faire les installations
```
volta install node@17
volta install npm@6
```

## Tips
# Import ... from

Pour permettre de faire des imports on modifi le fichier package.json en ajoutant
```
  "type": "module",
```
# package utile
1. dotenv
Permet d appeler un fichier .env avec les variables utile
Pour les appeler ces variable on utilse:
```
dotenv.config();
```
et 
```
`${process.env.SERVEUR_PORT}`
```
2. node:http
Pour la creation du serveur
exemple:
```
import { createServer } from "node:http";
const serveur = createServer((req, res) => { ...
```

SERVEUR_PORT est le nom de la variable

3. Lecture d un dossier
<iframe width="560" height="315" src="https://www.youtube.com/embed/cT6b6_XzFmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
# Service centos
```
systemctl enable --now "mon du service"
```
# Commande linux utile
```
 shutdown -h now 
```
# Lien utile

1. Creation d un service node
[Lien](https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/)

2. Utilisation Markdowon
[Markdown syntax](https://www.markdownguide.org/basic-syntax/)
