const Vehicle = require("../model/vehicleFeedModel")
const ErrorHandler = require("../utils/errorHandler")


// Owner or admin enter Vehicle Info
const vehicleInfo = async (req, res, next) => {

    try {

        const { numberOfWheels, vehicleType, vehicleModel } = req.body

        const vehicleInfo = await Vehicle.create({
            numberOfWheels,
            vehicleType,
            vehicleModel
        })

        res.status(201).json({
            success : true,
            vehicleInfo
        })

    }catch(err){

        return new ErrorHandler(err , 500)
    }

}

module.exports = {vehicleInfo}