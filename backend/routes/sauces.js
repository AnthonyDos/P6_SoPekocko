const express = require('express');
const router = express.Router();

const  saucesCtrl = require('../controllers/sauces');

router.post('/', saucesCtrl.createSauces);
// router.post('/api/sauces',(req, res, next) => {
// });
router.put('/:id/like', saucesCtrl.modifySauces)
router.delete('/:id', saucesCtrl.deleteSauces);
router.get('/:id', saucesCtrl.getOneSauces);
router.get('/', saucesCtrl.getAllSauces);

module.exports = router;