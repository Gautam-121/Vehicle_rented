const User = require('../model/userModel.js')
const Vehicle = require("../model/vehicleFeedModel.js")
const ErrorHandler = require("../utils/errorHandler.js")

const register = async (req, res, next) => {

    try {

        const { firstName, lastName, numberOfWheels, vehicleType, vehicleModel, startDate, endDate } = req.body

        const isVehicleAvailable = await Vehicle.findOne({ vehicleModel, vehicleType })

        if (isVehicleAvailable?.quntity == 0) {
            return new ErrorHandler("This Vehicle is Already rented , plesae Book another vehicle for rent", 400)
        }

        const rented = await User.create({
            firstName,
            lastName,
            numberOfWheels,
            vehicleType,
            vehicleModel,
            startDate,
            endDate
        })

        isVehicleAvailable.quntity -= 1

        isVehicleAvailable.save()

        res.status(201).json({
            success: true,
            message: rented
        })

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

module.exports = { register, login, logOut }