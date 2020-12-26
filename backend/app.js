//on importe ewpress
const express = require('express');
//const helmet = require('helmet')

const bodyParse = require('body-parser'); // transforme le corps de la requête en JSON 
const mongoose = require('mongoose');
const path = require('path')

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

//sécurité
require('dotenv').config();
mongoose.connect(process.env.DB_TEST,
{   useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

//permet de  cree une application express
const app = express();

// app.use(helmet())
// app.get('/', (req, res) => { 
//     res.send("This is the Demo page for"+ " setting up express server !") 
// }); 
  
// app.listen(3000, (err) => { 
//     if (err) { console.log(err); } 
//     else { console.log('Server started " + "at http://localhost:3000')} 
// }); 



//permet d'accéder a l'api sans complication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //  tout le monde à le droit d'accéder à l'api *
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //on donne l'autorisation d'utiliser certaine en tête
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // les méthodes autorisées
    next();
});

app.use(bodyParse.json());
//routes
app.use('/images', express.static(path.join(__dirname,'images'))) 
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes)




//on exporte pour que l'on puisse l'utiliser depuis les autres fichiers
module.exports = app;