#!/bin/bash
while true; do
    read -p "Avez vous lancé ce script en tant que root (sudo ./) o/n " on
    case $on in
        [Oo]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Merci de répondre par o ou n";;
    esac
done

echo "Quel est le nom de votre projet Drupal ?"
read project

echo "Quel est votre nom d'utilisateur linux ?"
read username

echo "Entrez votre mot de passe linux (ce sera le même pour mysql)"
stty -echo
read password
stty echo

	## DRUPAL8
# Installation de l'instance drupal vierge 8.x
  mkdir /home/$username/dev
  cd /home/$username/dev

  MYSQL=`which mysql`
  Q2="GRANT ALL ON *.* TO '$username'@'localhost' IDENTIFIED BY '$password';"
  Q3="FLUSH PRIVILEGES;"
  SQL="${Q2}${Q3}"
  $MYSQL -u root -p -e "$SQL"
# Teste si le résultat de l instruction sql
if (( $? > 0 )); then
  echo "Creation de l'utilisateur $username"
  sudo $MYSQL -u root -p -e "CREATE user  '$username'@'localhost' IDENTIFIED BY '$password';"
  Q2="GRANT ALL ON *.* TO '$username'@'localhost';"
  SQL="${Q2}${Q3}"
  sudo $MYSQL -u root -p -e "$SQL"
fi


# Créer un dossier pour le projet avec la configuration Drupal basique
  sudo composer create-project drupal-composer/drupal-project:8.x-dev $project --no-interaction
  cd /home/$username/dev/$project
  sudo vendor/drush/drush/drush si standard --db-url=mysql://$username:$password@localhost/$project
# Modification des droits sur le dossier drupal
sudo chown -R $username:www-data /home/$username/dev/$project
sudo chmod -R 775 /home/$username/dev/$project
# Modification des droits sur le dossier de l'utilisateur
sudo chown -R $username:$username /home/$username/
	## APACHE2
# Creation du virtual-host Apache pour le projet
cat >> /etc/apache2/sites-available/$project.conf <<END
<VirtualHost *:80>

	# ServerAdmin webmaster@localhost
	ServerName local.$project.my
	DocumentRoot /home/$username/dev/$project/web/

	<Directory "/home/$username/dev/$project/web">
		DirectoryIndex index.php index.html
		Options FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>

</VirtualHost>
END
sudo chown root:www-data /etc/apache2/sites-available/$project.conf
sudo a2ensite $project.conf
sudo service apache2 restart

	## HOST
# Ajouter dans /etc/hosts
# On écrit en root privilège car le fichier hosts ne peut être modifier que par root
# ADRESSE IP	  ServerName
sudo sh -c "cat >> /etc/hosts <<END
127.0.0.1       local.$project.my
END"
echo "Fichier /etc/apache2/sites-available/${project}.conf écrit."
echo "Si drush ne fonctionne pas, faites un lien symbolique:"
echo "sudo ln -s /home/$username/dev/$project/vendor/drush/drush/drush /usr/local/bin/drush"
echo "	=> Visiter votre site web: http://local.$project.my/"

