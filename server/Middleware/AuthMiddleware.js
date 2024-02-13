const jwt = require("jsonwebtoken");
const Response = require('../Helpers/Response')
const response = new Response

module.exports = (req, res, next) => {
    console.log('auth middleware')
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded;
        next();
    } catch (err) {
        response.setError('unAuthenticated')
        next(response)
    }
};