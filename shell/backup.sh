#!/bin/bash
# Toto
# Auteur : Laurent NISON
# Version : 0.1
# Ce script permet de réaliser une sauvegarde sur un ordinateur distant

# IP de Sandra : 192.168.7.199

# Je fixe quelques variables


# Test du nombre d'arguments
if [ $# -ne 1 ]
then
    echo "Le nombre d'arguments n'est pas correct"
    exit
else
    echo "OK, c'est cool, on continue !"
fi





ip=$1
moi="yvan"
dossier="/home/$moi/dev"
destination="/home/$moi"
user="user12"


echo "Bonjour"
echo "On va faire une sauvegarde"
echo "sur l'adresse ip : $ip"
echo "du dossier $dossier"
echo "dans l'archive $destination/$moi.tar"
echo "Nombre d'arguments : $#"
echo "argument 1: $1"
echo "argument 2: $2"
echo "argument 3: $3"
echo "argument 4: $4"

tar -crrrrrrrrrrf $destination/$moi.tar $dossier
code=$?
if [ $code -ne 0 ]
then
    echo "La commande TAR a échoué... voici le code d'erreur $code C'est ballot..."
    exit
fi

#scp $destination/$moi.tar $user@$ip:/home/$user/laclasse/
