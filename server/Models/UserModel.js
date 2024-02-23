const mongoose = require("mongoose")

const User = mongoose.model("users", new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: Number, required: true},
    is_admin: {type: Boolean, required: true, default: false},
    created_at: {type: Date, default: Date.now}
}))

module.exports = User