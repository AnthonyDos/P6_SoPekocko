#So pekocko : création d'une API sécurisé <br>
&nbsp; Demande de la société So pekocko : développement côté Back-end. <br>

#Contexte du projet: <br>
    1.Réalisation d'une API sécurisé <br>
    &nbsp;    ●API doit respecter le RGPD et les standards OWASP ;<br>
    &nbsp;    ● le mot de passe des utilisateurs doit être chiffré ;<br>
    &nbsp;    ● 2 types de droits administrateur à la base de données doivent être définis : un accès<br>
    &nbsp;    pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base<br>
    &nbsp;    de données ;<br>
    &nbsp;    ● la sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB<br>
    &nbsp;    Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis<br>
    &nbsp;    sa machine ;<br>
    &nbsp;    ● l’authentification est renforcée sur les routes requises ;<br>
    &nbsp;    ● les mots de passe sont stockés de manière sécurisée ;<br>
    &nbsp;    ● les adresses mails de la base de données sont uniques et un plugin Mongoose<br>
    &nbsp;    approprié est utilisé pour s’assurer de leur caractère unique et rapporter des erreurs.<br>
    2. Les routes de l'API concernant les sauces doivent exiger une demande authentifiée(contenant un jeton valide dans  son en-tête d'autorisation: "Bearer <token>"). <br>

#Technologies à utiliser durant la réalisation de l'API <br>
&nbsp;    ● framework : Express ; <br>
&nbsp;    ● serveur : NodeJS ;<br>
&nbsp;    ● base de données : MongoDB ;<br>
&nbsp;    ● toutes les opérations de la base de données doivent utiliser le pack Mongoose avec
&nbsp;    des schémas de données stricts.<br>

#Peocédure d'utilisation<br>
    1- Cloner le projet : <br>
    &nbsp;    1.1 https://github.com/AnthonyDos/P6_SoPekocko.git <br>
    2- Côté Front-end : <br>
    &nbsp;    2.1. CD frontend.<br>
    &nbsp;    2.2. Exécuter npm install.<br>
    &nbsp;    2.3. Exécuter npm start.<br>
    &nbsp;    2.4. Installé node-sass.<br>
    &nbsp;    2.5. Lancer: npm start. <br>
    3- Côté Backend : <br>
    &nbsp;    3.1. CD backend <br>
    &nbsp;    3.2. npm install -g nodemon <br>
    &nbsp;    3.3. nodemon start <br>

#Variables d'environnement à ajouter : vous devrez créé un fichier .env à la racine du dossier Backend. <br>
&nbsp;    1.1 Ajoutez les informations que je vous aurez fourni dans un fichier text (bloc-note) afin d'être relier à la 
&nbsp;    base de donnée. (pour cette fois-ci ).<br>
&nbsp;    1.2 Ajoutez également les autres variables à l'intérieur du fichier .env que vous aurez créé.<br>


#Dans votre navigateur entrer l'url suivante :<br>
&nbsp;    1.1. http://localhost:4200/login<br>


#Utilisation des plugins suivants pour la sécurité<br>
&nbsp;    1.  Bcrypt : hash du mot de passe.<br>
&nbsp;    2.  JsonWebToken : authentification sécurisé.<br>
&nbsp;    3.  Helmet : supprime l’en-tête “x-powered-by”.<br>
&nbsp;    4.  Mongo Sanitize : valide les données et empêche les injections.<br>
&nbsp;    5.  Crypto-JS : masque l'e-mail.<br>
&nbsp;    6.  Variables d'environnement : variables pour les informations importantes.<br>
&nbsp;    7.  Mongoose unique validator : autorise qu'une inscription par e-mail.<br>

