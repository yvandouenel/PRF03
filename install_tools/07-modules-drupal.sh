#!/bin/bash

echo "Quel est le nom de votre projet Drupal ?"
read project

cd /home/yvan/dev/$project

read -p "Do you want install admin toolbar? (y/N) " ADMIN_TOOLBAR
if [[ "$ADMIN_TOOLBAR" =~ ^[yY]$ || "$ADMIN_TOOLBAR" =~ ^[yY][eE][sS]$ ]]
then
	composer require drupal/admin_toolbar
	drush en admin_toolbar
	drush en admin_toolbar_tools
fi

read -p "Do you want install devel? (y/N) " DEVEL
if [[ "$DEVEL" =~ ^[yY]$ || "$DEVEL" =~ ^[yY][eE][sS]$ ]]
then
	composer require drupal/devel
	drush en devel
	drush en devel_generate
fi

read -p "Do you want install metatag/token? (y/N) " METATAG
if [[ "$METATAG" =~ ^[yY]$ || "$METATAG" =~ ^[yY][eE][sS]$ ]]
then
	composer require drupal/metatag
	drush en metatag
	drush en token
fi

read -p "Do you want install pathauto/ctools? (y/N) " PATHAUTO
if [[ "$PATHAUTO" =~ ^[yY]$ || "$PATHAUTO" =~ ^[yY][eE][sS]$ ]]
then
	composer require drupal/pathauto
	drush en pathauto
	drush en ctools
fi

read -p "Do you want install redirect? (y/N) " REDIRECT
if [[ "$REDIRECT" =~ ^[yY]$ || "$REDIRECT" =~ ^[yY][eE][sS]$ ]]
then
	composer require drupal/redirect
	drush en redirect
fi

read -p "Do you want install config installer? (y/N) " CONFIG_INSTALLER
if [[ "$CONFIG_INSTALLER" =~ ^[yY]$ || "$CONFIG_INSTALLER" =~ ^[yY][eE][sS]$ ]]
then
	composer require drupal/config_installer
	drush en config_installer
fi

