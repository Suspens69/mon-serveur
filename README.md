# mon-serveur
## Utilisation Volta
Pour faire le versionning de node et de npm.
## Le guide
[Volta](https://docs.volta.sh/guide/getting-started)

### Commande pour installation
```
curl https://get.volta.sh | bash
```
### Commande pour faire les installations
```
volta install node@17
volta install npm@6
```

## Tips
### Import ... from

Pour permettre de faire des imports on modifi le fichier package.json en ajoutant
```
  "type": "module",
```
### package utile
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
SERVEUR_PORT est le nom de la variable

2. node:http
Pour la creation du serveur
exemple:
```
import { createServer } from "node:http";
const serveur = createServer((req, res) => { ...
```

3. Lecture d un dossier
[JavaScript côté serveur : Lire et écrire des fichiers](https://www.youtube.com/watch?v=cT6b6_XzFmI&t=1134s)

## Service centos
```
systemctl enable --now "mon du service"
```
## Commande linux utile

Eteindre linux
```
shutdown -h now                     //Eteindre pc
cd /run/media/flemelle/Lamiscard    //Acces au disque
df -h                               //Utilisation des diques

```
## Lien utile

1. Creation d un service node
[Lien](https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/)

2. Utilisation Markdowon
[Markdown syntax](https://www.markdownguide.org/basic-syntax/)

3. Grafikart
[Grafikart]https://www.youtube.com/c/grafikart

## Command pour creation / suivi 
Generation de la clef ssh
```
sh-keygen -t ed25519 -C "your_email@example.com"
```
le fichier ce trouve ds : - cd ~/.ssh

## Lancer service 
```
sudo systemctl start mongod
```
## ouvrir port:

