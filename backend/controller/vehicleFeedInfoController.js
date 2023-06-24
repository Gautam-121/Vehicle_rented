const Vehicle = require("../model/vehicleFeedModel")
const ErrorHandler = require("../utils/errorHandler")


// Owner or admin enter Vehicle Info
const vehicleInfo = async(req, res, next) => {

    try {

        console.log("Gauatm")

        console.log(req.body)

        const { numberOfWheels, vehicleType, vehicleModel } = req.body

        const vehicleInfo = await Vehicle.create(req.body)

        console.log("dhakate")

        res.status(201).json({
            success : true,
            vehicleInfo
        })

    }catch(err){
        return next(new ErrorHandler(err , 500))
    }
}

const getVehicleData = async (req, res, next) => {

    try {

        const vehicleInfo = await Vehicle.find()

        res.status(200).json({
            success: true,
            vehicleInfo
        })

    }catch(err){
        return next(new ErrorHandler(err , 500))
    }
}

module.exports = {vehicleInfo , getVehicleData}