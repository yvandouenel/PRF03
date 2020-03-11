#!/bin/bash

echo "Installation issue du tuto : https://ourcodeworld.com/articles/read/997/how-to-install-keepass-2-in-ubuntu-desktop-18-04"
#read project

sudo apt-add-repository ppa:jtaylor/keepass
sudo apt-get update
sudo apt-get install keepass2

#installation de mono-complete
sudo apt update
sudo apt install dirmngr gnupg apt-transport-https ca-certificates
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
sudo sh -c 'echo "deb https://download.mono-project.com/repo/ubuntu stable-bionic main" > /etc/apt/sources.list.d/mono-official-stable.list'
sudo apt update
sudo apt install mono-complete

# installation de curl et jq
sudo apt install curl jq

DIR="/usr/lib/keepass2/plugins/"
if [ -d "$DIR" ]; then
  echo "le répertoire /usr/lib/keepass2/plugins/ existe déjà"
else
  echo "Création du répertoire /usr/lib/keepass2/plugins/"
  sudo mkdir /usr/lib/keepass2/plugins
fi
# Téléchargement de KeepassRPC dans /usr/lib/keepass2/plugins/ cf https://www.numetopia.fr/utiliser-keepass-avec-google-chrome/
curl -s https://api.github.com/repos/kee-org/keepassrpc/releases/latest | jq -r ".assets[] | select(.name | test(\"KeePassRPC.plgx\")) | .browser_download_url" | xargs sudo curl -s -L -o "/usr/lib/keepass2/plugins/KeePassRPC.plgx"

echo "Tuto pour finir l'install de keepass avec chrome :  https://www.numetopia.fr/utiliser-keepass-avec-google-chrome/"
echo "Penser à installer l'extension Kee sur chrome : https://chrome.google.com/webstore/detail/kee-password-manager/mmhlniccooihdimnnjhamobppdhaolme"
