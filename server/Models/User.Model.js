const mongoose = require("mongoose")

const User = mongoose.model("users", new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    is_admin: {type: Boolean, required: true, default: false}
}))

module.exports = User