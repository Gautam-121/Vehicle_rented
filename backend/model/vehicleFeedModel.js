const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({

    numberOfWheels:{
        type:String,
        required:[true, "Please Enter Wheel number"],
        enum : ["2" , "4"]
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
    price:{
        type:Number,
        required:[true , "Please Enter the price"],
        min:[10 , "Price Should be above 10"]
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }
})

module.exports = mongoose.model("vehicle" , vehicleSchema)