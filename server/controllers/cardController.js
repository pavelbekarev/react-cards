const Card = require("../models/Card");

class CardController {
    async createCard(req, res) {
        try {
            const { frontside, backside, set_id } = req.body;

            const card = new Card({frontside, backside, set_id});
            const cards = await Card.find({ set_id: req.body.id })
            await card.save();
            return res.json({message: "Card was created", data: card});
        }

        catch (e) {
            res.send({message: "Server error"});
        }
        
    }


    async getCards(req, res) {
        try {
            const cards = await Card.find({set_id: req.query.id})
            return res.json(cards)
        }

        catch (e) {
            res.send({message: "Server error"});
        }
    }
}

module.exports = new CardController();