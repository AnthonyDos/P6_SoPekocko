const bcrypt = require('bcrypt');

const user = require('../models/user');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then( hash => {
        const User = new user ({
            email: req.body.email,
            password: hash
        })
        User.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
        .catch(error => res.status(400).json ({ error }))
    })
    .catch(error => res.status(500).json ({ error }));
};

exports.login = (req, res, next) => {
    user.findOne({ email: req.body.email})
    .then(User => {
        if (!User) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !'});
        }
        bcrypt.compare(req.body.password, User.password)
        .then(valid => {
            if (!valid){
                return res.status(401).json({ error: 'Mot de passe incorrect !'});
            }
            res.status(200).json({
                userId: user._id,
                token: 'TOKEN'           
            });
        })
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};