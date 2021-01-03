#So pekocko : création d'une API sécurisé <br>
 Demande de la société So pekocko : développement côté Back-end. <br>

#Contexte du projet: <br>
    1.Réalisation d'une API sécurisé <br>
        ●API doit respecter le RGPD et les standards OWASP ;<br>
        ● le mot de passe des utilisateurs doit être chiffré ;<br>
        ● 2 types de droits administrateur à la base de données doivent être définis : un accès<br>
        pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base<br>
        de données ;<br>
        ● la sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB<br>
        Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis<br>
        sa machine ;<br>
        ● l’authentification est renforcée sur les routes requises ;<br>
        ● les mots de passe sont stockés de manière sécurisée ;<br>
        ● les adresses mails de la base de données sont uniques et un plugin Mongoose<br>
        approprié est utilisé pour s’assurer de leur caractère unique et rapporter des erreurs.<br>

    2. Les routes de l'API concernant les sauces doivent exiger une demande authentifiée(contenant un jeton valide dans  son en-tête d'autorisation: "Bearer <token>"). <br>

#Technologies à utiliser durant la réalisation de l'API <br>
    ● framework : Express ; <br>
    ● serveur : NodeJS ;<br>
    ● base de données : MongoDB ;<br>
    ● toutes les opérations de la base de données doivent utiliser le pack Mongoose avec
    des schémas de données stricts.<br>

#Peocédure d'utilisation<br>
    1- Cloner le projet : https://github.com/AnthonyDos/P6_SoPekocko.git <br>
    2- Côté Front-end : <br>
        2.1. CD frontend.<br>
        2.2. Exécuter npm install.<br>
        2.3. Exécuter npm start.<br>
        2.4. Installé node-sass.<br>
        2.5. Lancer: npm start. <br>
    3- Côté Backend : <br>
        3.1. CD backend <br>
        3.2. npm install -g nodemon <br>
        3.3. nodemon start <br>

#Variables d'environnement à ajouter : vous devrez créé un fichier .env à la racine du dossier Backend. <br>
    1.1 Ajoutez les informations que je vous aurez fourni dans un fichier text (bloc-note) afin d'être relier à la 
    base de donnée. (pour cette fois-ci ).<br>
    1.2 Ajoutez également les autres variables à l'intérieur du fichier .env que vous aurez créé.<br>


#Dans votre navigateur entrer l'url suivante :<br>
    1.1. http://localhost:4200/login<br>


#Utilisation des plugins suivants pour la sécurité<br>
    1.  Bcrypt : hash du mot de passe.<br>
    2.  JsonWebToken : authentification sécurisé.<br>
    3.  Helmet : supprime l’en-tête “x-powered-by”.<br>
    4.  Mongo Sanitize : valide les données et empêche les injections.<br>
    5.  Crypto-JS : masque l'e-mail.<br>
    6.  Variables d'environnement : variables pour les informations importantes.<br>
    7.  Mongoose unique validator : autorise qu'une inscription par e-mail.<br>

