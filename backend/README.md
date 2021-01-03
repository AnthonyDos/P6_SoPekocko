#So pekocko : création d'une API sécurisé
 Demande de la société So pekocko : développement côté Back-end.

#Contexte du projet:
    1.Réalisation d'une API sécurisé
        ●API doit respecter le RGPD et les standards OWASP ;
        ● le mot de passe des utilisateurs doit être chiffré ;
        ● 2 types de droits administrateur à la base de données doivent être définis : un accès
        pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base
        de données ;
        ● la sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB
        Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis
        sa machine ;
        ● l’authentification est renforcée sur les routes requises ;
        ● les mots de passe sont stockés de manière sécurisée ;
        ● les adresses mails de la base de données sont uniques et un plugin Mongoose
        approprié est utilisé pour s’assurer de leur caractère unique et rapporter des erreurs.

    2. Les routes de l'API concernant les sauces doivent exiger une demande authentifiée(contenant un jeton valide dans son en-tête d'autorisation: "Bearer <token>").

#Technologies à utiliser durant la réalisation de l'API
    ● framework : Express ;
    ● serveur : NodeJS ;
    ● base de données : MongoDB ;
    ● toutes les opérations de la base de données doivent utiliser le pack Mongoose avec
    des schémas de données stricts.

#Peocédure d'utilisation
    1- Cloner le projet : https://github.com/AnthonyDos/P6_SoPekocko.git
    2- Côté Front-end :
        2.1. CD frontend.
        2.2. Exécuter npm install.
        2.3. Exécuter npm start.
        2.4. Installé node-sass
        2.5. Lancer: npm start

    3- Côté Backend :
        3.1. CD backend
        3.2. npm install -g nodemon
        3.3. nodemon start

#Variables d'environnement à ajouter : vous devrez créé un fichier .env à la racine du dossier Backend.
    1.1 Ajoutez les informations que je vous aurez fourni dans un fichier text (bloc-note) afin d'être relier à la 
    base de donnée. (pour cette fois-ci ).
    1.2 Ajoutez également les autres variables à l'intérieur du fichier .env que vous aurez créé.


#Dans votre navigateur entrer l'url suivante :
    1.1. http://localhost:4200/login


#Utilisation des plugins suivants pour la sécurité
    1.  Bcrypt : hash du mot de passe.
    2.  JsonWebToken : authentification sécurisé.
    3.  Helmet : supprime l’en-tête “x-powered-by”.
    4.  Mongo Sanitize : valide les données et empêche les injections.
    5.  Crypto-JS : masque l'e-mail.
    6.  Variables d'environnement : variables pour les informations importantes.
    7.  Mongoose unique validator : autorise qu'une inscription par e-mail.

