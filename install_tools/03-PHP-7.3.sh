#!/bin/bash

# Installation de PhP 7.3
  sudo apt -y install apt-transport-https
  sudo apt -y install ca-certificates
  sudo apt -y install curl
  sudo apt -y install unzip
  sudo apt -y install make
  sudo apt -y install software-properties-common
  sudo add-apt-repository ppa:ondrej/php
  sudo apt update
  sudo apt -y install php7.3-common
  sudo apt -y install php7.3-json
  sudo apt -y install php7.3-cli
  sudo apt -y install php7.3-curl
  sudo apt -y install php7.3-mbstring
  sudo apt -y install php7.3-mysql
  sudo apt -y install php7.3-xml
  sudo apt -y install php7.3-gd
  sudo apt -y install php7.3-zip
  sudo apt -y install php7.3-dom
  sudo apt -y install php7.3-imap
  sudo apt -y install php7.3
# Faire un pont entre appache2 et PHP7.3
  sudo apt -y install libapache2-mod-php7.3
  sudo service apache2 restart
