const Router = require("express");
const Card = require("../models/Card");
const cardController = require('../controllers/cardController');
const router = new Router();

router.post('/create', cardController.createCard);
router.get('/getCards', cardController.getCards);

module.exports = router;