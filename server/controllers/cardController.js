const Card = require("../models/Card");

class CardController {
    async createCard(req, res) {
        try {
            const { frontside, backside, set_id } = req.body;

            const card = new Card({frontside, backside, set_id});
            const cards = await Card.find({ set_id: req.query.id })
            await card.save();
            return res.json({message: "Card was created", data: cards});
        }

        catch (e) {
            res.send({message: "Server error"});
        }
        
    }
}

module.exports = new CardController();