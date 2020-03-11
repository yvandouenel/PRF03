#!/bin/bash

# Installation de MySQL 5.7
  cd /tmp
  wget http://repo.mysql.com/mysql-apt-config_0.8.12-1_all.deb
  sudo dpkg -i mysql-apt-config_0.8.12-1_all.deb
  sudo apt update
# Installer le serveur mysql
  sudo apt -y install mysql-server
# Observer le statut du serveur mysql
  sudo service mysql status
