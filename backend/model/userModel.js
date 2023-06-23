const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true , "Please Enter the Name"],
        trim:true
    },
    lastName:{
        type:String,
        required:[true , "Please Enter the Name"],
        trim:true
    },
    numberOfWheels:{
        type:Number,
        required:[true, "Please Enter Wheel number"],
        enum : [2 , 4]
    },
    carType:{
        type:String,
        required:[true , "Please Enter Cra-Type"]
    },
    vehicleModel:{
        type:String,
        required:[true,"Please Enter vehicleModel"]
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date(date.now())
    }
})

module.exports = mongoose.model("user" , userSchema)