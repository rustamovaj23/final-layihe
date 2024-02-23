const mongoose = require("mongoose")

const Category = mongoose.model("categories", new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
}))

module.exports = Category