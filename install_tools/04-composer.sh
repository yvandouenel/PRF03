#!/bin/bash

# Installation de Composer
  cd /tmp
# Récupérer l'installateur de composer
  sudo php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# Lancer l'installation de composer
  sudo php composer-setup.php
# Supprimer l'installateur de composer
  sudo rm composer-setup.php
# Renommer composer.phar(fichier initial) en composer
  sudo mv composer.phar composer
# Déplacer le fichier composer
# Permet d'utiliser composer peut importe le dossier où on se situe
  sudo mv composer /usr/local/bin/
