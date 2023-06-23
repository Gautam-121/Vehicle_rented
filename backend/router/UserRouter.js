const express = require("express")
const router = express.Router()
const {register , login , logOut} = require("../controller/userController.js")

router.route("/user/register").post(register)


module.exports = router