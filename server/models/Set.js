const {model, Schema} = require("mongoose");

const Set = new Schema({
    name: {type: String, required: true},
    discription: {type: String, required: true}
})

module.exports = model("Set", Set);