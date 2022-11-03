### mon-serveur
## Utilisation Volta
Pour faire le versionning de node et de npm.
# Le guide
<a href="https://docs.volta.sh/guide/getting-started">Volta

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
${process.env.SERVEUR_PORT}`
```
SERVEUR_PORT est le nom de la variable
# Service centos
```
systemctl enable --now "mon du service"
```
# Lien utile

1. Creation d un service node
[Lien](https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/)

2. Utilisation Markdowon
[Markdown syntax](https://www.markdownguide.org/basic-syntax/)
