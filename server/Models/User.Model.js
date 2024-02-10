const mongoose = require("mongoose")

const User = mongoose.model("users", new mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    categories: [{type: String, required: true}]
}))

module.exports = User