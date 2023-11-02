const Router = require("express");
const Set = require("../models/Set");
const setController = require('../controllers/setController');
const router = new Router();

router.post('/create', setController.createSet);
router.get('/getSets', setController.getSets);

module.exports = router;