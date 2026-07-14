# angular-18-projects
créer un project en angualr 18+

command npm 

install d'abord nvm sur windows

nvm install node (version node ex 20)

nvm use node 20

on aura node et npm installer 

node -v pour avoir la version de node

npm -v pour avoir la version de npm

Creer un nouveau projet type script

en creant un dossier vide

"nmp init -y" dans le nouveau dossier = on aura le package.json(configuration de npm avec toutes les dépendances du projet ) et node node_modules 
"npm i -d typescript" pour installer type script avec les dépendance de typescript dans node_modules 

"npm run tsc" ( ou n'import quel nom bass, test, start) pour lancer typescript

npm run tsc -- --init pour créer le fichier tsconfig.json pour la configuration de typescript


créer un nouveau projet Angular avec la commande npx

on peut le faire directement depuis le site npx( comme npm dans node) qui permet decreer de projet "MICRO FRONTEND"

lance la commande npx create-nx-workspace@lastest --preset=angular "pour mettre le template dedie pour angular"

suivant les instruction  
--nom du package dßabord regroupant tous les appli,
-- TYPE DE REPO monolitic
--choisit ton 1er nom de appli
--CI provider github
--css

---> creer un nouveau app avec cet commande npx nx g @ng/angular:app "nom-app"

--->ajouter un nouveau composant "npx nx g c \features\video-games\components\add-videogame"

On a regroupe les quests 5,6,7 dans le quest-4

-- maintenant on travaille pour le quest-8

on a besoin de rendre plus beau notre aplication en installant bootstrap

lancons la commande npx nx add @ng-bootstrap/ng-bootstrap

--> npm cache clean --force