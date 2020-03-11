#!/bin/bash
echo "Si ce n'est pas déjà fait, n'oubliez pas d'ajouter les lignes suivantes dans votre .bashrc"
echo "alias php7.1='sudo a2dismod php7.2 && sudo a2dismod php7.3 && sudo a2enmod php7.1 && sudo update-alternatives --set php /usr/bin/php7.1 && sudo systemctl restart apache2'"
echo "alias php7.2='sudo a2dismod php7.1 && sudo a2dismod php7.3 && sudo a2enmod php7.2 && sudo update-alternatives --set php /usr/bin/php7.2 && sudo systemctl restart apache2'"
echo "alias php7.3='sudo a2dismod php7.1 && sudo a2dismod php7.2 && sudo a2enmod php7.3 && sudo update-alternatives --set php /usr/bin/php7.2 && sudo systemctl restart apache2'"
# Installation de PhP 7.1
  sudo add-apt-repository ppa:ondrej/php
  sudo apt update
  sudo apt -y install php7.1-common
  sudo apt -y install php7.1-json
  sudo apt -y install php7.1-cli
  sudo apt -y install php7.1-curl
  sudo apt -y install php7.1-mbstring
  sudo apt -y install php7.1-mysql
  sudo apt -y install php7.1-xml
  sudo apt -y install php7.1-gd
  sudo apt -y install php7.1-zip
  sudo apt -y install php7.1-dom
  sudo apt -y install php7.1-imap
  sudo apt -y install php7.1
# Faire un pont entre appache2 et PHP7.1
  sudo apt -y install libapache2-mod-php7.1
  sudo service apache2 restart


# Installation de PhP 7.2
  sudo apt -y install php7.2-common
  sudo apt -y install php7.2-json
  sudo apt -y install php7.2-cli
  sudo apt -y install php7.2-curl
  sudo apt -y install php7.2-mbstring
  sudo apt -y install php7.2-mysql
  sudo apt -y install php7.2-xml
  sudo apt -y install php7.2-gd
  sudo apt -y install php7.2-zip
  sudo apt -y install php7.2-dom
  sudo apt -y install php7.2-imap
  sudo apt -y install php7.2
# Faire un pont entre appache2 et PHP7.2
  sudo apt -y install libapache2-mod-php7.2
  sudo service apache2 restart

echo "Si ce n'est pas déjà fait, n'oubliez pas d'ajouter les lignes suivantes dans votre .bashrc"
echo "alias php7.1='sudo a2dismod php7.2 && sudo a2dismod php7.3 && sudo a2enmod php7.1 && sudo update-alternatives --set php /usr/bin/php7.1 && sudo systemctl restart apache2'"
echo "alias php7.2='sudo a2dismod php7.1 && sudo a2dismod php7.3 && sudo a2enmod php7.2 && sudo update-alternatives --set php /usr/bin/php7.2 && sudo systemctl restart apache2'"
echo "alias php7.3='sudo a2dismod php7.1 && sudo a2dismod php7.2 && sudo a2enmod php7.3 && sudo update-alternatives --set php /usr/bin/php7.2 && sudo systemctl restart apache2'"
