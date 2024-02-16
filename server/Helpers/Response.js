class Response {
    constructor() {
        this.response = {
            success: false,
            error: false,
            message: null,
            statusCode: 400,
            data: []
        }
    }

    setSuccess(message) {
        this.response.success = true
        this.response.error = false
        this.response.message = message
        this.response.data = []
        this.response.statusCode = 200
    }

    setError(message) {
        this.response.success = false
        this.response.error = true
        this.response.message = message
        this.response.data = []
        this.response.statusCode = 400
    }

    setData(data) {
        this.response.data = data
    }

    get(next) {
        return next(this.response)
    }
}

module.exports = Response