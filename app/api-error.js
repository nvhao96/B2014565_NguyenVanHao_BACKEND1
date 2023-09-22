class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this._message=message;
    }
}

module.exports = ApiError;