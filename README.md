# mon-serveur
## Utilisation sous Windows
1. [installation MongoDB](https://www.mongodb.com/try/download/community)
2. [Installation Volta](https://github.com/volta-cli/volta/releases/download/v1.1.0/volta-1.1.0-windows-x86_64.msi)

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
## Création du ftp
[Création](https://fr.wikihow.com/configurer-un-serveur-FTP-sous-Ubuntu-Linux)
1. Téléchargement
```
sudo apt-get install vsftpd
```
2. Configuration
```
sudo vim /etc/vsftpd.conf
```
## Creation  ssh
[Version Ubuntu](https://doc.ubuntu-fr.org/ssh#configuration_du_serveur_ssh)
[Ou](https://www.linuxtricks.fr/wiki/ssh-installer-et-configurer-un-serveur-ssh)
```
vim /etc/ssh/sshd_config
```
## Fichier de coniguration VS-Code
1. [grafikart](https://grafikart.fr/tutoriels/vscode-settings-2096)
2. Fichier Setting 
```
{
  "window.zoomLevel": 0, // Permet de zoomer, pratique si vous faites une présentation

  // Apparence
  // -- Editeur
  "workbench.startupEditor": "none", // On ne veut pas une page d'accueil chargée
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false,
  // -- Sidebar
  "workbench.tree.indent": 15, // Indente plus pour plus de clarté dans la sidebar
  "workbench.tree.renderIndentGuides": "always",
  // -- Code
  "editor.occurrencesHighlight": false, 
  "editor.renderWhitespace": "trailing", // On ne veut pas laisser d'espace en fin de ligne

  // Thème
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Operator Mono Lig', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 16,
  "editor.lineHeight": 28,
  "workbench.colorTheme": "Tokyo Night",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorCustomizations": {
    "[Tokyo Night]": {
      "editor.selectionBackground": "#3D59A1",
      "editor.selectionHighlightBackground": "#3D59A1"
    },
  },

  // Ergonomie
  "editor.wordWrap": "on",
  "editor.suggest.insertMode": "replace", // L'autocomplétion remplace le mot en cours
  "editor.acceptSuggestionOnCommitCharacter": false, // Evite que l'autocomplétion soit accepté lors d'un . par exemple
  "editor.formatOnSave": false,
  "editor.formatOnPaste": false,
  "editor.linkedEditing": true, // Quand on change un élément HTML, change la balise fermante
  "explorer.autoReveal": false,
  "explorer.confirmDragAndDrop": false,
  "workbench.editor.enablePreview": false, // Un clic sur un fichier l'ouvre
  "emmet.triggerExpansionOnTab": true, 
  // Fichiers
  "files.autoSave": "onFocusChange",
  "files.defaultLanguage": "markdown",
  "files.exclude": {
    "**/.idea": true
  },
  // Languages
  "javascript.preferences.importModuleSpecifierEnding": "js",
  "typescript.preferences.importModuleSpecifierEnding": "js",
  // Formatters
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // Extensions
  "liveServer.settings.donotVerifyTags": true,
  "gitlens.codeLens.enabled": false,
  "gitlens.currentLine.enabled": false,
  "editor.unicodeHighlight.nonBasicASCII": false,
}
```

3. JetBrains
installer les fronts:
[Telecharger les fronts](https://download.jetbrains.com/fonts/JetBrainsMono-2.242.zip)
[site de telechargement](https://www.jetbrains.com/)

3. FileZyla
```console
sudo apt-get install filezilla

```

## Fixer l IP

[lien anglais](https://www.cyberciti.biz/faq/add-configure-set-up-static-ip-address-on-debianlinux/)
```
sudo cp /etc/network/interfaces /root/
```