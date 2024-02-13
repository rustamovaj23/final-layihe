const responseHandler = (resp, req, res, next) => {
    res
        .status(resp.response.statusCode)
        .json(resp.response)
}
module.exports = responseHandler