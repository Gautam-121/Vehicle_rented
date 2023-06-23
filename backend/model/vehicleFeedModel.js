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
    createdAt:{
        type:Date,
        default:new Date(date.now())
    }
})

module.exports = mongoose.model("vehicle" , vehicleSchema)