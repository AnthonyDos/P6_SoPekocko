const Thing = require('../models/Thing');
const fs = require('fs');
//const { find } = require('../models/Thing');


//fonction qui reçois la requête et la réponse
exports.createThing = (req, res, next) => {
    const ThingObject = JSON.parse(req.body.sauce);
    delete ThingObject._id;
    const thing = new Thing({
        ...ThingObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` //on modifie l url de l image
    })
    thing.save()
    .then(() => res.status(201).json({message:'Sauce enregistré !'}))
    .catch(error => res.status(400).json({ message: 'la publication à échoué !' }));
};


exports.modifyThing = (req, res, next) =>{
    const thingObject = req.file ?  //requête fichier si req.file existe
    {
        ...JSON.parse(req.body.sauces), // on récupére les infos de la sauce
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // on modifie l'image url
    } : { ...req.body };// si le fichier req.file n 'existe pas on va faire une copie avec req.body
    Thing.updateOne({ _id: req.params.id}, { ...thingObject, _id: req.params.id}) //Thing = sauce, donc thing updateOne = modifier une sauce + on ajoute un objet de comparaison avec comme premier argument : _id. ensuite le second objet  pour dire que _id correspond a celui des nouveaux parametres
    .then(() => res.status(200).json({ message: 'Votre sauce est modifié ! ' }))
    .catch( error => res.status(400).json({ error }));
};
 
exports.deleteThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id }) // findOne pour trouver le même id que la requête paramétre :id : paramétre de route dynamique = prends l 'objet de comparaison
    .then( thing => {
        const filename = thing.imageUrl.split('/images/')[1]; // on récupere l image url qui retourne un tableau avec les éléments avant split et après
        fs.unlink(`images/${filename}`,() =>{    //fs unlink : pour supprimer un fichier
            Thing.deleteOne({ _id: req.params.id }) //ici on supprime la sauce dans la base de donnée qui correspond au bon utilisateur
            .then(() => res.status(200).json ({ message: 'Sauce supprimé !'}))
            .catch(error => res.status(400).json({ error }))
        })
    })
    .catch(error => res.status(500).json({ error }))   
};

exports.getOneThing = (req, res, next) =>{
    Thing.findOne({ _id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }))
};

exports.getAllThing = (req, res ,next) => {
    Thing.find() //on utilise find afin de renvoyer un tableau contenant toutes les sauces
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
 };
///////////////////////////////////////////////////////////////////////////////////////////////////
exports.like = (req, res, next) => {
        switch (req.body.like) {
            case 1 :
           
            //.then((thing) => { 
               // if(thing.usersLiked.find(user => user === req.body.userId)) {  
               
                Thing.updateOne({_id: req.params.id}, {$inc:{likes: +1} ,$push:{usersLiked:req.body.userId}})
                .then(() => res.status(200).json({message:'j aime enregistré !'}))
                .catch(error => res.status(400).json({ error }));
                //}
           // })  
                
                break
        }
    
    //})         
    
    
        // case -1 :
        //     dislikes = []
        //     userId = sauce.userId
        //     dislikes = usersDisliked.push(userId)
        //     dislikes.save()
        //     .then(dislikes => res.status(200).json({message:'dislike enregistré !'}))
        //     .catch(error => res.status(400).json({ error }));
        //     console.log(dislikes)
        //     break
        // default  :
        //     userId = []
        //     .then(() => res.status(200).json())
        //     .catch(error => res.status(400).json({ error }));
    
    //console.log(req.body.like)
    
//console.log(like)
    








    //////////////////////////////////////////////////////////////////////////////////
    // if (likeSauce == 1){
    //     sauceLike.save()
    //     .then(sauceLike => res.status(200).json({message:'j aime enregistré !'}))
    //     .catch(error => res.status(400).json({ error }));
    // }else if (likeSauce == -1){
    //     sauceLike.save()
    //     .then(sauceLike => res.status(200).json({message:'Vous n \'aimez pas!'}))
    //     .catch(error => res.status(400).json({ error }));
    // }else (likeSauce == 0)
    // .then(sauceLike => res.status(200).json())
    // .catch(error => res.status(400).json({ error }));
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    // sauceLike.findOne ( 
    //    // {  sku :  "abc123"  }, 
    //     {  $max :  {  likes :  0 ,  "usersLiked" :  1  }  } 
    // )
    // $push: {likes, 'usersLiked' }
    // console.log(userID)
    //{/* if(sauceLike < $max){
    //     userID : {sauceLike.$max}
    //     $push : {req.body.userID }
    //     sauceLike.save()
    //     .then(sauceLike => res.status(200).json({message:'j aime enregistré !'}))
    //     .catch(error => res.status(400).json({ error }));
    // }else if (sauceLike > $min){
    //     userID: {sauceLike.$min}
    //     $push : {usersDisliked}
    // } */
    
    

    
    
}

// console.log(exports.likes)
// exports.dislikes = (req, res, next) => {

// }