const Set = require("../models/Set");
const cyrillicToTranslit = require('cyrillic-to-translit-js');

class SetController {
    async createSet(req, res) {
        try {
            console.log(req.body);
            const { name, discription } = req.body;

            const alias = cyrillicToTranslit().transform(name, "_");

            const candidateName = await Set.findOne({name: name});
            const candidateAlias = await Set.findOne({alias: alias});

            if (candidateName || candidateAlias) {
                return res.status(400).json({message: `Set with name ${name} already exist`});
            }

            const set = new Set({name, discription, alias});
    
            await set.save();
            return res.json({message: "Set was created", data: name});
        }
    
        catch (e) {
            res.send({message: "Server error"});
        }
    }

    async getSets(req, res) {
        try {
            const sets = await Set.find();
            return res.json(sets);
        }

        catch (e) {
            return res.status(500).json({message: "Server error"});
        }
    }
}


module.exports = new SetController();