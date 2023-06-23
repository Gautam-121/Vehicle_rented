const User = require('../model/userModel.js')
const ErrorHandler = require("../utils/errorHandler.js")

const register = async (req, res, next) => {

    try {



    } catch (err) {
        return new ErrorHandler(err, 500)
    }
}

const login = async (req, res, next) => {

    try {



    } catch (err) {
        return new ErrorHandler(err, 500)
    }
}

const logOut = async (req, res, next) => {

    try {



    } catch (err) {
        return new ErrorHandler(err, 500)
    }
}

module.exports = {register , login , logOut}