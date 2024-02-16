const responseHandler = (response, req, res, next) => {
    res
        .status(response.statusCode)
        .json(response)
}
module.exports = responseHandler