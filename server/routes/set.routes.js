const Router = require("express");
const Set = require("../models/Set");
const setController = require('../controllers/setController');
const router = new Router();

router.post('/create', setController.createSet);
router.get('/getSets', setController.getSets);
router.delete('/delete', setController.deleteSet);
router.post("/update", setController.updateSet)


module.exports = router;