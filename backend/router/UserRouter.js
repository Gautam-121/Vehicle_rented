const express = require("express")
const router = express.Router()
const {register , login , logOut} = require("../controller/userController.js")

router.route("/user/register").post(register)

router.route("/user/login").post(login)

router.route("/user/login").get(logOut)


module.exports = router