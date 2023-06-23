const express = require("express")
const router = express.Router()
const {vehicleInfo , getVehicleData} = require("../controller/vehicleFeedInfoController")

router.route("/admin/vehicleInfo").post(vehicleInfo)

router.route("/getVehicle").get(getVehicleData)

module.exports = router