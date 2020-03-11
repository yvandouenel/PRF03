#!/bin/bash
#who am i | awk '{echo $1}'
echo $LOGNAME
# Mise à jour des paquets
  sudo apt update && upgrade
# Installation de Apache2
  sudo apt -y install apache2
# Apache2 enable(active) le module rewrite(réécrit les nodes d'URL)
  sudo a2enmod rewrite
# Pour régler les problèmes de droit, on fait appartenir apache au même groupe que l'utilisateur courant
  sudo sed -i "s/www-data/$LOGNAME/g" /etc/apache2/envvars
# Redémarre Apache2
  sudo service apache2 restart
