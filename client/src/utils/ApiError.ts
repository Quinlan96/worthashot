class ApiError extends Error {
    status: number
    message: string
    date: Date

    constructor(status: number, message: string, ...params: any) {
        super(...params)

        // Maintain stack trace
        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError)
        }

        this.name = 'ApiError'

        // Custom debugging information
        this.status = status
        this.message = message
        this.date = new Date()
    }
}

export default ApiError