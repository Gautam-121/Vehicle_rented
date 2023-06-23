const express = require("express")
const router = express.Router()
const {vehicleInfo} = require("../controller/vehicleFeedInfoController")

router.route("/admin/vehicleInfo").post(vehicleInfo)