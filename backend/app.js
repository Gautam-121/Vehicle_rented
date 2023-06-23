const express = require("express")
const app = express()
const cors = require("cors")
const errorMiddleWare = require("./middleware/errorMoiddleware.js")


app.use(express.json())
app.use(cors())

const UserRouter = require("./router/UserRouter.js")
const VehicleRouter = require("./router/VehicleRouter.js")

app.use("/api/v1" , UserRouter) 
app.use("/api/v1" , VehicleRouter) 

app.use(errorMiddleWare)


module.exports = app