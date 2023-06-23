const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({

    numberOfWheels:{
        type:Number,
        required:[true, "Please Enter Wheel number"],
        enum : [2 , 4]
    },
    vehicleType:{
        type:String,
        required:[true , "Please Enter vehicle-Type"]
    },
    vehicleModel:{
        type:String,
        required:[true,"Please Enter vehicleModel"]
    },
    quntity:{
        type:Number,
        default:1
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }
})

module.exports = mongoose.model("vehicle" , vehicleSchema)