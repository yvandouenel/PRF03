#!/bin/bash

echo "Quel est le nom de l'utilisateur cette nouvelle machine ?"
read name
# creation de l'utilisateur
sudo adduser $name
# Ajout de l'utilisateur dans sudoer
sudo usermod -aG sudo $name

# cp  des scripts d'install
sudo cp -r ~/install_tools /home/$name/
sudo chown -R $name:$name /home/$name/
