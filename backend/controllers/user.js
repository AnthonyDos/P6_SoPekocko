const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const sanitize = require('express-mongo-sanitize') //
const User = require('../models/User');


exports.signup = (req, res, next) => {
    email = sanitize(req.body.email)
    const password_regex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/; 
    password = (req.body.password)
    if(password.match(password_regex)){
        res.status(200).json
    } else{
        throw error = "Le mot de passe n'est pas valide !";
    }
    bcrypt.hash(req.body.password, 10)
    .then( hash => {       
        const user = new User ({
            email: req.body.email,
            password: hash
        })
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
        .catch(error => res.status(400).json ({ error : 'erreur server' }))
    })
    .catch(error => res.status(500).json ({ error: 'Le mot de passe ne respecte pas les obligations !' }));
};



exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email})
    .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid){
                return res.status(401).json({ error: 'Mot de passe incorrect !'});
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign (
                    { userId: user._id },
                    process.env.JWT_TOKEN,
                    { expiresIn: '24h' }
                )       
            })
        })
        .catch(error => res.status(500).json({ error:'erreur server !' }))
    })
    .catch(error => res.status(500).json({ error : 'erreur server'}));
};