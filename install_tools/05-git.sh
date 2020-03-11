#!/bin/bash

# Installation de Git
  sudo apt -y install git
# Configuration des raccourcis
  sudo git config --global alias.co checkout
  sudo git config --global alias.ci commit
  sudo git config --global alias.st status
  sudo git config --global alias.br branch
  sudo git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
  sudo git config --global alias.type 'cat-file -t'
  sudo git config --global alias.dump 'cat-file -p'
