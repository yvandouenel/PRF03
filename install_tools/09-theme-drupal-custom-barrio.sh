#!/bin/bash
echo "Quel est le nom de votre site web drupal ?"
read site_name

	## Install Bootstrap barrio (Bootstrap 4) in contrib/
read -p "Voulez vous installer Bootstrap barrio ? (y/n) " bootstrap_install
if [[ "$bootstrap_install" =~ ^[yY]$ || "$bootstrap_install" =~ ^[yY][eE][sS]$ ]]
then
  # If contrib/ doesn't exist, make it, then install the Bootstrap barrio theme.
  if [ ! -d /home/$LOGNAME/dev/$site_name/web/themes/contrib/ ]
  then
    mkdir /home/$LOGNAME/dev/$site_name/web/themes/contrib/
    cd /home/$LOGNAME/dev/$site_name/web/themes/contrib/
    sudo composer require drupal/bootstrap_barrio
  # If Boostrap barrio theme doesn't exist, install it.
  elif [ ! -d /home/$LOGNAME/dev/$site_name/web/themes/contrib/bootstrap_barrio/ ]
  then
    cd /home/$LOGNAME/dev/$site_name/web/themes/contrib/
    sudo composer require drupal/bootstrap_barrio
  fi
fi

# If custom/ doesn't exist, make it and go in.
if [ ! -d /home/$LOGNAME/dev/$site_name/web/themes/custom/ ]
then
  mkdir /home/$LOGNAME/dev/$site_name/web/themes/custom/
  cd /home/$LOGNAME/dev/$site_name/web/themes/custom/
# Else go in custom/
else
  cd /home/$LOGNAME/dev/$site_name/web/themes/custom/
fi

	## Rename the Bootstrap barrio files name
read -p "Voulez vous renommer les noms de fichier de Bootstrap barrio ? (y/n) " rename
if [[ "$rename" =~ ^[yY]$ || "$rename" =~ ^[yY][eE][sS]$ ]]
then
  export CUSTOM_BARRIO=$site_name
  cp -r ../contrib/bootstrap_barrio/subtheme $CUSTOM_BARRIO
  cd $CUSTOM_BARRIO
  for file in *bootstrap_barrio_subtheme.*; do mv $file ${file//bootstrap_barrio_subtheme/$CUSTOM_BARRIO}; done
  for file in config/*/*bootstrap_barrio_subtheme.*; do mv $file ${file//bootstrap_barrio_subtheme/$CUSTOM_BARRIO}; done
  mv {_,}$CUSTOM_BARRIO.theme
  grep -Rl bootstrap_barrio_subtheme .|xargs sed -i '' -e "s/bootstrap_barrio_subtheme/$CUSTOM_BARRIO/"
fi

# Téléchargement de bootstrap
cd /home/$LOGNAME/dev/$site_name/web/themes/custom/$site_name
git clone https://github.com/twbs/bootstrap.git


# customisation de bootstrap cf http://www.coopernet.fr/formation/css123/sass
mkdir scss
cp -r bootstrap/scss scss/bootstrap
mkdir scss/$site_name
cat >> scss/main.scss <<END
@import "bootstrap-overrides";
@import "${site_name}/global";
END

cat >> scss/$site_name/global.scss <<END
body { background-color: blue !important }
END

cp scss/bootstrap/bootstrap.scss scss/bootstrap-overrides.scss
# donner les bons droits sur le theme
sudo chown -R $USER:$USER /home/$LOGNAME/dev/$site_name/web/themes/custom/$site_name
sudo chmod -R 775 /home/$LOGNAME/dev/$site_name/web/themes/custom/$site_name

sed -i 's/@import "/@import "bootstrap\//g' scss/bootstrap-overrides.scss
sed -i 's/\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.1.1\/css\/bootstrap.min.css/css\/bootstrap.css/g' $site_name.libraries.yml
sed -i '5d;6d;7d;8d' ./$site_name.libraries.yml
# ajouter une ligne dans .gitignore


# Supprimer le code bootstrap qui ne sert plus
rm -r /home/$LOGNAME/dev/$site_name/web/themes/custom/$site_name/bootstrap
echo -e "\033[0;37m Renomer le theme dans  $site_name.info.yml. \n Cela permettra de mieux le voir dans l'interface d'admin de drupal\n  Pour compiler cd /home/$LOGNAME/dev/$site_name/web/themes/custom/$site_name puis sass scss/main.scss:css/bootstrap.css --watch \n  \nEn cas d'erreur de compilation cf http://monbootstrap.fr/resoudre-lerreur-de-compilation-_root-scss/ \033[0m"

