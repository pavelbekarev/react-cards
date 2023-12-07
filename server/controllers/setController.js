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

    async deleteSet(req, res) {
        try {
            const { _id } = req.body;

            const candidateSet = await Set.findOne({_id: req.query.id})

            if (candidateSet) {
                await candidateSet.deleteOne()
                return res.status(200).json({message: "Set has been removed"})
            }

            else {
                return res.status(400).json({message: `Set with id ${_id} not found`});
            }
        }

        catch (e) {

        }
    }


    async updateSet(req, res) {
        // try {
            const { id, name, description } = req.body;
            const alias = cyrillicToTranslit().transform(name, "_");

            const candidateName = await Set.findOne({name: name});
            const candidateAlias = await Set.findOne({alias: alias});

            const candidateSet = await Set.findOne({id})

            if (!candidateSet) {
                if (candidateName || candidateAlias) {
                    return res.status(400).json({message: `Set with name ${name} already exist`});
                }

                else {
                    await Set.findByIdAndUpdate({_id: id}, {
                        name: name,
                        discription: description,
                        alias: alias,
                    },
                    {new: true})

                    return res.json({message: "Set was updated"})
                }
            }

            else {
                return res.status(400).json({message: `Set with id ${id} not found`});
            }
        // }

        // catch (e) {

        // }
    }
}


module.exports = new SetController();