class ErrorHandler extends Error{
    constructor(message , stattusCode){
        super(message)
        this.stattusCode = stattusCode
    }
}

module.exports = ErrorHandler