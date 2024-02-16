const Response = require("./Response");
const response = new Response
const methods = (req, res, next) => {
    global.setSuccess = (success) => response.setSuccess(success)
    global.setError = (error) => response.setError(error)
    global.setData = (data) => response.setData(data)
    global.getRes = (Next) => response.get(Next)
    next()
}

module.exports = methods