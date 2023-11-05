const Card = require("../models/Card");

class CardController {
    async createCard(req, res) {
        try {
            const { frontside, backside, set_id } = req.body;

            const card = new Card({frontside, backside, set_id});
        
            await card.save();
            return res.json({message: "Card was created", data: frontside});
        }

        catch (e) {
            res.send({message: "Server error"});
        }
        
    }
}

module.exports = new CardController();