const Router = require("express");
const Set = require("../models/Set");

const router = new Router();

router.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const { name, discription } = req.body;
        const set = new Set({name, discription});

        await set.save();
        return res.json({message: "Set was created"});
    }

    catch (e) {
        res.send({message: "Server error"});
    }
})

module.exports = router;