const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const cryptojs = require('crypto-js');



exports.signup = (req, res, next) => {
    const crypto =  cryptojs.HmacSHA256(req.body.email,process.env.ADRESS).toString(),
    email = crypto;
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
            email: crypto,
            password: hash
        })
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
        .catch(error => res.status(400).json ({ error  }))
    })
    .catch(error => res.status(500).json ({ error }));
};



exports.login = (req, res, next) => {
    crypto =  cryptojs.HmacSHA256(req.body.email,process.env.ADRESS).toString(),
    User.findOne({ email: crypto})
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