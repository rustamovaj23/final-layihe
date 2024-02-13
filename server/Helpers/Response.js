 class Response {
    constructor() {
        this.response = {
            success: false,
            error: false,
            message: null,
            statusCode: 40,
            data: []
        }
    }

    setSuccess(message) {
        this.response.success = true
        this.response.message = message
        this.response.statusCode = 200
    }

    setError(message) {
        this.response.error = true
        this.response.message = message
        this.response.statusCode = 400
    }

    setData(data) {
        this.response.data = data
    }

    get() {
        return this.response
    }
}
module.exports = Response