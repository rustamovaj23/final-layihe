const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Product = mongoose.model("products", new mongoose.Schema({
    category_id: {type: Schema.Types.ObjectId, ref: 'categories'},
    name: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    tags: [{
        key: {type: String},
        value: {type: String}
    }],
    images: [{
        url: {type: String},
    }],
    created_at: {type: Date, default: Date.now}
}))

module.exports = Product